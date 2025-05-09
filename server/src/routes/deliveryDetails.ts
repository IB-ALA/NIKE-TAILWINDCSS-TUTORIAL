import express from "express";
import validator from "validator";
import {
  AuthenticatedRequest,
  authenticateUserToken,
} from "../middleware/auth";
import { UserType } from "../types/user";
import { DDetails, DeliveryDetailsType } from "../types/delivery-details";
import DeliveryDetails, {
  DeliveryDetailsDocument,
} from "../models/Delivery-details";

const router = express.Router();

router.get(
  "/:id",
  authenticateUserToken,
  async (req: AuthenticatedRequest, res) => {
    const user: UserType | undefined = req.user;
    // console.log(user?.userId);

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    try {
      const deliveryDetails: DeliveryDetailsType | null =
        await DeliveryDetails.findOne({
          userId: user.userId,
        }).lean<DeliveryDetailsType>();

      if (!deliveryDetails) {
        res.json({ deliveryDetails: {} });
        return;
      }

      res.json({ deliveryDetails: deliveryDetails?.details });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to get delivery details." });
    }
  }
);

router.patch(
  "/:id",
  authenticateUserToken,
  async (req: AuthenticatedRequest, res) => {
    const user: UserType | undefined = req.user;
    // console.log(user?.userId);

    //   {
    // "deliveryDetails": {
    //     "name": "IB Ala",
    //     "email": "ishaqibrahimyusif@gmail.com",
    //     "phone": "0577100023",
    //     "city": "accra",
    //     "address": "lakeside room 1"
    // }
    // }

    if (!req.body) {
      res.status(404).json({ error: "Provide request body!" });
      return;
    }

    const { deliveryDetails }: { deliveryDetails: DDetails } = req.body;

    if (!deliveryDetails) {
      res.status(404).json({ error: "Provide deliveryDetails in body!" });
      return;
    }

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    // inspect all other inputs
    if (!validator.isEmail(deliveryDetails?.email!)) {
      res.status(400).json({ error: "Invalid email address." });
      return;
    }

    try {
      const userDeliveryDetails: DeliveryDetailsDocument | null =
        await DeliveryDetails.findOne({ userId: user.userId });

      if (!userDeliveryDetails) {
        res.json({ error: "Placed an order first.", details: {} });
        return;
      }

      if (userDeliveryDetails.orderId) {
        userDeliveryDetails.userId = undefined;
        await userDeliveryDetails.save();

        const newDetails = new DeliveryDetails({
          userId: user.userId,
          details: deliveryDetails,
        });
        const newUserDeliveryDetails = await newDetails.save();

        res.json({
          message: "Billing details updated successfully",
          details: newUserDeliveryDetails?.details,
        });

        return;
      }

      userDeliveryDetails.details = deliveryDetails;
      const updatedUserDeliveryDetails = await userDeliveryDetails.save();

      res.json({
        message: "Billing details updated successfully",
        details: updatedUserDeliveryDetails?.details,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to edit delivery details." });
    }
  }
);

export default router;

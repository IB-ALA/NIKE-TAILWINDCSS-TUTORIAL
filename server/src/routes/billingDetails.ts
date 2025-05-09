import express from "express";
import {
  AuthenticatedRequest,
  authenticateUserToken,
} from "../middleware/auth";
import { UserType } from "../types/user";
import { BDetails, BillingDetailsType } from "../types/billing-details";
import BillingDetails, {
  BillingDetailsDocument,
} from "../models/Billing-details";

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
      const billingDetails: BillingDetailsType | null =
        await BillingDetails.findOne({
          userId: user.userId,
        }).lean<BillingDetailsType>();

      if (!billingDetails) {
        res.json({ billingDetails: {} });
        return;
      }

      res.json({ billingDetails: billingDetails?.details });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to get billing details." });
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
    // "billingDetails": {
    //     "momoProvider": "MTN",
    //     "momoNumber": "0592302200",
    //     "cardNumber": "6574 4657 7465 7467",
    //     "cardCvc": "234",
    //     "cardExpiry": "07/25"
    // }
    // }

    if (!req.body) {
      res.status(404).json({ error: "Provide request body!" });
      return;
    }

    const { billingDetails }: { billingDetails: BDetails } = req.body;

    // check all inputs
    if (!billingDetails) {
      res.status(404).json({ error: "Provide billingDetails in body!" });
      return;
    }

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    try {
      const userBillingDetails: BillingDetailsDocument | null =
        await BillingDetails.findOne({ userId: user.userId });

      if (!userBillingDetails) {
        res.json({ error: "Placed an order first.", details: {} });
        return;
      }

      if (userBillingDetails.orderId) {
        userBillingDetails.userId = undefined;
        await userBillingDetails.save();

        const newDetails: BillingDetailsDocument = new BillingDetails({
          userId: user.userId,
          details: billingDetails,
        });
        const newUserBillingDetails: BillingDetailsDocument =
          await newDetails.save();

        res.json({
          message: "Billing details updated successfully",
          details: newUserBillingDetails?.details,
        });

        return;
      }

      userBillingDetails.details = billingDetails;
      const updatedUserBillingDetails = await userBillingDetails.save();

      res.json({
        message: "Billing details updated successfully",
        details: updatedUserBillingDetails?.details,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to edit billing details." });
    }
  }
);

export default router;

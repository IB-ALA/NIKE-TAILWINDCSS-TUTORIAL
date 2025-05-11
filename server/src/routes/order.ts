import express from "express";
import {
  AuthenticatedRequest,
  authenticateUserToken,
} from "../middleware/auth";
import { DDetails } from "../types/delivery-details";
import { BDetails } from "../types/billing-details";
import { OrderType } from "../types/order";
import { UserType } from "../types/user";
import validator from "validator";
import Order, { OrderDocument } from "../models/Order";
import BillingDetails, {
  BillingDetailsDocument,
} from "../models/Billing-details";
import DeliveryDetails, {
  DeliveryDetailsDocument,
} from "../models/Delivery-details";
import { Types } from "mongoose";
import User, { UserDocument } from "../models/User";
import { createUser } from "../utils/createUser";
import { createOrder } from "../utils/createOrder";

interface OrderRequestBody {
  userId?: string;
  saveDetails?: string;
  deliveryDetails: DDetails;
  billingDetails: BDetails;
  order: Pick<OrderType, "total" | "orderItems">;
}

const router = express.Router();

router.post("/", async (req: AuthenticatedRequest, res) => {
  const {
    userId,
    saveDetails,
    deliveryDetails,
    billingDetails,
    order,
  }: OrderRequestBody = req.body;

  // if there is a userId, add it to the req to be authenticated
  let user: UserType | undefined;
  if (userId) {
    const registeredUser: UserDocument | null = await User.findOne({
      _id: userId,
    });

    // console.log(registeredUser);

    if (!registeredUser) {
      res.status(409).json({ error: "User verification failed" });
      return;
    }

    user = createUser(registeredUser);
  }

  // if userId is provided but the user is not authenticated, return.
  if (userId && !user) {
    res.status(409).json({ message: "User not authenticated" });
    return;
  }

  // validate all the inputs
  if (!deliveryDetails?.email || !validator.isEmail(deliveryDetails.email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  try {
    // for a user that wants to save the details
    if (user && saveDetails === "true") {
      // console.log({ saveDetails });

      const newOrder: OrderDocument = new Order({
        userId: user.userId,
        orderItems: order.orderItems,
        total: order.total,
      });
      const placedOrder = await newOrder.save();
      const orderId: Types.ObjectId = placedOrder._id as Types.ObjectId;

      let regUserDetails: {
        billingDetails?: object;
        deliveryDetails?: object;
      } = {};

      // save this details for the user
      // check if they have an existing details and modify it, if not save details as new

      // billing details section
      const userBillingDetails: BillingDetailsDocument | null =
        await BillingDetails.findOne({
          userId: user.userId,
        });

      if (!userBillingDetails) {
        // means it's their first order

        // save order details for the user since he doesn't have one.
        const newUserBillingDetails: BillingDetailsDocument =
          new BillingDetails({
            userId: user.userId,
            orderId,
            details: billingDetails,
          });
        const savedUserBillingDetails = await newUserBillingDetails.save();

        regUserDetails.billingDetails =
          savedUserBillingDetails.details as object;
      } else {
        // replace old with new details.
        if (userBillingDetails.orderId) {
          // remove the userId from the existing details that was for an order..
          userBillingDetails.userId = undefined;
          await userBillingDetails.save();

          // save the user's new details...
          const newUserDetails: BillingDetailsDocument = new BillingDetails({
            userId: user.userId,
            details: { ...userBillingDetails.details, ...billingDetails },
          });
          const newUserBillingDetails: BillingDetailsDocument =
            await newUserDetails.save();

          // add the user's new details to the regUserDetails obj to be sent to CS...
          regUserDetails.billingDetails =
            newUserBillingDetails.details as object;
        } else {
          // FOR EXISTING DETAIALS WITH NO orderId ATTATCHED

          // save the user's new details...
          userBillingDetails.details = {
            ...userBillingDetails.details,
            ...billingDetails,
          };

          const updatedUserBillingDetails = await userBillingDetails.save();

          regUserDetails.billingDetails =
            updatedUserBillingDetails.details as object;
        }

        // after saving user's new details for when the exiting one had an orderId and not,
        // save the new order's details
        const newDetailsForOrder: BillingDetailsDocument = new BillingDetails({
          orderId,
          details: billingDetails,
        });
        await newDetailsForOrder.save();
      }

      // delivery details section
      const userDeliveryDetails: DeliveryDetailsDocument | null =
        await DeliveryDetails.findOne({
          userId: user.userId,
        });

      if (!userDeliveryDetails) {
        // means it's their first order

        // save order details for the user since he doesn't have one.
        const newUserDeliveryDetails: DeliveryDetailsDocument =
          new DeliveryDetails({
            userId: user.userId,
            orderId,
            details: deliveryDetails,
          });
        const savedUserDeliveryDetails = await newUserDeliveryDetails.save();

        regUserDetails.deliveryDetails =
          savedUserDeliveryDetails.details as object;
      } else {
        // replace old with new details.
        if (userDeliveryDetails.orderId) {
          // remove the userId from the existing details that was for an order..
          userDeliveryDetails.userId = undefined;
          await userDeliveryDetails.save();

          // save the user's new details...
          const newDetails: DeliveryDetailsDocument = new DeliveryDetails({
            userId: user.userId,
            details: { ...userDeliveryDetails.details, ...deliveryDetails },
          });
          const newUserDeliveryDetails = await newDetails.save();

          regUserDetails.deliveryDetails =
            newUserDeliveryDetails.details as object;
        } else {
          // FOR EXISTING DETAIALS WITH NO orderId ATTATCHED

          // save the user's new details...
          userDeliveryDetails.details = {
            ...userDeliveryDetails.details,
            ...deliveryDetails,
          };
          userDeliveryDetails.orderId = orderId;
          const updatedUserDeliveryDetails = await userDeliveryDetails.save();

          regUserDetails.deliveryDetails =
            updatedUserDeliveryDetails.details as object;
        }

        // after saving user's new details for when the exiting one had an orderId and not,
        // save the new order's details
        const newDetailsForOrder: DeliveryDetailsDocument = new DeliveryDetails(
          {
            orderId,
            details: deliveryDetails,
          }
        );
        await newDetailsForOrder.save();
      }

      res.json({
        message: "Order Placed successfully",
        orderId,
        ...regUserDetails,
      });
      return;
    }
    // reg "user and save" ends here..

    // customer is a user, but doesn't want details saved
    if (user) {
      const newOrder: OrderDocument = new Order({
        userId: user.userId,
        orderItems: order.orderItems,
        total: order.total,
      });
      const placedOrder = await newOrder.save();
      const orderId = placedOrder._id;

      const userDeliveryDetails: DeliveryDetailsDocument = new DeliveryDetails({
        orderId,
        details: deliveryDetails,
      });
      await userDeliveryDetails.save();

      const userBillingDetails: BillingDetailsDocument = new BillingDetails({
        orderId,
        details: billingDetails,
      });
      await userBillingDetails.save();

      res.json({
        message: "Order Placed successfully",
        orderId,
      });
      return;
    }

    // for unregistered customer..
    const newOrder: OrderDocument = new Order({
      orderItems: order.orderItems,
      total: order.total,
    });
    const placedOrder = await newOrder.save();
    const orderId = placedOrder._id;

    const userDeliveryDetails: DeliveryDetailsDocument = new DeliveryDetails({
      orderId,
      details: deliveryDetails,
    });
    await userDeliveryDetails.save();

    const userBillingDetails: BillingDetailsDocument = new BillingDetails({
      orderId,
      details: billingDetails,
    });
    await userBillingDetails.save();

    res.json({
      message: "Order Placed successfully",
      orderId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

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
      const orders: OrderDocument[] = await Order.find({
        userId: user.userId,
      });
      res.json({ orders: createOrder(orders) });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to get orders." });
    }
  }
);

export default router;

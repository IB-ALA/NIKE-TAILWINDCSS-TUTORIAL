import { Schema, model, Types, Document } from "mongoose";
import { BDetails } from "../types/billing-details";

export interface BillingDetailsDocument extends Document {
  userId?: Types.ObjectId;
  orderId?: Types.ObjectId;
  details: BDetails;
}

const billingDetailsSchema = new Schema<BillingDetailsDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: false },
  orderId: { type: Schema.Types.ObjectId, ref: "Order", required: false },
  details: {
    type: new Schema(
      {
        momoProvider: { type: String, required: false },
        momoNumber: { type: String, required: false },
        cardNumber: { type: String, required: false },
        cardCvc: { type: String, required: false },
        cardExpiry: { type: String, required: false },
      },
      { _id: false }
    ),
    required: true,
  },
});

export default model<BillingDetailsDocument>(
  "BillingDetails",
  billingDetailsSchema
);

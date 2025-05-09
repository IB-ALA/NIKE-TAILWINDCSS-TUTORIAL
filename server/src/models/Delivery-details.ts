import { Schema, model, Types, Document } from "mongoose";
import { DDetails } from "../types/delivery-details";

export interface DeliveryDetailsDocument extends Document {
  userId?: Types.ObjectId;
  orderId?: Types.ObjectId;
  details: DDetails;
}

const deliveryDetailsSchema = new Schema<DeliveryDetailsDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  details: {
    type: new Schema(
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
      },
      { _id: false }
    ),
    required: true,
  },
});

export default model<DeliveryDetailsDocument>(
  "DeliveryDetails",
  deliveryDetailsSchema
);

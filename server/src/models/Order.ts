import { Schema, model, Document, Types } from "mongoose";
import { OrderStatus } from "../types/order";

export interface OrderItem {
  productId: Types.ObjectId;
  quantity: number;
  size: string;
  color: string;
}

export interface OrderDocument extends Document {
  userId?: Types.ObjectId;
  orderItems: OrderItem[];
  total: number;
  status: OrderStatus;
  orderDate: Date;
}

const orderItemSchema = new Schema<OrderItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
  },
  { _id: false }
);

const orderSchema = new Schema<OrderDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  orderItems: { type: [orderItemSchema], required: true },
  total: { type: Number, required: true },
  status: {
    type: String,
    enum: [
      "created",
      "processing",
      "delivering",
      "delivered",
      "failed",
      "cancelled",
    ],
    default: "created",
    required: true,
  },
  orderDate: { type: Date, required: true, default: Date.now },
});

export default model<OrderDocument>("Order", orderSchema);

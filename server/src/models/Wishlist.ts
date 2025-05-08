import { Schema, Types, model, Document } from "mongoose";

export interface Wishlist extends Document {
  userId: Types.ObjectId;
  productIds: Types.ObjectId[];
}

const wishlistSchema = new Schema<Wishlist>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productIds: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

export default model<Wishlist>("Wishlist", wishlistSchema);

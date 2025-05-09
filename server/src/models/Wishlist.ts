import { Schema, Types, model, Document } from "mongoose";

export interface WishlistDocument extends Document {
  userId: Types.ObjectId;
  productIds: Types.ObjectId[];
}

const wishlistSchema = new Schema<WishlistDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productIds: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

export default model<WishlistDocument>("Wishlist", wishlistSchema);

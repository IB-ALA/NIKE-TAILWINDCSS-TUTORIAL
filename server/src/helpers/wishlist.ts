import { wishlists } from "../data/wishlist";
import { Wishlist } from "../types/wishlist";

export function getWishlist(userId: string): Wishlist | undefined {
  return wishlists.find((wishlist: Wishlist) => wishlist.userId === userId);
}

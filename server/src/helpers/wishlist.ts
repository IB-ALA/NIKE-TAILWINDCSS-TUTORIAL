import { Wishlist, wishlists } from "../data/wishlist";

export function getWishlist(userId: string): Wishlist | undefined {
  return wishlists.find((wishlist: Wishlist) => wishlist.userId === userId);
}

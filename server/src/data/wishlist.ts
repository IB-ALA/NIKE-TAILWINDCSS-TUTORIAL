import { Wishlist } from "../types/wishlist";

// would be coming from db
export let wishlists: Wishlist[] = [{ userId: "User234", list: ["54376"] }];

export function updateWishlists(newWishlists: Wishlist[]): void {
  wishlists = newWishlists;
}

import { updateWishlists, wishlists } from "../data/wishlist";
import { Wishlist } from "../types/wishlist";

export function getWishlist(userId: string): Wishlist | undefined {
  return wishlists.find((wishlist: Wishlist) => wishlist.userId === userId);
}

export function updateWishlist(userId: string, productId: string) {
  // check if user has a list..
  const userWishlist: Wishlist | undefined = getWishlist(userId);

  if (!userWishlist) {
    createNewWishlist(userId, productId);
    return;
  }

  // check if product is in list, if yes remove it, if no, add it
  if (userWishlist.list.includes(productId)) {
    userWishlist.list = userWishlist.list.filter(
      (listItemId) => listItemId !== productId
    );
  } else {
    userWishlist.list.push(productId);
  }

  const newWishlists: Wishlist[] = wishlists.filter(
    (wishlist: Wishlist) => wishlist.userId !== userId
  );

  newWishlists.push(userWishlist);
  console.log({ newWishlists });

  updateWishlists(newWishlists);
}

export function createNewWishlist(userId: string, productId: string): void {
  // create a new wishlist obj
  const wishlist: Wishlist = { userId, list: [productId] };
  wishlists.push(wishlist);
}

export interface Wishlist {
  userId: string;
  list: string[];
}

// would be coming from db
export const wishlists: Wishlist[] = [{ userId: "User234", list: ["54376"] }];

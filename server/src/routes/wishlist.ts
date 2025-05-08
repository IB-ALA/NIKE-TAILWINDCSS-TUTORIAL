import express from "express";
import { AuthenticatedRequest, authUserId } from "../middleware/users";
import { User } from "../types/user";
import Wishlist, { Wishlist as WishlistDocument } from "../models/Wishlist";
import { Wishlist as WishlistType } from "../types/wishlist";

const router = express.Router();

// TEST
router.get("/:id", authUserId, async (req: AuthenticatedRequest, res) => {
  const user: User | undefined = req.user;
  // console.log({user});

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  try {
    const wishlist: WishlistType | null = await Wishlist.findOne({
      userId: user.userId,
    }).lean<WishlistType>();

    if (!wishlist) {
      res.json({ wishlist: [] });
      return;
    }

    res.json({ wishlist: wishlist?.productIds });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get wishlist." });
  }
});

// TEST
router.patch("/:id", authUserId, async (req: AuthenticatedRequest, res) => {
  const user: User | undefined = req.user;
  // console.log(user?.userId);

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  if (!req.body) {
    res.status(404).json({ error: "Provide request body" });
    return;
  }

  const { wishlistProduct }: { wishlistProduct: { productId: string } } =
    req.body;

  const { productId }: { productId: string } = wishlistProduct;

  if (!productId) {
    res.status(404).json({ error: "Provide productId" });
    return;
  }

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  try {
    const wishlist: WishlistDocument | null = await Wishlist.findOne({
      userId: user.userId,
    });

    if (!wishlist) {
      const newUserWishlist = new Wishlist({
        userId: user.userId,
        productIds: [productId],
      });

      await newUserWishlist.save();
      res.json({
        message: "Wishlist updated successfully",
        wishlist: newUserWishlist?.productIds,
      });
      return;
    }

    const isProductInWishlist = wishlist?.productIds.includes(productId as any);

    let newList = wishlist?.productIds.slice();

    if (isProductInWishlist) {
      newList = newList.filter((id) => id.toString() !== productId.toString());
    } else {
      newList.push(productId as any);
    }

    wishlist.productIds = newList;

    const updatedWishlist = await wishlist.save();

    res.json({
      message: "Wishlist updated successfully",
      wishlist: updatedWishlist?.productIds,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update wishlist." });
  }
});

export default router;

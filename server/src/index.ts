import express from "express";
import validator from "validator";
import { products } from "./data/product";
import { Product } from "./types/product";
import { User } from "./types/user";
import { getOrders, placeOrder } from "./helpers/orders";
import { Order } from "./types/order";
import { AuthenticatedRequest, authUserId } from "./middleware/users";
import { Wishlist } from "./types/wishlist";
import { getWishlist, updateWishlist } from "./helpers/wishlist";
import {
  getDeliverDetails,
  replaceUserDeliverDetails,
  saveNewDeliveryDetails,
  updateDeliveryDetails,
} from "./helpers/deliver-details";
import { DeliveryDetails, DDetails } from "./types/delivery-details";
import {
  getBillingDetails,
  replaceUserBillingDetails,
  saveNewBillingDetails,
  updateBillingDetails,
} from "./helpers/billing-details";
import { BDetails, BillingDetails } from "./types/billing-details";
import {
  addEmailToSubcribers,
  isEmailSubbscribed,
  removeEmailFromSubcribers,
} from "./helpers/newsletter";
import path from "path";
import { sendNewsletterEmail } from "./mailor/sendNewsletter";
import { orders } from "./data/orders";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "../public")));

app.get("/", (_req, res) => {
  res.send("Hello from Nike TS backend!");
});

app.get("/products", (_req, res) => {
  const dbProducts: Product[] = products;
  res.json({ products: dbProducts });
});

app.get("/orders/:id", authUserId, (req: AuthenticatedRequest, res) => {
  const id: string = req.params.id;
  const user: User | undefined = req.user;
  console.log(user?.id);

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  const orders: Order[] = getOrders(id);
  res.json({ orders });
});

app.get("/wishlist/:id", authUserId, (req: AuthenticatedRequest, res) => {
  const id: string = req.params.id;
  const user: User | undefined = req.user;
  console.log(user?.id);

  if (!user) {
    res.status(404).json({ error: "User not authenticated" });
    return;
  }

  const wishlist: Wishlist | undefined = getWishlist(id);

  if (!wishlist) {
    res.json({ wishlist: [] });
    return;
  }

  res.json({ wishlist: wishlist?.list });
});

// Add and removal of product from wishlist
app.patch("/wishlist/:id", authUserId, (req: AuthenticatedRequest, res) => {
  const userId: string = req.params.id;
  const user: User | undefined = req.user;
  console.log(user?.id);

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

  updateWishlist(userId, productId);

  res.json({ message: "Wishlist updated successfully" });
});

app.get(
  "/delivery-details/:id",
  authUserId,
  (req: AuthenticatedRequest, res) => {
    const id: string = req.params.id;
    const user: User | undefined = req.user;
    console.log(user?.id);

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    const deliveryDetails: DeliveryDetails | undefined = getDeliverDetails(id);

    if (!deliveryDetails) {
      res.json({ deliveryDetails: [] });
      return;
    }

    res.json({ deliveryDetails: deliveryDetails?.details });
  }
);

// editing delivery details
app.patch(
  "/delivery-details/:id",
  authUserId,
  (req: AuthenticatedRequest, res) => {
    const id: string = req.params.id;
    const user: User | undefined = req.user;
    console.log(user?.id);

    //   {
    // "deliveryDetails": {
    //     "name": "IB Ala",
    //     "email": "ishaqibrahimyusif@gmail.com",
    //     "phone": "0577100023",
    //     "city": "accra",
    //     "address": "lakeside room 1"
    // }
    // }

    if (!req.body) {
      res.status(404).json({ error: "Provide request body!" });
      return;
    }

    const { deliveryDetails }: { deliveryDetails: DDetails } = req.body;

    if (!deliveryDetails) {
      res.status(404).json({ error: "Provide deliveryDetails in body!" });
      return;
    }

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    let userDeliveryDetails: DeliveryDetails | undefined =
      getDeliverDetails(id);

    if (!userDeliveryDetails) {
      res.status(404).json({ error: "Placed an order first." });
      return;
    }

    const newDetails: DeliveryDetails = {
      userId: user.id,
      details: { ...deliveryDetails },
    };

    if (!validator.isEmail(newDetails?.details?.email!)) {
      res.status(400).json({ error: "Invalid email address." });
      return;
    }

    updateDeliveryDetails(newDetails);

    res.json({
      message: "Delivery details updated successfully",
      details: newDetails?.details,
    });
  }
);

app.get(
  "/billing-details/:id",
  authUserId,
  (req: AuthenticatedRequest, res) => {
    const id: string = req.params.id;
    const user: User | undefined = req.user;
    console.log(user?.id);

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    const billingDetails: BillingDetails | undefined = getBillingDetails(id);

    if (!billingDetails) {
      res.json({ billingDetails: [] });
      return;
    }

    res.json({ billingDetails: billingDetails?.details });
  }
);

// editing delivery details
app.patch(
  "/billing-details/:id",
  authUserId,
  (req: AuthenticatedRequest, res) => {
    const id: string = req.params.id;
    const user: User | undefined = req.user;
    console.log(user?.id);

    //   {
    // "billingDetails": {
    //     "momoProvider": "MTN",
    //     "momoNumber": "0592302200",
    //     "cardNumber": "6574 4657 7465 7467",
    //     "cardCvc": "234",
    //     "cardExpiry": "07/25"
    // }
    // }

    if (!req.body) {
      res.status(404).json({ error: "Provide request body!" });
      return;
    }

    const { billingDetails }: { billingDetails: BDetails } = req.body;

    if (!billingDetails) {
      res.status(404).json({ error: "Provide billingDetails in body!" });
      return;
    }

    if (!user) {
      res.status(404).json({ error: "User not authenticated" });
      return;
    }

    let userBillingDetails: BillingDetails | undefined = getBillingDetails(id);

    if (!userBillingDetails) {
      res.status(404).json({ error: "Placed an order first." });
      return;
    }

    const newDetails: BillingDetails = {
      userId: user.id,
      details: { ...billingDetails },
    };

    updateBillingDetails(newDetails);

    res.json({
      message: "Billing details updated successfully",
      details: newDetails?.details,
    });
  }
);

app.post("/newsletter/subscribe", async (req: AuthenticatedRequest, res) => {
  // {
  //   "newsletterSubscriber": {
  //     "email": "iishaqyusif@gmail.com";
  //   }
  // }

  const { newsletterSubscriber }: { newsletterSubscriber: { email: string } } =
    req.body;

  if (!newsletterSubscriber || !newsletterSubscriber?.email) {
    res.status(400).json({ error: "Email is required." });
    return;
  }

  const { email }: { email: string } = newsletterSubscriber;

  if (!validator.isEmail(email)) {
    res.status(400).json({ error: "Invalid email format." });
    return;
  }

  // const cleanEmail = validator.normalizeEmail(email);
  // console.log(cleanEmail);

  // added user to the newletter db... and send a welcome text.. maybe
  // all here in a try/catch block
  try {
    if (isEmailSubbscribed(email)) {
      res.status(409).json({ message: "Email already subscribed." });
      return;
    }

    addEmailToSubcribers(email);

    const result = await sendNewsletterEmail(email);

    res
      .status(201)
      .json({ message: "Subscribed successfully!", data: result?.response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send email" });
  }

  // console.error(err);
  // return res.status(500).json({ error: 'Internal server error' });
});

// removing user from newsletter subs
app.delete(
  "/newsletter/unsubscribe/:email",
  async (req: AuthenticatedRequest, res) => {
    const email: string = req.params.email;
    console.log({ email });

    if (!email) {
      res.status(400).json({ error: "Email is required." });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ error: "Invalid email format." });
      return;
    }

    // remove user from the newletter db...
    // all here in a try/catch block
    try {
      if (!isEmailSubbscribed(email)) {
        res.status(409).json({ error: "Email not subscribed." });
        return;
      }

      removeEmailFromSubcribers(email);

      if (!isEmailSubbscribed(email)) {
        res.status(201).json({ message: "Unsubscribed successfully!" });
        return;
      } else {
        res
          .status(409)
          .json({ error: "Unsubscription failed. Try again later." });
        return;
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "Unsubscription failed. Try again later." });
    }
  }
);

// left with payment integration, after putting in db, if user confirms order,
// maybe we call a diff endpoint to verify the payment and change "pending" status
// of order, using the sent orderId, to "placed"

// placing an order
app.post("/orders", (req: AuthenticatedRequest, res) => {
  const { userId }: { userId: string | undefined } = req.body;
  const { saveDetails }: { saveDetails: string | undefined } = req.body;
  const { deliveryDetails }: { deliveryDetails: DDetails } = req.body;
  const { billingDetails }: { billingDetails: BDetails } = req.body;
  const { order }: { order: Pick<Order, "total" | "orderItems"> } = req.body;

  // if there is a userId, add it to the req to be authenticated
  if (userId) {
    req.params.id = userId!;
    authUserId(req, res, () => {});
  }

  const user: User | undefined = req.user;

  // if userId is provided but the user is not authenticated, return.
  if (userId && !user) {
    return;
  }

  // for a user that wants to save the details
  if (user && saveDetails === "true") {
    console.log({ saveDetails });

    // save this details for the user
    // check if they have an existing details and modify it.
    let userBillingDetails: BillingDetails | undefined = getBillingDetails(
      user.id
    );
    let userDeliveryDetails: DeliveryDetails | undefined = getDeliverDetails(
      userId!
    );

    const orderId: string = placeOrder({
      userId: user.id,
      orderItems: order.orderItems,
      total: order.total,
    });

    // save new billing details
    if (!userBillingDetails) {
      // means it's their first order
      userBillingDetails = {
        userId: user.id,
        orderId,
        details: billingDetails,
      };

      saveNewBillingDetails(userBillingDetails!);
    } else {
      userBillingDetails = {
        orderId,
        userId: user.id,
        details: { ...billingDetails },
      };
      replaceUserBillingDetails(userBillingDetails);
    }

    // save new delivery details
    if (!userDeliveryDetails) {
      // means it's their first order
      userDeliveryDetails = {
        userId: user.id,
        orderId,
        details: deliveryDetails,
      };

      // check email
      if (!validator.isEmail(userDeliveryDetails?.details?.email!)) {
        res.status(400).json({ error: "Invalid email address." });
        return;
      }

      saveNewDeliveryDetails(userDeliveryDetails!);
    } else {
      userDeliveryDetails = {
        orderId,
        userId: user.id,
        details: { ...deliveryDetails },
      };

      // check email
      if (!validator.isEmail(userDeliveryDetails?.details?.email!)) {
        res.status(400).json({ error: "Invalid email address." });
        return;
      }
      replaceUserDeliverDetails(userDeliveryDetails);
    }

    res.json({
      message: "Order Placed successfully",
      orderId,
    });

    console.log(orders);
    return;
  }
  // reg "user and save" ends here..

  // if i am a registered user and I say don't save new details,
  // it's same as placing order for ordinary users too

  const orderId: string = placeOrder({
    orderItems: order.orderItems,
    total: order.total,
  });

  const userDeliveryDetails = {
    orderId,
    details: { ...deliveryDetails },
  };
  // check email
  if (!validator.isEmail(userDeliveryDetails?.details?.email!)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }
  saveNewDeliveryDetails(userDeliveryDetails);

  const userBillingDetails = {
    orderId,
    details: { ...billingDetails },
  };
  saveNewBillingDetails(userBillingDetails);

  res.json({
    message: "Order Placed successfully",
    orderId,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// npm uninstall -g ngrok
// npx ngrok config add-authtoken 2w2efi3IFK7vscRQo9fOnG1pGae_3iu4oSGqNmFhCcohB3VFv

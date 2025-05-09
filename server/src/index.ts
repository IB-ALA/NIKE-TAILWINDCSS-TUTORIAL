import express from "express";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/auth";
import orderRoutes from "./routes/order";
import productRoutes from "./routes/product";
import wishlistRoutes from "./routes/wishlist";
import deliveryDetailsRoutes from "./routes/deliveryDetails";
import billingDetailsRoutes from "./routes/billingDetails";
import newsletterRoutes from "./routes/newsletter";
import mongoose from "mongoose";
import Product from "./models/Product";

const app = express();
const PORT = 5000;

// use app.use(cors()) rather. Install it first
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS, PATCH"
//     );
//     res.status(200).send();
//   } else {
//     next();
//   }
// });

app.use(cors());

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "../public")));

app.get("/", (_req, res) => {
  res.send("Hello from Nike TS backend!");
});

app.use("/auth", authRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/delivery-details", deliveryDetailsRoutes);
app.use("/billing-details", billingDetailsRoutes);
app.use("/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// left with payment integration, after putting in db, if user confirms order,
// maybe we call a diff endpoint to verify the payment and change "pending" status
// of order, using the sent orderId, to "placed"

async function insertProducts() {
  try {
    await Product.insertMany([
      {
        name: "Airforce 1",
        image:
          "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241555/big-shoe1_rqnhb4.png",
        price: 2050,
        sizes: [35, 37, 39, 40, 42, 44],
      },
      {
        name: "Nike Air Jordan-01",
        image:
          "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241556/big-shoe2_ldjodi.png",
        price: 1550,
        sizes: [35, 37, 39, 40, 42, 44],
        productDetails: {
          colors: [
            {
              name: "red",
              image:
                "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241556/big-shoe2_ldjodi.png",
            },
            {
              name: "white",
              image:
                "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241555/big-shoe1_rqnhb4.png",
            },
            { name: "black", image: "big-shoe3.png" },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo et voluptas minima nisi autem labore mollitia laudantium. Temporibus, totam? Aperiam aut, dolor possimus labore ullam reprehenderit repudiandae explicabo ea ratione in delectus aspernatur.",
        },
      },
      {
        name: "Nike Airforce 1",
        image: "big-shoe3.png",
        price: 3599,
        sizes: [39, 40, 41, 42, 44],
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
// insertProducts();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// npm uninstall -g ngrok
// npx ngrok config add-authtoken 2w2efi3IFK7vscRQo9fOnG1pGae_3iu4oSGqNmFhCcohB3VFv

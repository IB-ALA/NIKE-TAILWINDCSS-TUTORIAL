import { NewsletterProduct, Product } from "../types/product";

export const products: Product[] = [
  {
    id: "54375",
    name: "Airforce 1",
    image:
      "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241555/big-shoe1_rqnhb4.png",
    price: 2050,
    sizes: [35, 37, 39, 40, 42, 44],
  },
  {
    id: "54376",
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
    id: "54377",
    name: "Nike Airforce 1",
    image: "big-shoe3.png",
    price: 3599,
    sizes: [39, 40, 41, 42, 44],
  },
];

// import newProducts from db: name, id, image,
export const newProducts: NewsletterProduct[] = [
  {
    id: "54375",
    name: "Airforce 1",
    image:
      "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241555/big-shoe1_rqnhb4.png",
  },
  {
    id: "54376",
    name: "Nike Air Jordan-01",
    image:
      "https://res.cloudinary.com/df2w3hfqp/image/upload/v1745241556/big-shoe2_ldjodi.png",
  },
];

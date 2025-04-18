type ColorType = {
  name: string;
  image: string;
};

type ProductDetailsType = {
  colors: ColorType[];
  description: string;
};

export type ProductType = {
  id: string;
  name: string;
  image: string;
  price: number;
  sizes: number[];
  productDetails?: ProductDetailsType;
};

export const products: ProductType[] = [
  {
    id: "54375",
    name: "Airforce 1",
    image: "big-shoe1.png",
    price: 2050,
    sizes: [35, 37, 39, 40, 42, 44],
  },
  {
    id: "54376",
    name: "Nike Air Jordan-01",
    image: "big-shoe2.png",
    price: 1550,
    sizes: [35, 37, 39, 40, 42, 44],
    productDetails: {
      colors: [
        { name: "red", image: "big-shoe1.png" },
        { name: "white", image: "big-shoe2.png" },
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

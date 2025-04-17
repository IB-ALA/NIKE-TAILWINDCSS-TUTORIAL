import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const products = [
  {
    id: "54375",
    name: "Airforce 1",
    image: bigShoe1,
    price: 2050,
    sizes: [35, 37, 39, 40, 42, 44],
  },
  {
    id: "54376",
    name: "Nike Air Jordan-01",
    image: bigShoe2,
    price: 1550,
    sizes: [35, 37, 39, 40, 42, 44],
    productDetails: {
      colors: [
        { name: "red", image: bigShoe1 },
        { name: "white", image: bigShoe2 },
        { name: "black", image: bigShoe3 },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo et voluptas minima nisi autem labore mollitia laudantium. Temporibus, totam? Aperiam aut, dolor possimus labore ullam reprehenderit repudiandae explicabo ea ratione in delectus aspernatur.",
    },
  },
  {
    id: "54377",
    name: "Nike Airforce 1",
    image: bigShoe3,
    price: 3599,
    sizes: [39, 40, 41, 42, 44],
  },
];

// export const productDetails = [
//   {
//     id: 54376,
//     colors: [
//       { name: "red", image: thumbnailShoe1 },
//       { name: "white", image: thumbnailShoe2 },
//       { name: "black", image: thumbnailShoe3 },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo et voluptas minima nisi autem labore mollitia laudantium. Temporibus, totam? Aperiam aut, dolor possimus labore ullam reprehenderit repudiandae explicabo ea ratione in delectus aspernatur.",
//   },
// ];

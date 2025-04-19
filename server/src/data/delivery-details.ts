export interface Detials {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

export interface DeliveryDetails {
  userId: string;
  details: Detials;
}

export const deliveryDetails: DeliveryDetails[] = [
  {
    userId: "User234",
    details: {
      name: "IB Ala",
      email: "ishaqibrahimyusif@gmail.com",
      phone: "0577100023",
      city: "accra",
      address: "lakeside room 5",
    },
  },
];

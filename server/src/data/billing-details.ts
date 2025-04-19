export interface Detail {
  momoProvider?: string;
  momoNumber?: string;
  cardNumber?: string;
  cardCvc?: string;
  cardExpiry?: string;
}

export interface BillingDetails {
  userId: string;
  details: Detail;
}

export const billingDetails: BillingDetails[] = [
  {
    userId: "User234",
    details: {
      momoProvider: "MTN",
      momoNumber: "0592302209",
      cardNumber: "6574 4657 7465 7467",
      cardCvc: "234",
      cardExpiry: "07/25",
    },
  },
];

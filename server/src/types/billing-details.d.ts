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

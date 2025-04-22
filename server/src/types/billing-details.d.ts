export interface BDetails {
  momoProvider?: string;
  momoNumber?: string;
  cardNumber?: string;
  cardCvc?: string;
  cardExpiry?: string;
}

export interface BillingDetails {
  userId?: string;
  orderId: string;
  details: BDetail;
}

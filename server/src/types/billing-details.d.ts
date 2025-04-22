export interface BDetail {
  momoProvider?: string;
  momoNumber?: string;
  cardNumber?: string;
  cardCvc?: string;
  cardExpiry?: string;
}

export interface BillingDetails {
  userId: string;
  details: BDetail;
}

export interface BDetails {
  momoProvider?: string;
  momoNumber?: string;
  cardNumber?: string;
  cardCvc?: string;
  cardExpiry?: string;
}

export interface BillingDetailsType {
  userId?: string;
  orderId?: string;
  details: BDetail;
}

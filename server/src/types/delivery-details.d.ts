export interface DDetails {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

export interface DeliveryDetailsType {
  userId?: string;
  orderId?: string;
  details: DDetails;
}

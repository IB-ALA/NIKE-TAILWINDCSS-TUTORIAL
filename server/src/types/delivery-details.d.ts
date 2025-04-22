export interface DDetails {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

export interface DeliveryDetails {
  userId: string;
  details: DDetails;
}

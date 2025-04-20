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

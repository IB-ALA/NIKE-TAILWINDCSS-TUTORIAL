import { DeliveryDetails } from "../types/delivery-details";

export let deliveryDetails: DeliveryDetails[] = [
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

export function updateDeliveryDetailsData(
  newDeliveryDetails: DeliveryDetails[]
) {
  deliveryDetails = newDeliveryDetails;
}

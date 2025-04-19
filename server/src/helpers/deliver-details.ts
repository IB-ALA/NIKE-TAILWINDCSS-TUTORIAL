import { DeliveryDetails, deliveryDetails } from "../data/delivery-details";

export function getDeliverDetails(userId: string): DeliveryDetails | undefined {
  return deliveryDetails.find(
    (deliveryDetail: DeliveryDetails) => deliveryDetail.userId === userId
  );
}
// will be getting from the db

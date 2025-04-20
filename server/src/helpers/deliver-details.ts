import { deliveryDetails } from "../data/delivery-details";
import { DeliveryDetails } from "../types/delivery-details";

export function getDeliverDetails(userId: string): DeliveryDetails | undefined {
  return deliveryDetails.find(
    (deliveryDetail: DeliveryDetails) => deliveryDetail.userId === userId
  );
}
// will be getting from the db

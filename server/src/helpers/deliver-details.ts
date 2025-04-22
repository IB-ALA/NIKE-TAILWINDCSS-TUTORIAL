import {
  deliveryDetails,
  updateDeliveryDetailsData,
} from "../data/delivery-details";
import { DeliveryDetails } from "../types/delivery-details";

export function getDeliverDetails(userId: string): DeliveryDetails | undefined {
  return deliveryDetails.find(
    (deliveryDetail: DeliveryDetails) => deliveryDetail.userId === userId
  );
}

export function updateDeliveryDetails(userNewDeliveryDetail: DeliveryDetails) {
  const newDeliveryDetails = deliveryDetails.filter(
    (oldDeliveryDetail: DeliveryDetails) =>
      oldDeliveryDetail.userId !== userNewDeliveryDetail.userId
  );

  newDeliveryDetails.push(userNewDeliveryDetail);

  updateDeliveryDetailsData(newDeliveryDetails);
}
// will be getting from the db

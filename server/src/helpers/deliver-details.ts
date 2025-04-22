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

export function replaceUserDeliverDetails(
  userNewDeliveryDetail: DeliveryDetails
) {
  let oldDeliveryDetails = deliveryDetails.find(
    (oldDeliveryDetail: DeliveryDetails) =>
      oldDeliveryDetail.userId === userNewDeliveryDetail.userId
  );

  const newBillingDetails = deliveryDetails.filter(
    (oldDeliveryDetail: DeliveryDetails) =>
      oldDeliveryDetail.userId !== userNewDeliveryDetail.userId
  );

  // edit the old one and remove the userId
  oldDeliveryDetails = {
    orderId: oldDeliveryDetails?.orderId!,
    details: oldDeliveryDetails?.details!,
  };

  newBillingDetails.push(oldDeliveryDetails);
  newBillingDetails.push(userNewDeliveryDetail);
  updateDeliveryDetailsData(newBillingDetails);
}

export function saveNewDeliveryDetails(userNewDeliveryDetail: DeliveryDetails) {
  const newDeliveryDetails = [...deliveryDetails];
  newDeliveryDetails.push(userNewDeliveryDetail);
  updateDeliveryDetailsData(newDeliveryDetails);
}

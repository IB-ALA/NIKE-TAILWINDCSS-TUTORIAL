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

export function updateDeliveryDetails(userNewDeliveryDetails: DeliveryDetails) {
  let oldDeliveryDetails = getDeliverDetails(userNewDeliveryDetails.userId!);

  const newDeliveryDetailsData = deliveryDetails.filter(
    (deliveryDetails: DeliveryDetails) =>
      deliveryDetails.userId !== userNewDeliveryDetails.userId
  );

  // edit the old one and remove the userId
  oldDeliveryDetails = {
    orderId: oldDeliveryDetails?.orderId!,
    details: oldDeliveryDetails?.details!,
  };
  newDeliveryDetailsData.push(oldDeliveryDetails);
  newDeliveryDetailsData.push(userNewDeliveryDetails);

  updateDeliveryDetailsData(newDeliveryDetailsData);
}
// will be getting from the db

export function replaceUserDeliverDetails(
  userNewDeliveryDetails: DeliveryDetails
) {
  let oldDeliveryDetails = deliveryDetails.find(
    (oldDeliveryDetail: DeliveryDetails) =>
      oldDeliveryDetail.userId === userNewDeliveryDetails.userId
  );

  const newBillingDetails = deliveryDetails.filter(
    (oldDeliveryDetail: DeliveryDetails) =>
      oldDeliveryDetail.userId !== userNewDeliveryDetails.userId
  );

  // edit the old one and remove the userId
  oldDeliveryDetails = {
    orderId: oldDeliveryDetails?.orderId!,
    details: oldDeliveryDetails?.details!,
  };

  newBillingDetails.push(oldDeliveryDetails);
  newBillingDetails.push(userNewDeliveryDetails);
  updateDeliveryDetailsData(newBillingDetails);
}

export function saveNewDeliveryDetails(userNewDeliveryDetail: DeliveryDetails) {
  const newDeliveryDetails = [...deliveryDetails];
  newDeliveryDetails.push(userNewDeliveryDetail);
  updateDeliveryDetailsData(newDeliveryDetails);
}

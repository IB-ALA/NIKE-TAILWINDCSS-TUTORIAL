import {
  billingDetails,
  updateBillingDetailsData,
} from "../data/billing-details";
import { BillingDetails } from "../types/billing-details";

export function getBillingDetails(userId: string): BillingDetails | undefined {
  return billingDetails.find(
    (billingDetail: BillingDetails) => billingDetail.userId === userId
  );
}
// will be getting from the db

export function updateBillingDetails(userNewBillingDetails: BillingDetails) {
  const newBillingDetails = billingDetails.filter(
    (oldDeliveryDetail: BillingDetails) =>
      oldDeliveryDetail.userId !== userNewBillingDetails.userId
  );

  newBillingDetails.push(userNewBillingDetails);

  updateBillingDetailsData(newBillingDetails);
}

export function replaceUserBillingDetails(
  userNewBillingDetails: BillingDetails
) {
  let oldBillingDetails = billingDetails.find(
    (oldDeliveryDetail: BillingDetails) =>
      oldDeliveryDetail.userId === userNewBillingDetails.userId
  );

  const newBillingDetails = billingDetails.filter(
    (oldDeliveryDetail: BillingDetails) =>
      oldDeliveryDetail.userId !== userNewBillingDetails.userId
  );

  // edit the old one and remove the userId
  oldBillingDetails = {
    orderId: oldBillingDetails?.orderId!,
    details: oldBillingDetails?.details,
  };

  newBillingDetails.push(oldBillingDetails);
  newBillingDetails.push(userNewBillingDetails);
  updateBillingDetailsData(newBillingDetails);
}

export function saveNewBillingDetails(userNewBillingDetails: BillingDetails) {
  const newBillingDetails = [...billingDetails];
  newBillingDetails.push(userNewBillingDetails);
  updateBillingDetailsData(newBillingDetails);
}

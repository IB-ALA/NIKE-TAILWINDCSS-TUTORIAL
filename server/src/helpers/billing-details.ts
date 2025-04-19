import { BillingDetails, billingDetails } from "../data/billing-details";

export function getBillingDetails(userId: string): BillingDetails | undefined {
  return billingDetails.find(
    (billingDetail: BillingDetails) => billingDetail.userId === userId
  );
}
// will be getting from the db

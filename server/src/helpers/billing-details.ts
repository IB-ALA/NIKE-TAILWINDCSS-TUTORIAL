import { billingDetails } from "../data/billing-details";
import { BillingDetails } from "../types/billing-details";

export function getBillingDetails(userId: string): BillingDetails | undefined {
  return billingDetails.find(
    (billingDetail: BillingDetails) => billingDetail.userId === userId
  );
}
// will be getting from the db

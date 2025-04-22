import { BillingDetails } from "../types/billing-details";

export let billingDetails: BillingDetails[] = [
  {
    userId: "User233",
    orderId: "74787",
    details: {
      momoProvider: "MTN",
      momoNumber: "0592302209",
      cardNumber: "6574 4657 7465 7467",
      cardCvc: "234",
      cardExpiry: "07/25",
    },
  },
];

export function updateBillingDetailsData(newBillingDetails: BillingDetails[]) {
  billingDetails = newBillingDetails;
}

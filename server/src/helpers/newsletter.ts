import { newsletterSubscribers } from "../data/newsletter";

export function isEmailSubbscribed(email: string): boolean {
  return newsletterSubscribers.includes(email);
}

export function addEmailToSubcribers(email: string): void {
  newsletterSubscribers.push(email);
}

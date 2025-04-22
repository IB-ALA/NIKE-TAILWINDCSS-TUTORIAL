import { newsletterSubscribers, updateSubscribers } from "../data/newsletter";

export function isEmailSubbscribed(email: string): boolean {
  return newsletterSubscribers.includes(email);
}

export function addEmailToSubcribers(email: string): void {
  newsletterSubscribers.push(email);
}

export function removeEmailFromSubcribers(email: string): void {
  const newSubscribers: string[] = newsletterSubscribers.filter(
    (subscriber) => subscriber !== email
  );
  updateSubscribers(newSubscribers);
}

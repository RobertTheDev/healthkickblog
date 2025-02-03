export default interface SubscriptionPlan {
  id: string;
  name: string;
  currency: string;
  price: number;
  description: string;
  benefits: string[];
}

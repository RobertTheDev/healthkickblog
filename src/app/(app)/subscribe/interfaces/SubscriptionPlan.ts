export default interface SubscriptionPlan {
  id: string;
  name: string;
  currency: string;
  price: number;
  priceId: string | null;
  description: string;
  benefits: string[];
}

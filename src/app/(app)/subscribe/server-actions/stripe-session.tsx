'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Stripe } from 'stripe';

const apiKey = process.env.NEXT_STRIPE_KEY as string;
const stripe = new Stripe(apiKey);

if (!apiKey) {
  throw new Error('Stripe API key is missing');
}

interface NewSessionOptions {
  priceId: string;
}

export const postStripeSession = async ({ priceId }: NewSessionOptions) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('User not authenticated');

  const userId = user.id;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  let stripeCustomerId = profile?.stripe_customer_id;

  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({ email: profile?.email });
    stripeCustomerId = customer.id;

    await supabase
      .from('profiles')
      .update({ stripe_customer_id: stripeCustomerId })
      .eq('id', userId);
  }

  const returnUrl =
    'http://localhost:3000/subscribe/checkout-return?session_id={CHECKOUT_SESSION_ID}';

  const planType = priceId.includes('monthly') ? 'monthly' : 'annual';

  const createdStripeSession = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    customer: stripeCustomerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    return_url: returnUrl,
    metadata: { planType },
  });

  if (!createdStripeSession.client_secret)
    throw new Error('Error initiating Stripe session');

  return {
    clientSecret: createdStripeSession.client_secret,
  };
};

import { createClient } from '@/app/utils/supabase/server';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import Stripe from 'stripe';

const apiKey = process.env.NEXT_STRIPE_KEY as string;
const stripe = new Stripe(apiKey);

if (!apiKey) {
  throw new Error('Stripe API key is missing');
}

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const stripeSessionId = searchParams.get('session_id');

  if (!stripeSessionId?.length) {
    console.error('Missing session_id in query parameters.');
    return redirect('/');
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(stripeSessionId);

    if (session.status === 'complete') {
      const supabase = await createClient();

      const subscriptionId = session.subscription as string;
      const customerId = session.customer as string;

      if (!subscriptionId || !customerId) {
        console.error(
          'Missing subscription or customer information from Stripe session.',
        );
        return redirect('/');
      }

      // Fetch subscription details
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const currentPeriodEnd = new Date(subscription.current_period_end * 1000);

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('stripe_customer_id', customerId)
        .single();

      if (profileError || !profile) {
        console.error(
          'Error fetching user profile or profile not found:',
          profileError?.message,
        );
        return redirect('/');
      }

      // Replace these with your actual price IDs
      const monthlyPriceId = 'price_1QouuDHHRcDCltxA2wV2ZtOB';
      const annualPriceId = 'price_1Qp7xYHHRcDCltxA6X6YgcRx';

      // Fetch the subscription plan type based on price ID
      const subscriptionItem = subscription.items.data[0];
      const planType =
        subscriptionItem?.price.id === monthlyPriceId
          ? 'monthly'
          : subscriptionItem?.price.id === annualPriceId
            ? 'annual'
            : 'unknown';

      // Upsert subscription entry for the user
      const { error: upsertError } = await supabase
        .from('subscriptions')
        .upsert(
          {
            user_id: profile.id,
            stripe_subscription_id: subscriptionId,
            subscription_plan: planType,
            subscription_status: subscription.status,
            current_period_end: currentPeriodEnd,
          },
          { onConflict: 'user_id' },
        ); // Ensure a single subscription per user

      if (upsertError) {
        console.error('Error upserting subscription:', upsertError.message);
      }

      return redirect(`/subscribe/success`);
    }

    if (session.status === 'open') {
      return redirect(`/subscribe`);
    }

    return redirect('/');
  } catch (error) {
    console.error('Error handling Stripe session:', error);
    return redirect('/');
  }
};

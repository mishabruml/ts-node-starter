import Stripe from 'stripe';

const stripe = new Stripe('sk_test_...', {
	apiVersion: '2020-08-27',
});

export const createPaymentIntent = async (parameters: Stripe.PaymentIntentCreateParams) => stripe.paymentIntents.create(parameters);


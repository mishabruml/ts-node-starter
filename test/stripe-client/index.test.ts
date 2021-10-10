import { createPaymentIntent } from '../../src/stripe-client';

const mockPaymentsIntentsCreate = jest.fn();

jest.mock('stripe', () => jest.fn(() => ({
	paymentIntents: {
		create: (...args: any) => mockPaymentsIntentsCreate(...args) as unknown,
	},
})));

describe('stripe-client', () => {
	test('create payment intent happy path', async () => {
		const paymentIntentsCreateResponse = { id: '123' };
		mockPaymentsIntentsCreate.mockResolvedValueOnce(paymentIntentsCreateResponse);

		const result = await createPaymentIntent({
			amount: 100,
			currency: 'gbp',
		});

		expect(result).toBe(paymentIntentsCreateResponse);
	});

	test('create payment intent unhappy path', async () => {
		const paymentIntentsCreateResponse = 'oops';
		mockPaymentsIntentsCreate.mockRejectedValueOnce(paymentIntentsCreateResponse);

		await expect(createPaymentIntent({
			amount: 100,
			currency: 'gbp',
		})).rejects.toBe(paymentIntentsCreateResponse);
	});
});

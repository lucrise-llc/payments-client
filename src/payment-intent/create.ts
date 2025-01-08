export type CreatePaymentIntent = {
  amount: number;
  reference: string;
  email: string;
  successURL: string;
  failureURL: string;
  webhookURL: string;
};

type CreatePaymentIntentResponse = {
  paymentIntentId: string;
};

export async function createPaymentIntent({
  data,
  url,
}: {
  data: CreatePaymentIntent;
  url: string;
}): Promise<CreatePaymentIntentResponse> {
  const response = await fetch(`${url}/payments/intents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create payment intent");
  }

  return response.json();
}

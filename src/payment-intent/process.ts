export type ProcessPayment = {
  paymentIntentId: string;
  details:
    | {
        type: "creditCard";
        cardNumber: string;
        expiration: string;
        CVC: string;
      }
    | {
        type: "token";
        dataVaultToken: string;
      };
};

type ProcessPaymentResponse =
  | {
      html: string;
      url: undefined;
    }
  | {
      html: undefined;
      url: string;
    };

export async function processPayment({
  data,
  url,
}: {
  data: ProcessPayment;
  url: string;
}): Promise<ProcessPaymentResponse> {
  const response = await fetch(`${url}/payments/process`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to process payment");
  }

  return response.json();
}

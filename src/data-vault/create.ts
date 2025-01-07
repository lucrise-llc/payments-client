export type CreateDataVault = {
  groupId: string;
  name: string;
  brand: string;
  cardNumber: string;
  expiration: string;
  cvc: string;
};

type CreateDataVaultResponse = {
  token: string;
};

export async function createDataVault({
  data,
  url,
}: {
  data: CreateDataVault;
  url: string;
}): Promise<CreateDataVaultResponse> {
  const response = await fetch(`${url}/data_vault`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create data vault");
  }

  return response.json();
}

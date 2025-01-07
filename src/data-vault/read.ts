export type ReadDataVault = {
  groupId: string;
};

type ReadDataVaultResponse = {
  dataVaults: {
    id: string;
    token: string;
    name: string;
    brand: string;
    cardNumber: string;
    expiration: string;
  }[];
};

export async function readDataVault({
  data,
  url,
}: {
  data: ReadDataVault;
  url: string;
}): Promise<ReadDataVaultResponse> {
  const response = await fetch(`${url}/data_vault/${data.groupId}`);

  if (!response.ok) {
    throw new Error("Failed to read data vault");
  }

  return response.json();
}

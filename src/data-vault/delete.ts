export type DeleteDataVault = {
  dataVaultToken: string;
};

type DeleteDataVaultResponse = {
  success: boolean;
};

export async function deleteDataVault({
  data,
  url,
}: {
  data: DeleteDataVault;
  url: string;
}): Promise<DeleteDataVaultResponse> {
  const response = await fetch(`${url}/data-vaults/${data.dataVaultToken}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to create data vault");
  }

  return response.json();
}

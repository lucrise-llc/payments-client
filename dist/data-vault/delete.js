export async function deleteDataVault({ data, url, }) {
    const response = await fetch(`${url}/data-vaults/${data.token}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to create data vault");
    }
    return response.json();
}
//# sourceMappingURL=delete.js.map
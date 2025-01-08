export async function createDataVault({ data, url, }) {
    const response = await fetch(`${url}/data-vaults`, {
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
//# sourceMappingURL=create.js.map
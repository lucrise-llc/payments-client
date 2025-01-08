export async function readDataVault({ data, url, }) {
    const response = await fetch(`${url}/data-vaults/${data.groupId}`);
    if (!response.ok) {
        throw new Error("Failed to read data vault");
    }
    return response.json();
}
//# sourceMappingURL=read.js.map
export async function processPayment({ data, url, }) {
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
//# sourceMappingURL=process.js.map
export async function createPaymentIntent({ data, url, }) {
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
//# sourceMappingURL=create.js.map
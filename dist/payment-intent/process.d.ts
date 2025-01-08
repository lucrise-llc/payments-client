export type ProcessPayment = {
    paymentIntentId: string;
    details: {
        type: "creditCard";
        cardNumber: string;
        expiration: string;
        CVC: string;
    } | {
        type: "token";
        dataVaultToken: string;
    };
};
type ProcessPaymentResponse = {
    html: string;
    url: undefined;
} | {
    html: undefined;
    url: string;
};
export declare function processPayment({ data, url, }: {
    data: ProcessPayment;
    url: string;
}): Promise<ProcessPaymentResponse>;
export {};
//# sourceMappingURL=process.d.ts.map
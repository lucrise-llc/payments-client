export type CreatePaymentIntent = {
    amount: number;
    successURL: string;
    failureURL: string;
    webhookURL: string;
    metadata: string | null;
};
type CreatePaymentIntentResponse = {
    paymentIntentId: string;
};
export declare function createPaymentIntent({ data, url, }: {
    data: CreatePaymentIntent;
    url: string;
}): Promise<CreatePaymentIntentResponse>;
export {};
//# sourceMappingURL=create.d.ts.map
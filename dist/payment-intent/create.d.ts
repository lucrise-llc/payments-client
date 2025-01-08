export type CreatePaymentIntent = {
    amount: number;
    reference: string;
    email: string;
    successURL: string;
    failureURL: string;
    webhookURL: string;
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
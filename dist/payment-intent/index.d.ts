import { ProcessPayment } from "./process";
import { CreatePaymentIntent } from "./create";
export declare class PaymentIntent {
    readonly url: string;
    constructor(url: string);
    process(data: ProcessPayment): Promise<{
        html: string;
        url: undefined;
    } | {
        html: undefined;
        url: string;
    }>;
    create(data: CreatePaymentIntent): Promise<{
        paymentIntentId: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map
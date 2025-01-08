import { processPayment } from "./process";
import { createPaymentIntent } from "./create";
export class PaymentIntent {
    constructor(url) {
        this.url = url;
    }
    async process(data) {
        return processPayment({ data, url: this.url });
    }
    async create(data) {
        return createPaymentIntent({ data, url: this.url });
    }
}
//# sourceMappingURL=index.js.map
import { DataVault } from "./data-vault";
import { PaymentIntent } from "./payment-intent";
export class Payments {
    constructor(url) {
        this.url = url;
        this.dataVault = new DataVault(url);
        this.paymentIntent = new PaymentIntent(url);
    }
}
//# sourceMappingURL=index.js.map
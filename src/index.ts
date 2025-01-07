import { DataVault } from "./data-vault";
import { PaymentIntent } from "./payment-intent";

export class Payments {
  public readonly url: string;
  public readonly dataVault: DataVault;
  public readonly paymentIntent: PaymentIntent;

  constructor(url: string) {
    this.url = url;
    this.dataVault = new DataVault(url);
    this.paymentIntent = new PaymentIntent(url);
  }
}

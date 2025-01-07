import { processPayment, ProcessPayment } from "./process";
import { createPaymentIntent, CreatePaymentIntent } from "./create";

export class PaymentIntent {
  public readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  async process(data: ProcessPayment) {
    return processPayment({ data, url: this.url });
  }

  async create(data: CreatePaymentIntent) {
    return createPaymentIntent({ data, url: this.url });
  }
}

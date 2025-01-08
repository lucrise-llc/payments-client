import assert from "node:assert";
import { describe, it } from "node:test";
import { Payments } from ".";
import { randomUUID } from "node:crypto";

describe("Payments", () => {
  const payments = new Payments("http://localhost:3002");

  it("Should create a payment intent", async () => {
    const paymentIntent = await payments.paymentIntent.create({
      amount: 1000,
      reference: randomUUID(),
      email: "test@test.com",
      successURL: "http://localhost:3000/success",
      failureURL: "http://localhost:3000/failure",
      webhookURL: "http://localhost:3000/webhook",
    });

    assert.strictEqual(typeof paymentIntent.paymentIntentId, "string");
  });
});

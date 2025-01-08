// src/data-vault/read.ts
async function readDataVault({
  data,
  url
}) {
  const response = await fetch(`${url}/data-vaults/${data.groupId}`);
  if (!response.ok) {
    throw new Error("Failed to read data vault");
  }
  return response.json();
}

// src/data-vault/delete.ts
async function deleteDataVault({
  data,
  url
}) {
  const response = await fetch(`${url}/data-vaults/${data.token}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("Failed to create data vault");
  }
  return response.json();
}

// src/data-vault/create.ts
async function createDataVault({
  data,
  url
}) {
  const response = await fetch(`${url}/data-vaults`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error("Failed to create data vault");
  }
  return response.json();
}

// src/data-vault/index.ts
var DataVault = class {
  constructor(url) {
    this.url = url;
  }
  async create(data) {
    return createDataVault({ data, url: this.url });
  }
  async delete(data) {
    return deleteDataVault({ data, url: this.url });
  }
  async read(data) {
    return readDataVault({ data, url: this.url });
  }
};

// src/payment-intent/process.ts
async function processPayment({
  data,
  url
}) {
  const response = await fetch(
    `${url}/payment_intents/${data.paymentIntentId}/process`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data.details)
    }
  );
  if (!response.ok) {
    throw new Error("Failed to process payment");
  }
  return response.json();
}

// src/payment-intent/create.ts
async function createPaymentIntent({
  data,
  url
}) {
  const response = await fetch(`${url}/payments/intents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error("Failed to create payment intent");
  }
  return response.json();
}

// src/payment-intent/index.ts
var PaymentIntent = class {
  constructor(url) {
    this.url = url;
  }
  async process(data) {
    return processPayment({ data, url: this.url });
  }
  async create(data) {
    return createPaymentIntent({ data, url: this.url });
  }
};

// src/index.ts
var Payments = class {
  constructor(url) {
    this.url = url;
    this.dataVault = new DataVault(url);
    this.paymentIntent = new PaymentIntent(url);
  }
};
export {
  Payments
};
//# sourceMappingURL=index.js.map

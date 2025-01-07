import { readDataVault, ReadDataVault } from "./read";
import { deleteDataVault, DeleteDataVault } from "./delete";
import { createDataVault, CreateDataVault } from "./create";

export class DataVault {
  public readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  async create(data: CreateDataVault) {
    return createDataVault({ data, url: this.url });
  }

  async delete(data: DeleteDataVault) {
    return deleteDataVault({ data, url: this.url });
  }

  async read(data: ReadDataVault) {
    return readDataVault({ data, url: this.url });
  }
}

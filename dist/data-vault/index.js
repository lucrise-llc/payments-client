import { readDataVault } from "./read";
import { deleteDataVault } from "./delete";
import { createDataVault } from "./create";
export class DataVault {
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
}
//# sourceMappingURL=index.js.map
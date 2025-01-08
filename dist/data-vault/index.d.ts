import { ReadDataVault } from "./read";
import { DeleteDataVault } from "./delete";
import { CreateDataVault } from "./create";
export declare class DataVault {
    readonly url: string;
    constructor(url: string);
    create(data: CreateDataVault): Promise<{
        token: string;
    }>;
    delete(data: DeleteDataVault): Promise<{
        success: boolean;
    }>;
    read(data: ReadDataVault): Promise<{
        dataVaults: {
            id: string;
            token: string;
            name: string | null;
            groupId: string;
            brand: string;
            cardNumber: string;
            expiration: string;
            cvc: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
}
//# sourceMappingURL=index.d.ts.map
export type ReadDataVault = {
    groupId: string;
};
type ReadDataVaultResponse = {
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
};
export declare function readDataVault({ data, url, }: {
    data: ReadDataVault;
    url: string;
}): Promise<ReadDataVaultResponse>;
export {};
//# sourceMappingURL=read.d.ts.map
export type CreateDataVault = {
    groupId: string;
    name: string;
    cardNumber: string;
    expiration: string;
    cvc: string;
};
type CreateDataVaultResponse = {
    token: string;
};
export declare function createDataVault({ data, url, }: {
    data: CreateDataVault;
    url: string;
}): Promise<CreateDataVaultResponse>;
export {};
//# sourceMappingURL=create.d.ts.map
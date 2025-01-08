export type DeleteDataVault = {
    token: string;
};
type DeleteDataVaultResponse = {
    success: boolean;
};
export declare function deleteDataVault({ data, url, }: {
    data: DeleteDataVault;
    url: string;
}): Promise<DeleteDataVaultResponse>;
export {};
//# sourceMappingURL=delete.d.ts.map
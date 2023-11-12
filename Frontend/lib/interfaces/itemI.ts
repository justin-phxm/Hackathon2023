import transactionInterface from './transactionI';
export default interface itemInterface {
    itemName: string;
    useruid: string;
    tags?: string[];
    condition: string;
    description?: string;
    imageIDs?: string[];
    rentalState: string;
    transactionHistory?: transactionInterface[];
    rentalPeriod: number;
    itemID: string;
    ownerFirstName: string;
    ownerLastName: string;
    borrowerFirstName?: string;
    borrowerLastName?: string
}
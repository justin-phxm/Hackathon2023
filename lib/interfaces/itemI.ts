import transactionInterface from './transactionI';
export default interface itemInterface {
    name: string;
    useruid: string;
    tags: string[];
    condition: string;
    description: string;
    imageIDs: string[];
    rentalState: string;
    transactionHistory: transactionInterface[];
    rentalPeriod: number;
    itemID: string;
}
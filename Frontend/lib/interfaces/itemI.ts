export default interface itemInterface {
    itemName: string;
    owneruid: string;
    tags?: string[];
    condition: string;
    description?: string;
    imageIDs?: string[];
    rentalState: string;
    itemID: string;
    returnDate?: Date;
    uidBorrower?: string;
    lenderConfirm: boolean;
    borrowerConfirm: boolean;   
}
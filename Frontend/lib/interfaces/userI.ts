import itemInterface from './itemI';
export default interface userInterface{
    firstName: string;
    lastName: string;
    useruid: string;
    location: string;
    phoneNumber: string;
    creditCard: string;
    lentItems: string[];
    borrowedItems: string[];
    requestedItems: string[];
}
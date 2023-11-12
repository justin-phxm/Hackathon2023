import itemInterface from '../interfaces/itemI';
import fakeTransactions from './fakeTransactions';
const fakeItems: itemInterface[] = [
    {
        itemName: "Lawnmower",
        owneruid: "123456abcdef",
        tags: ["lawnmower", "lawn", "mower", "lawn mower"],
        condition: "good",
        description: "This is a lawnmower",
        imageIDs: ["cloudinary.123456abcdef", "cloudinary.abcdef123456"],
        rentalState: "available",
        itemID: "123456abcdef",
        returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        uidBorrower: "123abc",
        lenderConfirm: true,
        borrowerConfirm: false,
    },
    {
        itemName: "Hammer",
        owneruid: "fedcba654321",
        tags: ["hammer", "bludgeon", "nail"],
        condition: "average",
        description: "Cave in skull",
        imageIDs: ["cloudinary.fedcba654321", "cloudinary.fedcba654321"],
        rentalState: "available",
        itemID: "123456abcdef",
        returnDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        uidBorrower: "abc123",
        lenderConfirm: false,
        borrowerConfirm: false,
    },
    {
        itemName: "Lawnmower",
        owneruid: "123456abcdef",
        tags: ["lawnmower", "lawn", "mower", "lawn mower"],
        condition: "good",
        description: "This is a lawnmower",
        imageIDs: ["cloudinary.123456abcdef", "cloudinary.abcdef123456"],
        rentalState: "available",
        itemID: "123456abcdef",
        returnDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        
        lenderConfirm: true,
        borrowerConfirm: true,
    },
]

export default fakeItems;
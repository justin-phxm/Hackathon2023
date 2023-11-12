import itemInterface from '../interfaces/itemI';
import fakeTransactions from './fakeTransactions';
const fakeItems: itemInterface[] = [
    {
        name: "Lawnmower",
        useruid: "123456abcdef",
        tags: ["lawnmower", "lawn", "mower", "lawn mower"],
        condition: "good",
        description: "This is a lawnmower",
        imageIDs: ["cloudinary.123456abcdef", "cloudinary.abcdef123456"],
        rentalState: "available",
        transactionHistory: fakeTransactions,
        rentalPeriod: 7,
        itemID: "123456abcdef",
    },
    {
        name: "Hammer",
        useruid: "fedcba654321",
        tags: ["hammer", "bludgeon", "nail"],
        condition: "average",
        description: "Cave in skull",
        imageIDs: ["cloudinary.fedcba654321", "cloudinary.fedcba654321"],
        rentalState: "available",
        transactionHistory: fakeTransactions,
        rentalPeriod: 7,
        itemID: "123456abcdef",
    },
    {
        name: "Lawnmower",
        useruid: "123456abcdef",
        tags: ["lawnmower", "lawn", "mower", "lawn mower"],
        condition: "good",
        description: "This is a lawnmower",
        imageIDs: ["cloudinary.123456abcdef", "cloudinary.abcdef123456"],
        rentalState: "available",
        transactionHistory: fakeTransactions,
        rentalPeriod: 7,
        itemID: "123456abcdef",
    },
]

export default fakeItems;
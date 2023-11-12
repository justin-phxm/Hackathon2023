import userI from '../interfaces/userI';
import fakeItems from './fakeItems';
const fakeUsers: userI[] = [
    {
        firstName: "John",
        lastName: "Smith",
        useruid: "123456abcdef",
        location: "Calgary",
        phoneNumber: "1234567890",
        creditCard: "1234567890123456",
        lentItems: [fakeItems[0].itemID, fakeItems[1].itemID, fakeItems[2].itemID],
        borrowedItems: [fakeItems[2].itemID],
        requestedItems: [fakeItems[0].itemID],
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        useruid: "abcdef123456",
        location: "Edmonton",
        phoneNumber: "0987654321",
        creditCard: "6543210987654321",
        lentItems: [fakeItems[0].itemID, fakeItems[2].itemID],
        borrowedItems: [fakeItems[1].itemID],
        requestedItems: [fakeItems[2].itemID],
    },
    {
        firstName: "Joe",
        lastName: "Shmoe",
        useruid: "abcdef123456",
        location: "Edmonton",
        phoneNumber: "0987654321",
        creditCard: "6543210987654321",
        lentItems: [fakeItems[2].itemID],
        borrowedItems: [fakeItems[0].itemID],
        requestedItems: [fakeItems[1].itemID],
    }
];

export default fakeUsers;
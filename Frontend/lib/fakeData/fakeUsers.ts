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
        lentItems: [fakeItems[0], fakeItems[1], fakeItems[2]],
        borrowedItems: [fakeItems[2], fakeItems[0], fakeItems[1]],
        requestedItems: [fakeItems[0], fakeItems[1]],
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        useruid: "abcdef123456",
        location: "Edmonton",
        phoneNumber: "0987654321",
        creditCard: "6543210987654321",
        lentItems: [fakeItems[0], fakeItems[2]],
        borrowedItems: [fakeItems[1]],
        requestedItems: [fakeItems[2]],
    },
    {
        firstName: "Joe",
        lastName: "Shmoe",
        useruid: "abcdef123456",
        location: "Edmonton",
        phoneNumber: "0987654321",
        creditCard: "6543210987654321",
        lentItems: [fakeItems[2]],
        borrowedItems: [fakeItems[0]],
        requestedItems: [fakeItems[1]],
    }
];

export default fakeUsers;
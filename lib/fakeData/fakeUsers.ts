import userI from '../interfaces/userI';
import fakeItems from './fakeItems';
const fakeUsers: userI[] = [
    {
        firstName: "john",
        lastName: "smith",
        useruid: "123456abcdef",
        location: "Calgary",
        phoneNumber: "1234567890",
        creditCard: "1234567890123456",
        lentItems: fakeItems,
        borrowedItems: [fakeItems[2]]
    },
    {
        firstName: "jane",
        lastName: "doe",
        useruid: "abcdef123456",
        location: "Edmonton",
        phoneNumber: "0987654321",
        creditCard: "6543210987654321",
        lentItems: fakeItems,
        borrowedItems: [fakeItems[1]]
    },
    {
        firstName: "joe",
        lastName: "shmoe",
        useruid: "abcdef123456",
        location: "Edmonton",
        phoneNumber: "0987654321",
        creditCard: "6543210987654321",
        lentItems: fakeItems,
        borrowedItems: [fakeItems[0]]
    }
];

export default fakeUsers;
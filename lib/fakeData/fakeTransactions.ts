import transactionI from '../interfaces/transactionI';

const fakeTransactions: transactionI[] = [
{    uidBorrower: "123456abcdef",
    borrowDate: new Date("2020-11-01"),
    returnDate: new Date("2020-11-08"),
    transactionID: "123456abcdef",
    lenderConfirm: false,
    borrowerConfirm: false,   },

{    uidBorrower: "abcdef123456",
    borrowDate: new Date("2020-11-01"),
    returnDate: new Date("2020-11-08"),
    transactionID: "123456abcdef",
    lenderConfirm: false,
    borrowerConfirm: false,   },

{    uidBorrower: "fedcba654321",
    borrowDate: new Date("2021-11-01"),
    returnDate: new Date("2021-11-08"),
    transactionID: "fedcba654321",
    lenderConfirm: false,
    borrowerConfirm: false,   },
];

export default fakeTransactions;
import contactReducers from '.';

const contacts = [
    {
        NAME: "John Doe",
        GENDER: "Male",
        LOCATION: "New York",
        DOB: "12th Jan 1980",
        PHOTO: "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
        DESCRIPTION: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        PHONE: "(212) 678-213",
        EMAIL: "jdoe@crr.org"
    }
];

describe('Contact Page Reducer', () => {
    it('Should return default state if action type is not defined', () => {
        const testState = contactReducers(undefined, {});
        expect(testState.contacts).toEqual([]);
    });

    it('Should return updated state if action type is SET_CONTACTS', () => {
        const testState = contactReducers(undefined, {
            type: "SET_CONTACTS",
            payload: contacts
        });

        expect(testState.contacts).toEqual(contacts);
    });

    it('Should return updated state if action type is SEARCH_FOR_CONTACT', () => {
        const testState = contactReducers(undefined, {
            type: "SEARCH_FOR_CONTACT",
            payload: contacts
        });

        expect(testState.contacts).toEqual(contacts);
    });
});
import axios from 'axios';

/* API call to retrieve all the contacts */
export const fetchContactsAPI = async () => {
    const response = await axios.get('http://localhost:3100/contacts/getAllContacts').catch(error => {
        console.log("Error when fetching all contacts: ", error);
        return { data: [] };
    });

    return response;
}

/* API call to retrieve contact by name */
export const searchForContactAPI = async (query, type) => {
    const payload = { query: query, type: type };

    const response = await axios.post('http://localhost:3100/contacts/searchByName', payload).catch(error => {
        console.log("Error when fetching searched contacts: ", error);
        return { data: [] };
    });

    return response;
}

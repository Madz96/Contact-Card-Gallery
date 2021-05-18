import axios from 'axios';

/* API call to retrieve all the contacts & save contact data to state */
export const fetchContactsAPI = async () => {
    const response = await axios.get('http://localhost:3100/contacts/getAllContacts').catch(error => {
        console.log("Error when fetching all contacts: ", error);
    });

    return response;
}

/* API call to retrieve contact by name & save contact data to state */
export const searchForContactAPI = async (query, type) => {
    const payload = { query: query, type: type };
    
    const response = await axios.post('http://localhost:3100/contacts/searchByName', payload).catch(error => {
        console.log("Error when fetching searched contacts: ", error);
    });

    return response;
}

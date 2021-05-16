import axios from 'axios';

/* API call to retrieve all the contacts & save contact data to state */
export const fetchContacts = async () => {
    const response = await axios.get('http://localhost:3100/contacts/getAllContacts').catch(error => {
        console.log("Error when fetching all contacts: ", error);
    });

    return response;
}

/* API call to retrieve contact by name & save contact data to state*/
export const fetchByName = async (name) => {
    const response = await axios.post('http://localhost:3100/contacts/searchByName', {name: name}).catch(error => {
        console.log("Error when fetching all contacts: ", error);
    });

    return response;
}

/* API call to retrieve contact by country & save contact data to state*/
export const fetchByCountry = async () => {
    const response = await axios.get('https://run.mocky.io/v3/f40b22ce-145d-480a-9bc4-a29b2449761c').catch(error => {
        console.log("Error when fetching all contacts: ", error);
    });

    return response;
}
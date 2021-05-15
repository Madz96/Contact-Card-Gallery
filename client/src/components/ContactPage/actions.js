export const setContacts = (contacts) => {
    return {
        type: "SET_CONTACTS",
        payload: contacts
    }
}

export const searchByName = (contact) => {
    return {
        type:"SEARCH_BY_NAME",
        payload: contact
    }
}

export const searchByCountry = (contact) => {
    return {
        type:"SEARCH_BY_NAME",
        payload: contact
    }
}
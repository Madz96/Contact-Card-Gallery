export const actionSetContacts = (contacts) => {
    return {
        type: "SET_CONTACTS",
        payload: contacts
    }
}

export const actionSearchForContact = (contacts) => {
    return {
        type:"SEARCH_FOR_CONTACT",
        payload: contacts
    }
}
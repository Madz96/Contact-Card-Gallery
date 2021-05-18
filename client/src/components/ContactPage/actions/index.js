/* Redux action to set all the retrieved contacts */
export const actionSetContacts = (contacts) => {
    return {
        type: "SET_CONTACTS",
        payload: contacts
    }
}

/* Redux action to set contacts after performing search query */ 
export const actionSearchForContact = (contacts) => {
    return {
        type: "SEARCH_FOR_CONTACT",
        payload: contacts
    }
}
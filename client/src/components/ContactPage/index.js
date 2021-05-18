import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { actionSetContacts } from './actions';
import { fetchContactsAPI } from './api';

import { Contacts } from './contacts';
import { Search } from './search';

export function ContactPage(props) {
    const dispatcher = useDispatch();

    /* Function which makes the api call and update the state */
    const setAllContacts = () => {
        fetchContactsAPI().then(response => {
            dispatcher(actionSetContacts(response.data));
        });
    }

    useEffect(() => {
        setAllContacts();
    }, []);

    return (
        <div test-attr="contact-page-component">
            <Search />
            <Contacts />
        </div>
    )
}
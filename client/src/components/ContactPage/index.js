import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { actionSetContacts, actionSetContactCount } from './actions';
import { fetchContactsAPI } from './api';

import { Contacts } from './contacts';
import { Search } from './search';
import { ResultCount } from './result-count';
import { Loader } from '../Loader';

export function ContactPage(props) {
    const dispatcher = useDispatch();

    /* Function which makes the api call and update the state */
    const setAllContacts = () => {
        fetchContactsAPI().then(response => {
            dispatcher(actionSetContacts(response.data));
            dispatcher(actionSetContactCount(response.data.length));
        });
    }

    useEffect(() => {
        setAllContacts();
    }, []);

    return (
        <div test-attr="contact-page-component">
            <Search />
            <ResultCount />
            <Contacts />
        </div>
    )
}
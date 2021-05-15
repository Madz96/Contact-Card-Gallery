import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { setContacts } from './actions';
import { fetchContacts } from './api';

import { Contacts } from './contacts/contacts';
import { Search } from './search/search';

export function ContactPage(props) {
    const dispatcher = useDispatch();

    const setAllContacts = () => {
        fetchContacts().then(response => {
            dispatcher(setContacts(response.data.data));
        })
    }

    useEffect(() => {
        setAllContacts();
    }, []);

    return (
        <div>
            <Contacts />
            <Search />
        </div>
    )
}
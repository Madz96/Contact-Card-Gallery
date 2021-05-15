import React from 'react';
import { useDispatch } from 'react-redux';

import { setContacts, searchByName, searchByCountry } from '../actions';
import { fetchContacts, fetchByName, fetchByCountry } from '../api';

export function Search(props) {
    const dispatcher = useDispatch();

    const setAllContacts = () => {
        fetchContacts().then(response => {
            dispatcher(setContacts(response.data.data));
        })
    }

    const setContactByName = () => {
        fetchByName().then(response => {
            dispatcher(searchByName(response.data.data));
        })
    }

    const setContactByCountry = () => {
        fetchByCountry().then(response => {
            dispatcher(searchByCountry(response.data.data));
        })
    }

    return (
        <div>
            <button onClick={() => setContactByName()}>Search By Name</button>
            <button onClick={() => setContactByCountry()}>Search By Country</button>
            <button onClick={() => setAllContacts()}>Reset</button>
        </div>
    )
}
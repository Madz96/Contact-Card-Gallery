import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setContacts, searchByName, searchByCountry } from '../actions';
import { fetchContacts, fetchByName, fetchByCountry } from '../api';

export function Search(props) {
    const [nameQuery, setNameQuery] = useState("");
    const [countryQuery, setCountryQuery] = useState("");

    const dispatcher = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const setAllContacts = () => {
        fetchContacts().then(response => {
            dispatcher(setContacts(response.data.data));
        });
    }

    const setContactByName = () => {
        fetchByName().then(response => {
            dispatcher(searchByName(response.data.data));
        });
    }

    const setContactByCountry = () => {
        fetchByCountry().then(response => {
            dispatcher(searchByCountry(response.data.data));
        });
    }


    return (
        <div>
            <div>
                <input placeholder="Search Country" />
                <button onClick={() => setContactByCountry()}>Search By Country</button>
            </div>
            <button onClick={() => setAllContacts()}>Reset</button>
        </div>
    );
}
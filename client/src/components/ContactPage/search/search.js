import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setContacts, searchByName, searchByCountry } from '../actions';
import { fetchContacts, fetchByName, fetchByCountry } from '../api';

export function Search(props) {
    const [nameQuery, setNameQuery] = useState("");
    const [queryType, setQueryType] = useState("name");
    const [countryQuery, setCountryQuery] = useState("");

    const dispatcher = useDispatch();

    const setContactByName = (query) => {
        fetchByName(query).then(response => {
            dispatcher(searchByName(response.data));
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
                <input
                    placeholder="Search By Name"
                    value={nameQuery}
                    onChange={event => {
                        setNameQuery(event.target.value);
                        setContactByName(event.target.value);
                    }} />
            </div>

            <div onChange={event => console.log(event.target.value)}>
                <input
                    type="radio"
                    value="name"
                    name="queryType"
                    checked={queryType === "name"}
                /> Name
                <input
                    type="radio"
                    value="country"
                    name="queryType"
                    checked={queryType === "country"}
                /> Country
            </div>
        </div>
    );
}
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { actionSearchForContact } from '../actions';
import { searchForContactAPI } from '../api';

import './index.css';

export function Search(props) {
    const [queryString, setQueryString] = useState("");
    const [queryType, setQueryType] = useState("name");

    const dispatcher = useDispatch();

    /* Makes the api call and update the state each time queryString & queryType updates*/
    useEffect(() => {
        setTimeout(() => {
            searchForContactAPI(queryString, queryType).then(response => {
                dispatcher(actionSearchForContact(response.data));
            });
        }, 3000);
    }, [queryString, queryType]);

    const changeQueryType = (event) => {
        if (queryType !== event.target.value) {
            setQueryType(event.target.value);
        }
    }

    return (
        <div className="search-container">
            {/* Input section for search query  */}
            <div className="query-section">
                <input
                    placeholder="Search for Contact"
                    value={queryString}
                    onChange={event => {
                        setQueryString(event.target.value);
                    }} />
            </div>

            {/* Section to select the type of search query */}
            <div className="type-section">
                <span>Search By :</span>
                <div className="queryType">
                    <input
                        type="radio"
                        value="name"
                        name="queryType"
                        checked={queryType === "name"}
                        onChange={event => changeQueryType(event)}
                    />
                    <label>Name</label>
                </div>
                <div className="queryType">
                    <input
                        type="radio"
                        value="country"
                        name="queryType"
                        checked={queryType === "country"}
                        onChange={event => changeQueryType(event)}
                    />
                    <label>Country</label>
                </div>
            </div>
        </div>
    );
}
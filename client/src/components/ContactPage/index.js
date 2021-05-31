import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { actionSetContacts, actionSetContactCount } from './actions';
import { actionSetLoaderStatus } from '../Loader/actions';
import { fetchContactsAPI } from './api';

import { Contacts } from './contacts';
import { Search } from './search';
import { ResultCount } from './result-count';
import { Loader } from '../Loader';

export function ContactPage(props) {
    const dispatcher = useDispatch();
    const showLoader = useSelector(state => state.loader.status);


    /* Function which makes the api call and update the state */
    const setAllContacts = () => {
        fetchContactsAPI().then(response => {
            dispatcher(actionSetContacts(response.data));
            dispatcher(actionSetContactCount(response.data.length));
            dispatcher(actionSetLoaderStatus(false));
        });
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setAllContacts();
        }, 3000);
        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div test-attr="contact-page-component">
            <Search />
            {showLoader && <Loader />}
            
            {!showLoader &&
                <div>
                    <ResultCount />
                    <Contacts />
                </div>
            }
        </div>
    )
}
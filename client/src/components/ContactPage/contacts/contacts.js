import React from 'react';
import { useSelector } from 'react-redux';

export function Contacts(props) {
    const contacts = useSelector(state => state.contacts);
    console.log(contacts);

    return (
        <div>
            {contacts.map((contact, idx) => (
                <div key={idx}>
                    <p>{contact.NAME}</p>
                    <p>{contact.LOCATION}</p>
                    <p>{contact.DOB}</p>
                    <img src={contact.PHOTO} />
                    <p>{contact.DESCRIPTION}</p>
                    <p>{contact.EMAIL}</p>
                </div>
            ))}
        </div>
    )
}

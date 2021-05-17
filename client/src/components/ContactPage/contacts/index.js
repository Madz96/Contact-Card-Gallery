import React from 'react';
import { useSelector } from 'react-redux';

import './index.css';

export function Contacts(props) {
    const contacts = useSelector(state => state.contacts);
    console.log(contacts.length);
    if (contacts.length === 0) {
        return (
            <div className="no-contacts">
                <h2>No contacts found!</h2>
            </div>
        );
    }

    return (
        <div className="contact-list">
            {contacts.map((contact, i) => (
                <div className="contact-card" key={i}>
                    <div className={contact.GENDER === "Male" ? "general-section-male" : "general-section-female"}>
                        <div className="profile-image-section">
                            <img src={contact.PHOTO} alt="avatar" />
                        </div>
                        <div className="info-section">
                            <h2>{contact.NAME}</h2>
                            <div>
                                <img className="icon" src="icons/location.png" alt="location" /><span>{contact.LOCATION}</span>
                            </div>
                            <div>
                                <img src="icons/birthday-cake.png" alt="birthday" /><span>{contact.DOB}</span>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{contact.DESCRIPTION}</p>
                    </div>
                    <div className="contact-info">
                        <div>
                            <img src="icons/phone.png" alt="phone" /><span>{contact.PHONE}</span>
                        </div>
                        <div>
                            <img src="icons/email.png" alt="email" /><span>{contact.EMAIL}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import SocialsBar from '../../components/SocialsBar/SocialsBar';


import './ContactMeSection.scss';

const contact_me_section = props => {
    return (
        <div className="contact-me-section-full">
            <div className="contact-me-section-body">
                <h2 className="contact-me-section-header">
                    contact me.
                </h2>
                <ContactForm/>
                <SocialsBar/>
            </div>
        </div>
    );
}

export default contact_me_section;
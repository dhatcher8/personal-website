import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import SocialsBar from '../../components/SocialsBar/SocialsBar';

import './ContactMeSection.scss';

const contact_me_section = props => {
    return (
        <div>
            <div className="contact-me-section-full">
                <div className="contact-me-section-body">
                    <h2 className="contact-me-section-header">
                        contact me.
                    </h2>
                    <div className="contact-me-subsection-body-text">
                        Looking to get in touch? Feel free to shoot me a message and I'll get back to you shortly!   
                    </div>
                    {/* <div className="photography-subsection-body-text">
                        That being said, I hope you enjoy the moments I've had the pleasure of capturing.
                    </div> */}
                    <ContactForm/>
                    
                </div>
            </div>
            <div className="socials-footer">
                <SocialsBar/>
                <div className="footer-tag-line">
                    &nbsp;Designed and Built by Drew Hatcher
                </div>
            </div>

        </div>
    );
}

export default contact_me_section;
import React from 'react';

import githubIcon from '../../assets/images/SVG/github-icon.svg';
import pdfIcon from '../../assets/images/SVG/pdf-icon.svg';
import emailIcon from '../../assets/images/SVG/email-icon.svg';
import linkedinIcon from '../../assets/images/SVG/linkedin-icon.svg';
import resumePDF from '../../assets/files/resume.pdf';
import './SocialsBar.scss';

const socialsBar = props => {
    return (
        <div className="socials-container">

            <a href="https://github.com/dhatcher8" target="_blank" rel="noopener noreferrer">
                <img className="github-icon" src={githubIcon} alt="github"></img>
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                <img className="pdf-icon" src={pdfIcon} alt="resume"></img>
            </a>
            <a href="mailto:drewhatcher@gmail.com">
                <img className="email-icon" src={emailIcon} alt="email"></img>
            </a>
            <a href="https://www.linkedin.com/in/drew-hatcher" target="_blank" rel="noopener noreferrer">
                <img className="linkedin-icon" src={linkedinIcon} alt="linkedIn"></img>
            </a>
        </div>
    );
}

export default socialsBar;
import React from 'react';

import logoAndTitle from '../../assets/images/SVG/logo-and-title.svg';
import scrollIcon from '../../assets/images/SVG/scroll-icon.svg';
import SocialsBar from '../../components/SocialsBar/SocialsBar';
import './HomeSection.scss';

const home_section = props => {
    return (
        <div className="home-section-full">
            <div className="navbar-filler-div"></div>
            <div className="home-section-body">    
                <img className="logo-and-title-big" src={logoAndTitle} alt="Logo"></img>
                <div className="subtitles">
                    <ul className="subtitles-ul">
                        <li>Software Developer</li>
                        <li>Student</li>
                        <li>Artist</li>
                    </ul>
                </div>
                <SocialsBar/>
                <div className="scroll-icon-container">
                    <img className="scroll-icon" src={scrollIcon} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default home_section;
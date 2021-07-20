import React from 'react';
import { scroller } from 'react-scroll';

import logoAndTitle from '../../assets/images/SVG/logo-and-title.svg';
import scrollIcon from '../../assets/images/SVG/scroll-icon.svg';
import SocialsBar from '../../components/SocialsBar/SocialsBar';
import './HomeSection.scss';

const home_section = props => {
    
    const scrollTo = (destinationId) => {
        scroller.scrollTo(destinationId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOut'
        });

    };
    
    return (
        <div className="home-section-full">
            <div className="navbar-filler-div"></div>
            <div className="home-section-body">    
                <img className="logo-and-title-big" src={logoAndTitle} alt="Logo"></img>
                <div className="subtitles">
                    <ul className="subtitles-ul">
                        <li>Data Scientist</li>
                        <li>Software Developer</li>
                        <li>Creator</li>
                    </ul>
                </div>
                <SocialsBar/>
                <div className="scroll-icon-container">
                    <a onClick={() => scrollTo('scroll-about-me-dest')}><img className="scroll-icon" src={scrollIcon} alt=""></img></a>
                </div>
            </div>
        </div>
    );
}

export default home_section;
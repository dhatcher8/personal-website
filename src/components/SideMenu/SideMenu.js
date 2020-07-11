import React from 'react';
import { scroller } from 'react-scroll';

import whiteMenu from '../../assets/images/SVG/white-hamburger.svg';
import './SideMenu.scss';

const menuToggleButton = props => {
    
    let menuClasses = 'side-menu';
    if (props.show) {
        menuClasses = 'side-menu open'
    }

    const scrollTo = (destinationId) => {
        scroller.scrollTo(destinationId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOut'
        });
        props.menuClickHandler();
    };

    return (
        <nav className={menuClasses}>
            <img className="menu-button-white" src={whiteMenu} onClick={props.menuClickHandler} alt="MENU"></img>
            <ul className="side-menu-items">
                <li><a onClick={() => scrollTo('scroll-about-me-dest')}>about me.</a></li>
                <li><a onClick={() => scrollTo('scroll-experience-dest')}>experience.</a></li>
                <li><a onClick={() => scrollTo('scroll-projects-dest')}>projects.</a></li>
                <li><a onClick={() => scrollTo('scroll-photography-dest')}>photography.</a></li>
                <li><a onClick={() => scrollTo('scroll-contact-me-dest')}>contact me.</a></li>
            </ul>
        </nav>
    );
}

export default menuToggleButton;
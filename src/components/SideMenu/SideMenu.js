import React from 'react';

import whiteMenu from '../../assets/images/SVG/white-hamburger.svg';
import './SideMenu.scss';

const menuToggleButton = props => {
    
    let menuClasses = 'side-menu';
    if (props.show) {
        menuClasses = 'side-menu open'
    }

    return (
        <nav className={menuClasses}>
            <img className="menu-button-white" src={whiteMenu} onClick={props.menuClickHandler} alt="MENU"></img>
            <ul className="side-menu-items">
                <li><a href="/">about me.</a></li>
                <li><a href="/">experience.</a></li>
                <li><a href="/">projects.</a></li>
                <li><a href="/">photography.</a></li>
                <li><a href="/">contact me.</a></li>
            </ul>
        </nav>
    );
}

export default menuToggleButton;
import React from 'react';

import blackMenu from '../../assets/images/SVG/black-hamburger.svg';
import './MenuToggleButton.scss';

const menuToggleButton = props => {
    return (
        <img className="menu-button-black" src={blackMenu} onClick={props.click} alt="MENU"></img>
    );
}

export default menuToggleButton;
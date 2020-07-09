import React from 'react';

import MenuToggleButton from '../SideMenu/MenuToggleButton';
import logoSVG from '../../assets/images/SVG/dh-logo.svg';
import './NavigationBar.scss';

const navigation_bar = props => {
    return (
        <header className="navigation-bar">
            <nav className="navigation-bar-nav">
                <div className="navigation-bar-logo">
                    <a href="/">
                        <img className="logo-small" src={logoSVG} alt="Logo">
                        </img>
                    </a>
                </div>
                <div className="spacer"/>
                <div className="navigation-bar-menu-button">
                    <MenuToggleButton click={props.menuClickHandler}/>
                </div> 
                <div className="navigation-bar-list">
                    <ul>
                        <li><a href="/">about me.</a></li>
                        <li><a href="/">experience.</a></li>
                        <li><a href="/">projects.</a></li>
                        <li><a href="/">photography.</a></li>
                        <li><a href="/">contact me.</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navigation_bar;
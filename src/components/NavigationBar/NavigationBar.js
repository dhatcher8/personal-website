import React from 'react';
import { scroller } from 'react-scroll';

import MenuToggleButton from '../SideMenu/MenuToggleButton';
import logoSVG from '../../assets/images/SVG/dh-logo.svg';
import './NavigationBar.scss';

const navigation_bar = props => {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || currentScrollPos < 80) {
            let docs = document.getElementsByClassName("navigation-bar");
            var i;
            for (i = 0; i < docs.length; i++) {
                docs[i].style.top = "0px";
            }
        } else {
            let docs = document.getElementsByClassName("navigation-bar");
            var j;
            for (j = 0; j < docs.length; j++) {
                docs[j].style.top = "-100px";
            }
        }
        prevScrollpos = currentScrollPos;
    }

    const scrollTo = (destinationId) => {
        scroller.scrollTo(destinationId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOut'
        });

    };

    return (
        <header className="navigation-bar">
            <nav className="navigation-bar-nav">
                <div className="navigation-bar-logo">
                    <a onClick={() => scrollTo('scroll-home-dest')}>
                        <img className="logo-small" src={logoSVG} alt="Logo" >
                        </img>
                    </a>
                </div>
                <div className="spacer"/>
                <div className="navigation-bar-menu-button">
                    <MenuToggleButton click={props.menuClickHandler}/>
                </div> 
                <div className="navigation-bar-list">
                    <ul>
                        <li><a title="about me." onClick={() => scrollTo('scroll-about-me-dest')}>about me.</a></li>
                        <li><a title="experience." onClick={() => scrollTo('scroll-experience-dest')}>experience.</a></li>
                        <li><a title="projects." onClick={() => scrollTo('scroll-projects-dest')}>projects.</a></li>
                        <li><a title="photography." onClick={() => scrollTo('scroll-photography-dest')}>photography.</a></li>
                        <li><a title="contact me." onClick={() => scrollTo('scroll-contact-me-dest')}>contact me.</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navigation_bar;
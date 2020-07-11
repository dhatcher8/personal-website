import React, { Component } from 'react';
import { Element } from 'react-scroll';

import NavigationBar from './components/NavigationBar/NavigationBar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutMeSection from './sections/AboutMeSection/AboutMeSection';
import PhotographySection from './sections/PhotographySection/PhotographySection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import ContactMeSection from './sections/ContactMeSection/ContactMeSection';


class App extends Component {
	state = {
		sideMenuOpen: false,
	}
	
	menuToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideMenuOpen: !prevState.sideMenuOpen};
		});
	};

	backdopClickHander = () => {
		this.setState({sideMenuOpen: false});
	};

	render() {

		let backdrop;

		if (this.state.sideMenuOpen) {
			backdrop = <Backdrop click={this.backdopClickHander}/>;
		}

		return (
			<div style={{height: '100%'}}>
				<NavigationBar menuClickHandler={this.menuToggleClickHandler}/>
				{backdrop}
				<SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
				<HomeSection/>
				<Element id='scroll-about-me-dest'><AboutMeSection/></Element>
				<Element id='scroll-experience-dest'><ExperienceSection/></Element>
				<Element id='scroll-projects-dest'><ProjectsSection/></Element>
				<Element id='scroll-photography-dest'><PhotographySection/></Element>
				<Element id='scroll-contact-me-dest'><ContactMeSection/></Element>
			</div>
			
		);
	}
}

export default App;			

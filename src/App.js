import React, { Component } from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import HomeSection from './sections/HomeSection/HomeSection';

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
			</div>
			
		);
	}
}

export default App;			

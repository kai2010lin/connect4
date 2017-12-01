import React, { Component } from 'react';
import logo from '../logo.svg';
//import './App.css';

class Header extends Component {
	render() {
		//console.log(this.props.index);
		return (
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to Connect Four Game</h1>
			</header>
		);
	}
}
export default Header;

import React, { Component } from 'react';
//import './App.css';

class RestartButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		e.preventDefault();
		this.props.clickFunc();
	}

	render() {
		//console.log(this.props.index);
		var restart = null;
		if (this.props.winner === 'NA') restart = (<div></div>);
		else restart = (<button className = "play_again" type="button" onClick = {this.handleClick}>Restart Game</button>);
		return (
			<div>
				{restart}
			</div>
		);
	}
}
export default RestartButton;

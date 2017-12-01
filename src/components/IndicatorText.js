import React, { Component } from 'react';
//import './App.css';

class IndicatorText extends Component {
	render() {
		var text = null;
		if (this.props.winner === 'NA') text = `It is ${this.props.turn}'s turn.`;
		else if (this.props.winner === 'Draw') text = `Draw Game`;
		else text = `Player ${this.props.winner} is the winner.`;
	
		return (
			<div className = "indicator">
				{text}
			</div>
		);
	}
}
export default IndicatorText;

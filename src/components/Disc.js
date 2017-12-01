import React, { Component } from 'react';
//import './App.css';

class Disc extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	
	handleMouseEnter(e){
		e.preventDefault();
		var col = parseInt(this.props.index, 10) % 10;
		//console.log('enter', col);
		this.props.enterFunc(col, this.props.turn);
	}
	
	handleMouseLeave(e){
		e.preventDefault();
		var col = parseInt(this.props.index, 10) % 10;
		//console.log('leave', col);
		this.props.leaveFunc(col);
	}
	
	handleClick(e){
		e.preventDefault();
		//console.log(this.props.index);
		var col = parseInt(this.props.index, 10) % 10;
		this.props.clickFunc(col, this.props.turn);
	}

	render() {
		//console.log(this.props.index);
		return (
			<td>
				<button type="button" className={this.props.color} onClick = {this.handleClick} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}></button>
			</td>
		);
	}
}
export default Disc;

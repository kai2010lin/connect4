import React, { Component } from 'react';
import Disc from './Disc';
import IndicatorText from './IndicatorText';
import RestartButton from './RestartButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addDisc, restartGame, mouseLeave, mouseEnter} from '../actions/actions';
//import './App.css';

class Board extends Component {
	
	constructor(props) {
		super(props);
		this.handleDiscClick = this.handleDiscClick.bind(this);
		this.handleRestartClick = this.handleRestartClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	
	handleDiscClick(column, color){
		this.props.addDisc(column, color);
	}
	
	handleRestartClick(){
		this.props.restartGame();
	}
	
	handleMouseEnter(col, turn){
		this.props.projectNextMove(col, turn);
	}
	
	handleMouseLeave(col){
		this.props.unProjectNextMove(col);
	}	
	
	createRow(row, rowIndex){
		return (
			row.map((disc, colIndex) => {
				var keyNo = rowIndex.toString().concat(colIndex.toString());
				//console.log(keyNo);
				var ret;
				if (disc === 'N')	ret = (<Disc key = {keyNo} color = 'DiscGrey' index = {keyNo} leaveFunc = {this.handleMouseLeave} enterFunc = {this.handleMouseEnter} clickFunc = {this.handleDiscClick} turn = {this.props.turn}/>);
				else if(disc === 'Y') ret = (<Disc key = {keyNo} color = 'DiscYellow' index = {keyNo} leaveFunc = {this.handleMouseLeave} enterFunc = {this.handleMouseEnter} clickFunc = {this.handleDiscClick} turn = {this.props.turn}/>);
				else if(disc === 'R') ret = (<Disc key = {keyNo} color = 'DiscRed' index = {keyNo} leaveFunc = {this.handleMouseLeave} enterFunc = {this.handleMouseEnter} clickFunc = {this.handleDiscClick} turn = {this.props.turn}/>);
				else if(disc === 'LR') ret = (<Disc key = {keyNo} color = 'DiscLightRed' index = {keyNo} leaveFunc = {this.handleMouseLeave} enterFunc = {this.handleMouseEnter} clickFunc = {this.handleDiscClick} turn = {this.props.turn}/>);
				else if(disc === 'LY') ret = (<Disc key = {keyNo} color = 'DiscLightYellow' index = {keyNo} leaveFunc = {this.handleMouseLeave} enterFunc = {this.handleMouseEnter} clickFunc = {this.handleDiscClick} turn = {this.props.turn}/>);
				return ret;
			})
		)
	}
	
	
	createBoard(){
		return this.props.board.map((row, rowIndex) => {
			return (
				<tr>{this.createRow(row, rowIndex)}</tr>
			)
		})
	}
	
	render() {
		return (
			<div className="board">
				<IndicatorText turn = {this.props.turn} winner = {this.props.winner}></IndicatorText>
				<RestartButton winner = {this.props.winner} clickFunc = {this.handleRestartClick}></RestartButton>
				<table>
					<tbody>
						{this.createBoard()}
					</tbody>
				</table>
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
		winner	: 	state.winner,
		board	:	state.board,
		turn	: 	state.turn
	};
}

function matchDisPatchToProps(dispatch){
	return bindActionCreators({
		addDisc		: 	addDisc,
		restartGame	: 	restartGame,
		projectNextMove	: 	mouseEnter,
		unProjectNextMove	: 	mouseLeave
	}, dispatch);
}

export default connect(mapStateToProps, matchDisPatchToProps)(Board);

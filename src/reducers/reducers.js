import * as actions from '../actions/actions'

export const initialState = {
	'winner': 'NA',				//NA/Yellow/Red/Draw
	'board': 
		[
			['N', 'N', 'N', 'N', 'N', 'N', 'N'],
			['N', 'N', 'N', 'N', 'N', 'N', 'N'],
			['N', 'N', 'N', 'N', 'N', 'N', 'N'],
			['N', 'N', 'N', 'N', 'N', 'N', 'N'],
			['N', 'N', 'N', 'N', 'N', 'N', 'N'],
			['N', 'N', 'N', 'N', 'N', 'N', 'N']
		],
	'turn': 'Red'
};

export function nextMove(state = initialState, action){
	//console.log('state is ', state, '\n action is ', action);
	//console.log(state.board);
	switch(action.type){
		case actions.RESTART_GAME:
			return initialState
		
		case actions.ADD_DISC:
			var color = action.color;
			var column = action.column;
			var heightIndexNow = checkCurrentHeight(state.board, column);
			
			if (heightIndexNow === 5) return state;
			if (state.winner !== "NA") return state;
			
			var nextBoard = JSON.parse(JSON.stringify(state.board));	//deep copy
			//console.log(nextBoard);
			addDisc(nextBoard, color, column, heightIndexNow + 1);
			
			var nextTurn;
			if (state.turn === 'Red') nextTurn = 'Yellow';
			else if(state.turn === 'Yellow') nextTurn = 'Red';
			
			var nextWinner;
			if (checkWinner(nextBoard, color, column, heightIndexNow + 1) === false) nextWinner = 'NA';
			else nextWinner = color;
			if (checkDraw(nextBoard)) nextWinner = 'Draw';
			
			//console.log('nextWinner is ', nextWinner);
			//console.log('nextBoard is ', nextBoard);
			//console.log('nextTurn is ', nextTurn);
			
			var nextState = Object.assign({}, state, {
					'winner'	:	nextWinner,
					'board'		: 	nextBoard,
					'turn'		:	nextTurn
			});
			return nextState;
			
		case actions.MOUSE_ENTER:

			var color = action.color;
			var column = action.column;
			//console.log("enter", color, column);
			var heightIndexNow = checkCurrentHeight(state.board, column);
			
			if (heightIndexNow === 5) return state;
			if (state.winner !== "NA") return state;
			
			var nextBoard = JSON.parse(JSON.stringify(state.board));	//deep copy
			//console.log(nextBoard);
			var projectColor = null;
			if (color === 'Red') projectColor = 'LR';
			else if (color === 'Yellow') projectColor = 'LY';
			projectDisc(nextBoard, projectColor, column, heightIndexNow + 1);
			
			var nextState = Object.assign({}, state, {
					'board'		: 	nextBoard
			});
			return nextState;
			
		case actions.MOUSE_LEAVE:
			//console.log("leave");
			var column = action.column;
			var heightIndexNow = checkCurrentHeight(state.board, column);
			//console.log(heightIndexNow);

			
			//console.log(heightIndexNow, "here1");
			if (heightIndexNow === 5) return state;
			if (state.winner !== "NA") return state;
			
			//console.log(heightIndexNow, "here2");
			var nextBoard = JSON.parse(JSON.stringify(state.board));	//deep copy
			unProjectDisc(nextBoard, column, heightIndexNow);
			
			var nextState = Object.assign({}, state, {
					'board'		: 	nextBoard
			});
			return nextState;
			
		default:
			return state;
	}
}

function unProjectDisc(board, column, row){
	//console.log('now working on row ', 4 - row);
	if (board[4 - row][column] === 'LR' || board[4 - row][column] === 'LY') board[4 - row][column] = 'N';
}

function projectDisc(board, color, column, row){
	board[5 - row][column] = color;
}

function addDisc(board, color, column, row){
	var symbol;
	if (color === 'Red') symbol = 'R';
	else symbol = 'Y';
	board[5 - row][column] = symbol;
}

function checkCurrentHeight(board, col){
	//console.log(board);
	//console.log(board[5][3]);
	var height = -1;
	for(var i = 5; i >= 0; i--){
		if(board[i][col] === 'R' || board[i][col] === 'Y') height++;
		else break;
	}
	return height;
}

function checkWinner(board, color, column, row){//to check if we have a win
	var realRow = 5 - row;
	//console.log(board);
	//console.log('realRow is ', realRow, '. column is ', column);
	if (color === 'Red') color = 'R';
	if (color === 'Yellow') color = 'Y';
	
	var count = 0;
	var up = 0, down = 0, left = 0, right = 0, upleft = 0, upright = 0, downleft = 0, downright = 0;
	
	//up length
	for(var i = 1; i <= 10; i++){						//there is definitely no 10 columns nor 10 rows
		if (realRow - i >= 0 && board[realRow - i][column] === color) {
			count++;
			if (count === 3) {
				//console.log('up only');
				return true;				//plus board[realRow][column] total is 4
			}
		}
		else {
			up = count;
			break;
		}
	}
	count = 0;
	
	//down
	for(var i = 1; i <= 10; i++){
		if (realRow + i <= 5 && board[realRow + i][column] === color) {
			count++;
			if (count + up + 1 === 4){
				//console.log('up + down, up is ', up);
				return true;						//found 4
			}
		}
		else {
			down = count;
			break;
		}
	}
	count = 0;
	
	//left
	for(var i = 1; i <= 10; i++){
		if (column - i >= 0 && board[realRow][column - i] === color) {
			count++;
			if (count === 3) {
				//console.log('left only');
				return true;
			}
		}
		else {
			left = count
			break;
		}
	}
	count = 0;
	
	//right
	for(var i = 1; i <= 10; i++){
		if (column + i <= 6 && board[realRow][column + i] === color) {
			count++
			if (count + left  + 1 === 4) {
				//console.log('left + right, left is ', left);
				return true;
			}
		}
		else {
			right = count;
			break;
		}
	}
	count = 0;
	
	//upleft
	for(var i = 1; i <= 10; i++){
		if (column - i >= 0 && realRow - i >= 0 && board[realRow - i][column - i] === color) {
			count++
			if (count === 3) {
				//console.log('upleft only');
				return true;
			}
		}
		else {
			upleft = count;
			break;
		}
	}
	count = 0;
	
	//downright
	for(var i = 1; i <= 10; i++){
		if (column + i <= 6 && realRow + i <= 5 && board[realRow + i][column + i] === color) {
			count++
			if (count + upleft + 1 === 4) {
				//console.log('upleft + downright, upleft is ', upleft);
				return true;
			}
		}
		else {
			downright = count;
			break;
		}
	}
	count = 0;
	
	//upright
	for(var i = 1; i <= 10; i++){
		if (column + i <= 6 && realRow - i >= 0 && board[realRow - i][column + i] === color) {
			count++
			if (count === 3) {
				//console.log('upright only');
				return true;
			}
		}
		else {
			upright = count;
			break;
		}
	}
	count = 0;
	
	//downleft
	for(var i = 1; i <= 10; i++){
		if (column - i >= 0 && realRow + i <= 5 && board[realRow + i][column - i] === color) {
			count++
			if (count + upright + 1 === 4) {
				//console.log('upright + downleft, upright is ', upright);
				return true;
			}
		}
		else {
			downleft = count;
			break;
		}
	}
	count = 0;
	
	//console.log(
	//'up is ', up, ' \n',
	//'down is ', down, ' \n',
	//'left is ', left, ' \n',
	//'right is ', right, ' \n',
	//'upleft is ', upleft, ' \n',
	//'downright is ', downright, ' \n',
	//'upright is ', upright, ' \n',
	//'downleft is ', downleft, ' \n'
	//);
	
	//console.log(
	//	'board is ', board, '\n',
	//	'color is ', color, '\n',
	//	'column is ', column, '\n',
	//	'realRow is ', realRow, '\n'
	//	);
	return false;
}

function checkDraw(board){
	var ret = false;
	for(var i = 0; i < 7; i++){
		if(board[0][i] !== 'N'){
			if(i === 6) ret = true;
		}
		else break;
	}
	return ret;
}
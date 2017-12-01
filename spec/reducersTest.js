import {nextMove} from '../src/reducers/reducers'
import * as actions from '../src/actions/actions'

describe('test all possible next state from current state. ', () => {
	console.log('Test of reducers started');
	//test restart game
	it('should restart a new game', () => {
		const res = {
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
		}

		expect(nextMove(undefined, actions.restartGame())).toEqual(res);
	});
  
	it('should restart a new game even if state is not undefined', () => {
		const para = {
			'winner': 'Red',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'R', 'N']
				],
			'turn': 'Yellow'
		};
		
		const res = {
			'winner': 'NA',				//NA/Yellow/Red
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

		expect(nextMove(undefined, actions.restartGame())).toEqual(res);
	});
	
	//test add dics function
	it('should add 1 Red on column 2', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'NA',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'R', 'Y', 'R', 'N', 'N']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(2, 'Red'))).toEqual(res);
	});

	it('should check on if it can detect a winner of downward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N'],
					['N', 'N', 'N', 'Y', 'R', 'N', 'N']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(4, 'Red'))).toEqual(res);
	});
	
	it('should check on if it can detect a winner of leftward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['Y', 'Y', 'Y', 'N', 'R', 'R', 'R']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['Y', 'Y', 'Y', 'R', 'R', 'R', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(3, 'Red'))).toEqual(res);
	});
	
	it('should check on if it can detect a winner of rightward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['Y', 'Y', 'Y', 'R', 'R', 'R', 'N']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['Y', 'Y', 'Y', 'R', 'R', 'R', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(6, 'Red'))).toEqual(res);
	});

	it('should check on if it can detect a winner has both right and left side', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'R', 'Y', 'Y', 'Y']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'R', 'R', 'Y', 'Y', 'Y']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(2, 'Red'))).toEqual(res);
	});
	
	
	it('should check on if it can detect a winner upleftward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'N', 'N', 'N', 'N'],
					['R', 'Y', 'R', 'N', 'N', 'N', 'N'],
					['R', 'Y', 'Y', 'N', 'Y', 'Y', 'Y']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'N', 'N', 'N', 'N'],
					['R', 'Y', 'R', 'N', 'N', 'N', 'N'],
					['R', 'Y', 'Y', 'R', 'Y', 'Y', 'Y']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(3, 'Red'))).toEqual(res);
	});

	it('should check on if it can detect a winner uprightward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'R'],
					['R', 'Y', 'Y', 'N', 'N', 'R', 'R'],
					['Y', 'Y', 'Y', 'N', 'R', 'R', 'R'],
					['Y', 'Y', 'Y', 'N', 'R', 'R', 'Y']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'R'],
					['R', 'Y', 'Y', 'N', 'N', 'R', 'R'],
					['Y', 'Y', 'Y', 'N', 'R', 'R', 'R'],
					['Y', 'Y', 'Y', 'R', 'R', 'R', 'Y']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(3, 'Red'))).toEqual(res);
	});
	
	it('should check on if it can detect a winner downrightward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'N', 'L', 'L', 'L'],
					['R', 'R', 'R', 'N', 'L', 'L', 'L'],
					['Y', 'R', 'R', 'R', 'L', 'L', 'R']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'N', 'L', 'L', 'L'],
					['R', 'R', 'R', 'N', 'L', 'L', 'L'],
					['Y', 'R', 'R', 'R', 'L', 'L', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(0, 'Red'))).toEqual(res);
	});

	it('should check on if it can detect a winner downleftward', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['Y', 'Y', 'Y', 'N', 'N', 'R', 'R'],
					['Y', 'Y', 'Y', 'N', 'R', 'R', 'R'],
					['R', 'Y', 'Y', 'R', 'R', 'R', 'Y']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'R'],
					['Y', 'Y', 'Y', 'N', 'N', 'R', 'R'],
					['Y', 'Y', 'Y', 'N', 'R', 'R', 'R'],
					['R', 'Y', 'Y', 'R', 'R', 'R', 'Y']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(6, 'Red'))).toEqual(res);
	});
	
	it('should check on if it can detect a winner has both upleft and downright', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'N', 'L', 'L', 'L'],
					['R', 'R', 'N', 'N', 'L', 'L', 'L'],
					['Y', 'R', 'R', 'R', 'L', 'L', 'R']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'N', 'N', 'N', 'N', 'N', 'N'],
					['R', 'R', 'N', 'N', 'L', 'L', 'L'],
					['R', 'R', 'R', 'N', 'L', 'L', 'L'],
					['Y', 'R', 'R', 'R', 'L', 'L', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(2, 'Red'))).toEqual(res);
	});
	
	it('should check on if it can detect a winner has both upright and downleft', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'R'],
					['Y', 'Y', 'Y', 'N', 'N', 'N', 'R'],
					['R', 'Y', 'Y', 'N', 'R', 'R', 'R'],
					['Y', 'Y', 'Y', 'R', 'R', 'R', 'L']
				],
			'turn': 'Red'
		};
		
		const res = {
			'winner': 'Red',				//NA/Yellow/Red
			'board': 
				[
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'N'],
					['N', 'N', 'N', 'N', 'N', 'N', 'R'],
					['Y', 'Y', 'Y', 'N', 'N', 'R', 'R'],
					['R', 'Y', 'Y', 'N', 'R', 'R', 'R'],
					['Y', 'Y', 'Y', 'R', 'R', 'R', 'L']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(5, 'Red'))).toEqual(res);
	});
	
	it('should check on if it can detect a draw', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'N'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};
		
		const res = {
			'winner': 'Draw',				//NA/Yellow/Red
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Red'
		};

		expect(nextMove(para, actions.addDisc(6, 'Yellow'))).toEqual(res);
	});
	
	
	it('should check on if it can skip one action if it is invalid', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'N'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};
		
		const res = {
			'winner': 'NA',				//NA/Yellow/Red
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'N'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.addDisc(5, 'Yellow'))).toEqual(res);
	});	
	
	it('should project a disc into assigned column', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'N'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};
		
		const res = {
			'winner': 'NA',				//NA/Yellow/Red
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'LY'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.mouseEnter(6, 'Yellow'))).toEqual(res);
	});
	
	it('should unproject a disc from assigned column', () => {
		const para = {
			'winner': 'NA',				//NA/Yellow/Red/Draw
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'LY'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};
		
		const res = {
			'winner': 'NA',				//NA/Yellow/Red
			'board': 
				[
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'N'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R'],
					['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
					['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']
				],
			'turn': 'Yellow'
		};

		expect(nextMove(para, actions.mouseLeave(6))).toEqual(res);
	});
	
	console.log('Test of reducers ended');
})


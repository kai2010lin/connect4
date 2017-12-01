import * as actions from '../src/actions/actions'

console.log('Test of actions started');

describe('test restart game action', () => {
  console.log('Test of actions started');
  it('should restart a new game', () => {
    const res = {
      'type': actions.RESTART_GAME,
    }
    expect(actions.restartGame()).toEqual(res)
  })
})

describe('test Add (color) disc into (number) column action', () => {
  it('should add disc', () => {
    const res = {
      'type'	:	actions.ADD_DISC,
      'column'	:	1,
	  'color'	:	'yellow'
    }
    expect(actions.addDisc(1, 'yellow')).toEqual(res);
  })
})

describe('test project (color) disc into (number) column action', () => {
  it('should project a disc', () => {
    const res = {
      'type'	:	actions.MOUSE_ENTER,
      'column'	:	1,
	  'color'	:	'yellow'
    }
    expect(actions.mouseEnter(1, 'yellow')).toEqual(res);
  })
})

describe('test unproject disc from (number) column action', () => {
  it('should unproject disc', () => {
    const res = {
      'type'	:	actions.MOUSE_LEAVE,
      'column'	:	1,
    }
    expect(actions.mouseLeave(1)).toEqual(res);
  })
  console.log('Test of actions ended');
})
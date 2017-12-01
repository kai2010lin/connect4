import { createStore } from 'redux'
import {nextMove} from './reducers/reducers'
//import {restartGame, addDisc} from './actions/actions'

let store = createStore(nextMove);


//testing data

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(restartGame())
store.dispatch(addDisc(0, 'Red'))
store.dispatch(addDisc(1, 'Red'))
store.dispatch(addDisc(2, 'Red'))
store.dispatch(addDisc(3, 'Red'))

unsubscribe()
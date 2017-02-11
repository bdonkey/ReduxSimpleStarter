/**
 * Created by scottschmidt on 2/11/17.
 */
import {FETCH_POSTS} from '../actions/index'

const INITIAL_STATE = {all: [], post:null}

export default function (state = INITIAL_STATE, action) {
 switch(action.type) {
   case FETCH_POSTS:
return{...state, all: action.payload.data} // see http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
   default:
     return state
 }
}

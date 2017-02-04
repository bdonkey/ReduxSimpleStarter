/**
 * Created by scottschmidt on 2/3/17.
 */
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
//      return state.concat([action.payload.data]);
      // es6 for above --flatten the array return new state
      return [action.payload.data, ...state];

  }
  return state;
}

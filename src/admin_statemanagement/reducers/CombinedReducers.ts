import { combineReducers } from "redux";
import { IncrementReducer } from '../../integrasjon/IncrementReducer';
import { QueueReducer } from '../../kø/QueueReducer';


export const reducers = combineReducers({
    increment : IncrementReducer,
    queue: QueueReducer,
});
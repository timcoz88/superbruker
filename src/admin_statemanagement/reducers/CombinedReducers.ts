import { combineReducers } from "redux";
import { QueueReducer } from './QueueReducer';
import { IncrementReducer } from './IncrementReducer';


export const reducers = combineReducers({
    queue: QueueReducer,
    increment : IncrementReducer
});
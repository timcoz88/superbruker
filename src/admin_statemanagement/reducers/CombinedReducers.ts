import { combineReducers } from "redux";
import { IncrementReducer } from './IncrementReducer';
import { QueueReducer } from './QueueReducer';


export const reducers = combineReducers({
    increment : IncrementReducer,
    queue: QueueReducer,
});
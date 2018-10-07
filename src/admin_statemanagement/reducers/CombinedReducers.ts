import { combineReducers } from "redux";
import { QueueReducer } from './QueueReducer';


export const reducers = combineReducers({
    queue: QueueReducer,
});
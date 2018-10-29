import { createStore } from 'redux';
import { reducers } from './CombinedReducers';

export default function configureStore(initialState) {
  return createStore(reducers, initialState);
}

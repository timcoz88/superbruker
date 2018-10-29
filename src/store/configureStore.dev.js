import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import { reducers } from './CombinedReducers';
import DevTools from '../_app/DevTools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./CombinedReducers', () =>
      store.replaceReducer(require('./CombinedReducers').default)
    );
  }

  return store;
}

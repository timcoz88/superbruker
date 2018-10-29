import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './_app/registerServiceWorker';
import App from './appOgFaner/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

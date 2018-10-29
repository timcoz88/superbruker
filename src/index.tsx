import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './_app/registerServiceWorker';
import './index.css';
import Routing from './routing/Routing';

ReactDOM.render(
  <Routing />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

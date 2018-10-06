import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './_app/registerServiceWorker';
import './index.css';
import SuperAdmin from './tabnavigation/RoutingAndTabs';

ReactDOM.render(
  <SuperAdmin />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

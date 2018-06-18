import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SuperAdmin from './SuperAdmin';

ReactDOM.render(
  <SuperAdmin />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

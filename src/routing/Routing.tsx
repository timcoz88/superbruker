import AppBar from '@material-ui/core/AppBar';

import * as React from 'react';
import { HashRouter, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import Brevadmin from '../brev/Brevadmin';
import Integration from '../integrasjon/Integrasjon';
import Køadmin from '../kø/Køadmin';
import Logging from '../logging/Logging';
import Properties from '../properties/Properties';
import { store } from '../store/Store';
import './App.css';
import Faner from './Faner';

class Routing extends React.Component {
  public render() {
    return (
  <Provider store={store}>
    <HashRouter>
        <div>
          <AppBar position="static">
            <Faner />
            <Route path="/" exact={true} component={Brevadmin} />
            <Route path="/brukeradmin" component={Properties} />
            <Route path="/Køadmin" component={Køadmin} />
            <Route path="/logging" component={Logging} />
            <Route path="/Integrasjon" component={Integration} />
          </AppBar>
        </div>
      </HashRouter>
  </Provider>

    
    );
  }
}

export default Routing;

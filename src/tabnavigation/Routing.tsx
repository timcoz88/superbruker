import AppBar from '@material-ui/core/AppBar';

import * as React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Brevadmin from '../usecase/brev/Brevadmin';
import Integration from '../usecase/integrasjon/Integrasjon';
import Køadmin from '../usecase/kø/Køadmin';
import Logging from '../usecase/logging/Logging';
import Properties from '../usecase/properties/Properties';
import './App.css';
import Faner from './Faner';
import { Provider } from 'react-redux';
import { store } from '../admin_statemanagement/store/Store';

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

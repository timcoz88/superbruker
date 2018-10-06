import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { HashRouter, NavLink, Route } from "react-router-dom";

import Brevadmin from '../usecase/brev/Brevadmin';
import PrimeReact from '../usecase/integrasjon/Integrasjon';
import Køadmin from '../usecase/kø/Køadmin';
import Logging from '../usecase/logging/Logging';
import Brukeradmin from '../usecase/properties/Properties';
import './App.css';

class SuperAdmin extends React.Component {
  public state = {
    value: 0,
  };

  public handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  public render() {
    const { value } = this.state;
    return (
      <HashRouter>
        <div>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Brevadmin" component={NavLink}{...{ to: '/' } as any} />
              <Tab label="Brukeradmin" component={NavLink}{...{ to: '/brukeradmin' } as any} />
              <Tab label="Køadmin" component={NavLink}{...{ to: '/Køadmin' } as any} />
              <Tab label="Logging" component={NavLink}{...{ to: '/logging' } as any} />
              <Tab label="Integrasjon" component={NavLink}{...{ to: '/primereact' } as any} />

            </Tabs>
            <Route path="/" exact={true} component={Brevadmin} />
            <Route path="/brukeradmin" component={Brukeradmin} />
            <Route path="/Køadmin" component={Køadmin} />
            <Route path="/logging" component={Logging} />
            <Route path="/primereact" component={PrimeReact} />
          </AppBar>
        </div>
      </HashRouter>
    );
  }
}

export default SuperAdmin;

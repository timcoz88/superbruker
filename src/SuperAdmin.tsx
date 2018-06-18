import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { HashRouter, NavLink, Route } from "react-router-dom";
import './App.css';
import Brevadmin from "./Brevadmin";
import Brukeradmin from "./Brukeradmin";
import Køadmin from "./Køadmin";

class SuperAdmin extends React.Component {
  public state = {
    value: 0,
  };

  public TabContainer(props: any) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

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
            </Tabs>

            {value === 0 && <this.TabContainer>
              <Route path="/" exact={true} component={Brevadmin} />
            </this.TabContainer>}

            {value === 1 && <this.TabContainer>
              <Route path="/brukeradmin" component={Brukeradmin} />
            </this.TabContainer>}

            {value === 2 && <this.TabContainer>
              <Route path="/Køadmin" component={Køadmin} />
            </this.TabContainer>}
          </AppBar>
        </div>
      </HashRouter>
    );
  }
}

export default SuperAdmin;

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import {  NavLink } from "react-router-dom";

class Faner extends React.Component {
  public state = {
    value: 0,
  };

  public handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  public render() {
    const { value } = this.state;
    return (
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Brevadmin" component={NavLink}{...{ to: '/' } as any} />
              <Tab label="Brukeradmin" component={NavLink}{...{ to: '/brukeradmin' } as any} />
              <Tab label="Køadmin" component={NavLink}{...{ to: '/Køadmin' } as any} />
              <Tab label="Logging" component={NavLink}{...{ to: '/logging' } as any} />
              <Tab label="Integrasjon" component={NavLink}{...{ to: '/primereact' } as any} />
            </Tabs>

    );
  }
}

export default Faner;

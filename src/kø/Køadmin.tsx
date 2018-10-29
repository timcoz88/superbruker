import { Button, Checkbox, withStyles } from "@material-ui/core";
import * as _ from "lodash";

import { withRouter } from "react-router";
import { styles } from "./styles";

import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationProps } from "./App.Actions";
import * as AppActionCreators from "./App.Actions";
import { Queue } from './Queue';

import { connect } from "react-redux";
import { AppState } from './AppState';


interface IAppProps extends IApplicationProps {
  queue: Queue;
  classes: any;
  theme?: any;
}

interface IState {
  anchorEl: any;
  notificationEl: any;
}

class Køadmin extends React.Component<IAppProps, IState> {

  public handleDrawerOpen = () => {
    this.props.enableQueue();
  };

  public handleDrawerClose = () => {
    this.props.disableQueue();
  };

  public render() {
    const { queue } = this.props;

    return (
      <div>
        <h2>Køadmin </h2>
        <ol>
          <li ><Button onClick={this.handleDrawerOpen}>Open</Button></li>
          <li ><Button onClick={this.handleDrawerClose}>Close</Button></li>
          <li> <Checkbox checked={queue.enableQueue}>state</Checkbox></li>

        </ol>
      </div>
    );
  }
}


const mapStateToProps = (state: AppState) => ({
  queue: state.queue

});

const mapDispatchtoProps = (dispatch: Dispatch) =>
  bindActionCreators(
    _.assign(
      {},
      AppActionCreators
    ),
    dispatch
  );

export default withRouter(connect(
  mapStateToProps,
  mapDispatchtoProps
)(withStyles(styles as any, { withTheme: true })(Køadmin as any)) as any);


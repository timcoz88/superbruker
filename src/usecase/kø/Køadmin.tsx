import * as _ from "lodash";
import { withStyles, Button, Checkbox } from "@material-ui/core";

import { withRouter } from "react-router";
import { styles } from "./styles";

import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationProps } from "../../admin_statemanagement/actions/App.Actions";
import * as AppActionCreators from "../../admin_statemanagement/actions/App.Actions";
import { Utility } from '../../admin_statemanagement/state/Utility';

import { AppState } from '../../admin_statemanagement/state/AppState';
import { connect } from "react-redux";


interface IAppProps extends IApplicationProps {
  utility: Utility;
  classes: any;
  theme?: any;
}

interface IState {
  anchorEl: any;
  notificationEl: any;
}

class Køadmin extends React.Component<IAppProps, IState> {

  public handleDrawerOpen = () => {
    this.props.openDrawer();
  };

  public handleDrawerClose = () => {
    this.props.closeDrawer();
  };

  public render() {
    const { utility } = this.props;

    return (
      <div>
        <h2>Køadmin </h2>
        <ol>
          <li ><Button onClick={this.handleDrawerOpen}>Open</Button></li>
          <li ><Button onClick={this.handleDrawerClose}>Close</Button></li>
          <li> <Checkbox checked={utility.drawerOpen}>state</Checkbox></li>

        </ol>
      </div>
    );
  }
}


const mapStateToProps = (state: AppState) => ({
  utility: state.utility

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


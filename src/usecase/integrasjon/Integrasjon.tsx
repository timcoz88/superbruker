import 'font-awesome/css/font-awesome.css';
import * as _ from "lodash";
import { Button } from 'primereact/components/button/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationProps } from 'src/admin_statemanagement/actions/App.Actions';
import { AppState } from 'src/admin_statemanagement/state/AppState';
import * as AppActionCreators from "../../admin_statemanagement/actions/App.Actions";
import { Increment } from '../../admin_statemanagement/state/Increment';
import '../../tabnavigation/Routing';
import logo from "./primereact-logo.png"



interface IAppProps extends IApplicationProps {
    increment: Increment 
    a: number
}
interface IAppState {
    count: number;
}

class Integration extends React.Component<IAppProps, IAppState> {
    
    public increment = () => {
        this.props.incrementStuff();
      };
    
    public render() {
        const { increment } = this.props;     
           
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <br/>
                <Button label="PrimeReact" onClick={this.increment} />
                <p>Number of Clicks:  
                <br/>{increment.increment}</p>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    increment: state.increment
  
  });
  
  const mapDispatchtoProps = (dispatch: Dispatch) =>
    bindActionCreators(
      _.assign(
        {},
        AppActionCreators           
      ),
      dispatch
    );
  
  export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(Integration as any);
  

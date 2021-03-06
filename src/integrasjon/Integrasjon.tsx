import 'font-awesome/css/font-awesome.css';
import * as _ from "lodash";
import { Button } from 'primereact/components/button/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from './AppState';
import { Increment } from './Increment';
import { IApplicationProps } from './IncrementActions';
import * as AppActionCreators from "./IncrementActions";



interface IAppProps extends IApplicationProps {
    increment: Increment 
    a: number
}
interface IAppState {
    count: number;
}

class Integration extends React.Component<IAppProps, IAppState> {
    
    public incrementCounter = () => {
        this.props.incrementCounter();
      };
    
    public render() {
        const { increment } = this.props;     
           
        return (
            <div className="App">
                <div className="App-header">
                    <img className="App-logo" alt="logo" />
                </div>
                <br/>
                <Button label="PrimeReact" onClick={this.incrementCounter} />
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
  

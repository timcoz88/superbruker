import 'font-awesome/css/font-awesome.css';
import { Button } from 'primereact/components/button/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import * as React from 'react';
import './App.css';
import logo  from './primereact-logo.png';

interface IAppProps {
    a: number
}
interface IAppState {
    count: number;
}

class PrimeReact extends React.Component<IAppProps, IAppState> {
    
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }
    
  public  increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    public render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <br/>
                <Button label="PrimeReact" onClick={this.increment} />
                <p>Number of Clicks:{this.state.count}</p>
            </div>
        );
    }
}

export default PrimeReact;

import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { Home }                 from './Home.js';
import './styles/index.css';
import { RenderMap }            from './components/RenderMap';
import { RenderStrategies }     from './components/RenderStrategies';
import { RenderSetups }         from './components/RenderSetups';
import { BrowserRouter, Route, HashRouter, Link, Switch } from 'react-router-dom';

export class App extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };
      
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/:map' component={RenderMap}/>
                    <Route exact path='/:map/strategies' component={RenderStrategies}/>
                    <Route exact path='/:map/setups' component={RenderSetups}/>
                </Switch>
            </HashRouter>
            // <p>{this.state.response}</p>

        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
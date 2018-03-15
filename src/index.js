import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { Home }                 from './Home.js';
import './styles/index.css';
import { RenderMap }            from './components/RenderMap';
import { RenderStrategies }     from './components/RenderStrategies';
import { RenderSetups }         from './components/RenderSetups';
import { BrowserRouter, Route } from 'react-router-dom';
import { RenderStrategySite } from './components/RenderStrategySite.js';

export class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/:map' component={RenderMap}/>
                    <Route exact path='/:map/strategies' component={RenderStrategies}/>
                    <Route exact path='/:map/setups' component={RenderSetups}/>
                    {/* <Route exact path='/:map/:map/strategies/A' component={RenderStrategySite}/> */}
                </div>
            </BrowserRouter>

        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
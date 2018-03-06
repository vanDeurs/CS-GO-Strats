import React, { Component } from 'react';
// import './styles/App.css';
import ReactDOM from 'react-dom';
import { Home } from './Home.js';
import './styles/index.css';
import {RenderMap} from './components/RenderMap'

import { BrowserRouter, Route } from 'react-router-dom';

export class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home}/>
                    {/* <Route path={this.props.mapName} component={()=>RenderMap}/> */}
                    <Route path='/:map' component={RenderMap}/>
                    {/* <Route path='/train' component={RenderMap} /> */}
                </div>
            </BrowserRouter>

        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
import React, { Component } from 'react';
// import './styles/App.css';
import ReactDOM from 'react-dom';
import { Home } from './Home.js';
import { Mapcard } from './components/Mapcard';
import './styles/index.css';

import { BrowserRouter, Route } from 'react-router-dom';

export class App extends Component {
    render(){
        return(
            // <Home>
            //     <Mapcard />    
            // </Home>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/map/train' render={() => <h1>Hello</h1>}/>
                </div>
            </BrowserRouter>

        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
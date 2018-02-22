import React, { Component } from 'react';
import { Mapcard } from './components/Mapcard.js';
import ReactDOM from 'react-dom';
import './styles/App.css';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        map: {
          cache: 'cache',
          mirage: 'mirage',
          inferno: 'inferno',
          nuke: 'nuke',
          cobblestone: 'cobblestone',
          train: 'train',
          overpass: 'overpass',
          dust2: 'dust2',
        }
    }
}
  render() {
    return <div className="container"> <Mapcard mapName={this.state.map.mirage}/> </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

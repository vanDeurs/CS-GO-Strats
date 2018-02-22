import React, { Component } from 'react';
import {mapCard} from './components/mapCard';
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
    return (
        <div className="container">
          <mapCard 
            mapName={this.state.map.mirage} 
          />
  
          {/* <h1>Testing testing Helloooooo</h1> */}
        </div>
    );
  }
}

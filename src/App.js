import React, { Component } from 'react';
import '../styles/App.css';
import {mapCard} from './components/mapCard';

export class App extends Component {
  render() {
    return (
        <div className="container">
          <mapCard />
          {/* <h1>Testing testing Helloooooo</h1> */}
        </div>
    );
  }
}

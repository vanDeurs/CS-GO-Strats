import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class Overpassc extends Component {

  render() {
      return(
        <h1>Hello there, from {this.props.map}!</h1>
      )
  }
}
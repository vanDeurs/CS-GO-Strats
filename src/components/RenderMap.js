import React, { Component } from 'react';

import {Trainc} from '../containers/Trainc'
import Home from '../Home'

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Mapcard } from './Mapcard';
import {App} from '../index';

export class RenderMap extends Component {

  render() {
      if (/train/.test(window.location.href)){
          return(
              <Trainc map="train" />
        )  
      } else if (/cache/.test(window.location.href)){
            return(
                <Trainc map="cache" />
            )
      } else if (/overpass/.test(window.location.href)){
            return(
                <div>
                    <h1>Hello there, from overpass!</h1>
                </div>
            )
        } else if (/mirage/.test(window.location.href)){
            return(
                <div>
                    <h1>Hello there, from mirage!</h1>
                </div>
            )
      } else if (/nuke/.test(window.location.href)){
            return(
                <div>
                    <h1>Hello there, from nuke!</h1>
                </div>
            )
        } else if (/cobblestone/.test(window.location.href)){
            return(
                <div>
                    <h1>Hello there, from cobblestone!</h1>
                </div>
            )
      } else if (/inferno/.test(window.location.href)){
            return(
                <div>
                    <h1>Hello there, from inferno!</h1>
                </div>
            )
        } else if (/dust2/.test(window.location.href)){
            return(
                <div>
                    <h1>Hello there, from dust2!</h1>
                </div>
            )
      }
  }
}


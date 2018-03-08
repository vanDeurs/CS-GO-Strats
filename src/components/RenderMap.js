import React, { Component } from 'react';

// Containers
import {Trainc} from '../containers/Trainc';
import {Miragec} from '../containers/Miragec';
import {Infernoc} from '../containers/Infernoc';
import {Nukec} from '../containers/Nukec';
import {Cobblestonec} from '../containers/Cobblestonec';
import {Overpassc} from '../containers/Overpassc';
import {Dust2c} from '../containers/Dust2c';
import {Cachec} from '../containers/Cachec';

// Images
import miragehd from '../images/hd/miragehd.jpg';
import trainhd from '../images/hd/trainhd.jpg';
import infernohd from '../images/hd/infernohd.jpg';
import nukehd from '../images/hd/nukehd.jpg';
import cachehd from '../images/hd/cachehd.jpg';
import overpasshd from '../images/hd/overpasshd.png';
import cobblestonehd from '../images/hd/cobblestonehd.jpg';
import dust2hd from '../images/hd/dust2hd.png';



import {MiddlePicker} from '../containers/MiddlePicker';


import Home from '../Home'

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Mapcard } from './Mapcard';
import {App} from '../index';

export class RenderMap extends Component {

  render() {
      if (/train/.test(window.location.href)){
          return(
              <MiddlePicker 
              backgroundImage = {trainhd}
              //links={dust2}
              />
        )  
      } else if (/cache/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {cachehd}
                //links={dust2}
                />
            )
      } else if (/overpass/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {overpasshd}
                //links={dust2}
                />
            )
        } else if (/mirage/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {miragehd}
                //links={dust2}
                />
            )
      } else if (/nuke/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {nukehd}
                //links={dust2}
                />
            )
        } else if (/cobblestone/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {cobblestonehd}
                //links={dust2}
                />
            )
      } else if (/inferno/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {infernohd}
                //links={dust2}
                />
            )
        } else if (/dust2/.test(window.location.href)){
            return(
                <MiddlePicker 
                backgroundImage = {dust2hd}
                //links={dust2}
                />
            )
      }
  }
}


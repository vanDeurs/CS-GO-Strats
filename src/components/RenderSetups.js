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

import index from '../index';

import {MiddlePicker} from '../containers/MiddlePicker';


import Home from '../Home'

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Mapcard } from './mapCard';
import {App} from '../index';
import { BrowserRouter, Route } from 'react-router-dom';

// Stateless Component Function
// Checks if the pathName, which is the url, contains the map/strategi
export const RenderSetups = ({location}) => {
    const pathName = location.pathname;
    
    console.log(pathName)
    if (pathName == '/train/setups'){
        return(
            <h1>Hello train setups</h1>
        )  
      } else if (pathName == '/mirage/setups'){
        return(
            <h1>Hello mirage setups</h1>
        )
    } else if (pathName == '/inferno/setups'){
        return(
            <h1>Hello inferno setups</h1>
        )
    } else if (pathName == '/overpass/setups'){
        return(
            <h1>Hello overpass setups</h1>
        )
    } else if (pathName == '/nuke/setups'){
        return(
            <h1>Hello nuke setups</h1>
        )
    } else if (pathName == '/dust2/setups'){
        return(
            <h1>Hello dust2 setups</h1>
        )
    } else if (pathName == '/cobblestone/setups'){
        return(
            <h1>Hello cobblestone setups</h1>
        )
    } else if (pathName == '/cache/setups'){
        return(
            <h1>Hello cache setups</h1>
        )
    } else {
          return (
              <h1>Oops, this setup page does not exist.</h1>
          )
      }
}


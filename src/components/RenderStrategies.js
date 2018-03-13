import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Containers
import {Trainc}         from '../containers/Trainc';
import {Miragec}        from '../containers/Miragec';
import {Infernoc}       from '../containers/Infernoc';
import {Nukec}          from '../containers/Nukec';
import {Cobblestonec}   from '../containers/Cobblestonec';
import {Overpassc}      from '../containers/Overpassc';
import {Dust2c}         from '../containers/Dust2c';
import {Cachec}         from '../containers/Cachec';

// Images
import miragehd         from '../images/hd/miragehd.jpg';
import trainhd          from '../images/hd/trainhd.jpg';
import infernohd        from '../images/hd/infernohd.jpg';
import nukehd           from '../images/hd/nukehd.jpg';
import cachehd          from '../images/hd/cachehd.jpg';
import overpasshd       from '../images/hd/overpasshd.png';
import cobblestonehd    from '../images/hd/cobblestonehd.jpg';
import dust2hd          from '../images/hd/dust2hd.png';

import index            from '../index';

import {MiddlePicker}   from '../containers/MiddlePicker';

import Home             from '../Home'

import ReactDOM         from 'react-dom';
import { Link }         from 'react-router-dom';
import {App}            from '../index';

// Stateless Component Function
// Checks if the url contains the map name
export const RenderStrategies = ({location}) => {
    const pathName = location.pathname;
    
    console.log(pathName)
    if (pathName == '/train/strategies'){
        return(
            <h1>Hello train strategies</h1>
        )  
      } else if (pathName == '/mirage/strategies'){
        return(
            <h1>Hello mirage strategies</h1>
        )
    } else if (pathName == '/inferno/strategies'){
        return(
            <h1>Hello inferno strategies</h1>
        )
    } else if (pathName == '/overpass/strategies'){
        return(
            <h1>Hello overpass strategies</h1>
        )
    } else if (pathName == '/nuke/strategies'){
        return(
            <h1>Hello nuke strategies</h1>
        )
    } else if (pathName == '/dust2/strategies'){
        return(
            <h1>Hello dust2 strategies</h1>
        )
    } else if (pathName == '/cobblestone/strategies'){
        return(
            <h1>Hello cobblestone strategies</h1>
        )
    } else if (pathName == '/cache/strategies'){
        return(
            <h1>Hello cache strategies</h1>
        )
    } else {
          return (
              <h1>Oops, this strategi page does not exist.</h1>
          )
      }
}


import React, { Component }     from 'react';
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
// Checks if the url contains the map name, and then returns 
// the Middlepicker component with the prop background that is the current map.
export const RenderMap = ({location}) => {
    const pathName = location.pathname;
    let maps = ['train', 'cache', 'overpass', 'mirage', 'nuke', 'cobblestone', 'inferno', 'dust2'];
    let mapImages = [trainhd, cachehd, overpasshd, miragehd, nukehd, cobblehd, infernohd, dust2hd];

    for(let i = 0; i < maps.length; i++ ){
        if (pathName == '/' + maps[i]){
            return (
                <MiddlePicker 
                backgroundImage = {mapImages[i]}
                linkStrategies={ maps[i] + '/strategies'}
                linkSetups={ maps[i] + '/setups'}
                />
            )
        }
    }
    
    console.log(pathName)
    if (pathName == '/train'){
        return(
            <MiddlePicker 
            backgroundImage = {trainhd}
            linkStrategies={'train/strategies'}
            linkSetups={'train/setups'}
            />
        )  
      } else if (pathName == '/cache'){
            return(
                <MiddlePicker 
                backgroundImage = {cachehd}
                linkStrategies={'cache/strategies'}
                linkSetups={'cache/setups'}
                />
            )
      } else if (pathName == '/overpass'){
            return(
                <MiddlePicker 
                backgroundImage = {overpasshd}
                linkStrategies={'overpass/strategies'}
                linkSetups={'overpass/setups'}
                />
            )
        } else if (pathName == '/mirage'){
            return(
                <MiddlePicker 
                backgroundImage = {miragehd}
                linkStrategies={'mirage/strategies'}
                linkSetups={'mirage/setups'}
                />
            )
      } else if (pathName == '/nuke'){
            return(
                <MiddlePicker 
                backgroundImage = {nukehd}
                linkStrategies={'nuke/strategies'}
                linkSetups={'nuke/setups'}
                />
            )
        } else if (pathName == '/cobblestone'){
            return(
                <MiddlePicker 
                backgroundImage = {cobblestonehd}
                linkStrategies={'cobblestone/strategies'}
                linkSetups={'cobblestone/setups'}
                />
            )
      } else if (pathName == '/inferno'){
            return(
                <MiddlePicker 
                backgroundImage = {infernohd}
                linkStrategies={'inferno/strategies'}
                linkSetups={'inferno/setups'}
                />
            )
        } else if (pathName == '/dust2'){
            return(
                <MiddlePicker 
                backgroundImage = {dust2hd}
                linkStrategies={'dust2/strategies'}
                linkSetups={'dust2/setups'}
                />
            )
      } else {
          return (
              <h1>Oops, this page does not exist.</h1>
          )
      }
}


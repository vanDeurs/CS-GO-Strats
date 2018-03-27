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
import {StrategySitePicker} from '../containers/StrategySitePicker'



import Home             from '../Home'

import ReactDOM         from 'react-dom';
import { Link }         from 'react-router-dom';
import {App}            from '../index';


// Stateless Component Function
// Checks if the url contains the map name, and then returns 
// the Middlepicker component with the prop background that is the current map.
export const RenderStrategySite = ({location}) => {
    const pathName = location.pathname;
    let maps = ['train', 'cache', 'overpass', 'mirage', 'nuke', 'cobblestone', 'inferno', 'dust2'];
    let mapImages = [trainhd, cachehd, overpasshd, miragehd, nukehd, cobblestonehd, infernohd, dust2hd];
    let site = ['A', 'B', 'Middle']

    for(let i = 0; i < maps.length; i++ ){
        console.log(i)
        if (pathName == '/' + maps[i] +'/strategies' + '/' + site[0] || site[1] || site[2]){ 
            return (
                <h1>Hello, strategy on {maps[i]} (BUG)</h1>
            )
        }
    }
}
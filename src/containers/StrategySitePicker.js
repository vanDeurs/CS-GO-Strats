import React, { Component } from 'react';
// import { Mapcard } from './components/Mapcard';
import ReactDOM from 'react-dom';
// import {RenderMap} from './components/RenderMap'
import App from '../index';
// Images
import '../styles/MiddlePicker.css';
import miragehd from '../images/hd/miragehd.jpg';

import { Link } from 'react-router-dom';


export class StrategySitePicker extends Component {

    render() {
        let background = this.props.backgroundImage

        return ( 
            <div className="middleContainer" style={{backgroundImage: `url(${background})`}}>
                <div className="innerContainer">
                    <Link to={this.props.linkStratA} className="strategiButton"><h1 className="buttonText">A site</h1></Link>
                    <Link to={this.props.linkStratB} className="setupButton"><h1 className="buttonText">B site</h1></Link>
                    <Link to={this.props.linkStratMiddle} className="setupButton"><h1 className="buttonText">Middle</h1></Link>
                </div>
            </div>
        );
    }
}

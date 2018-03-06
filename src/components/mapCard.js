import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Mapcard.css';
import { Link } from 'react-router-dom';

export class Mapcard extends React.Component {

    render(){

        let backgroundImage = this.props.src;

        return (
            <div 
                className="cardContainer"
                style={{backgroundImage: `url(${backgroundImage})`}}
                >
                <div className="overlayContainer">
                    <Link to={this.props.mapName} id="mapName">{this.props.mapName}</Link>
                </div>
            </div>
        );
    }
}

// mapCard.propTypes = {
//     mapName: React.PropTypes.string
//   };

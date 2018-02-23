import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Mapcard.css';

export class Mapcard extends React.Component {

    render(){

        let backgroundImage = this.props.src

        return (
            <div 
                className="cardContainer"
                style={{backgroundImage: `url(${backgroundImage})`}}
                >
                <div className="overlayContainer">
                    <h1 id="mapName">{this.props.mapName}</h1>
                </div>
            </div>
        );
    }
}

// mapCard.propTypes = {
//     mapName: React.PropTypes.string
//   };

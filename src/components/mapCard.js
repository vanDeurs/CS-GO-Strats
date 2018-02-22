import React, { Component } from 'react';
// import '../styles/App.css';
import '../styles/Mapcard.css';

export class Mapcard extends React.Component {

    render(){

        let backgroundImage = this.props.src

        return (
            <div 
                className="cardContainer"
                style={{backgroundImage: backgroundImage}}
                >
                <h1>{this.props.mapName}</h1>
            </div>
        );
    }
}

// mapCard.propTypes = {
//     mapName: React.PropTypes.string
//   };

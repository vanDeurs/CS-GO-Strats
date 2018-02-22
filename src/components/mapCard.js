import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../styles/mapCard.css';

export class mapCard extends React.Component {

    render(){
        return(
            <div className="wrapper">
                <h1>{this.props.mapName}></h1>
            </div>
        );
    }
}

// mapCard.propTypes = {
//     mapName: React.PropTypes.string
//   };

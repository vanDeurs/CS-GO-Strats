import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ReactDOM         from 'react-dom';
import {App}            from '../index';
import '../styles/Strategycard.css';

export class StrategyCard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    }

    render(){

        return(
            <div className="strategyCardContainer">
                <h1>{this.props.mapName + ' ' + this.props.strategyName}</h1>
                <h2>{this.props.strategySummary}</h2>
            </div>
        )
    }
}
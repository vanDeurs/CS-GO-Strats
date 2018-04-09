import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ReactDOM         from 'react-dom';
import {App}            from '../index';
import '../styles/Toptable.css';

export class TopTable extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    }

    render(){

        return(
            <div className="tableContainer">
                <h1>{this.props.currentMap}</h1>
            </div>
        )
    }
}
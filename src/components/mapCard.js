import React, { Component } from 'react';

export class Mapcard extends React.Component {

    render(){
        return <h1>{this.props.mapName}</h1>
            // <div style={{height: 200, width: 100, background: '#fff'}}>
            //     <h1>{this.props.mapName}></h1>
            //     {/* <h1>Hellooo</h1> */}
            // </div>
    }
}

// mapCard.propTypes = {
//     mapName: React.PropTypes.string
//   };

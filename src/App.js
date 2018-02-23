import React, { Component } from 'react';
import { Mapcard } from './components/Mapcard';
import ReactDOM from 'react-dom';
import './styles/App.css';
// Images
import cache from './images/cache.jpg';
import mirage from './images/mirage.jpg';
import inferno from './images/inferno.jpg';
import nuke from './images/nuke.jpg';
import train from './images/train.jpg';
import dust2 from './images/dust2.jpg';
import cobble from './images/cobble.jpg';
import overpass from './images/overpass.jpg';


export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
}

  render() {

    let maps = ['train', 'cache', 'overpass', 'mirage', 'nuke', 'cobblestone', 'inferno', 'dust2'];
    let mapImages = [train, cache, overpass, mirage, nuke, cobble, inferno, dust2];

    let renderMapCards = () => {
      return maps
          .map((map, index) => {
              return <Mapcard mapName={map} src={mapImages[index]} key={index}/>
          })
  }

    return ( 
      <div className="container"> 
        {renderMapCards()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

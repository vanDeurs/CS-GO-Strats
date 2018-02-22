import React, { Component } from 'react';
import { Mapcard } from './components/Mapcard';
import ReactDOM from 'react-dom';
import './styles/App.css';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
}

  render() {

    let maps = ['train', 'cache', 'overpass', 'mirage', 'nuke', 'cobblestone', 'inferno', 'dust2'];

    let renderMapCards = () => {
      return maps
          .map((map, index) => {
              return <Mapcard mapName={map} src="https://files.gamebanana.com/img/ss/maps/530-90_55a865520dd10.jpg"/>
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

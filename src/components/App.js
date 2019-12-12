import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCardContainer from '../containers/HogCardContainer';

class App extends Component {

  // state = { hogsList: hogs }


  render() {
    return (
      <div className="App">
        < Nav />
        <HogCardContainer hogList={hogs} />
      </div>
    )
  }
}

export default App;

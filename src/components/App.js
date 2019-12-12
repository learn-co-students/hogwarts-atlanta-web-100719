import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCardContainer from '../containers/HogCardContainer';

class App extends Component {

  state = {
    hogsList: hogs,
    greasedOnly: false
  }

  compareNames = (a, b) => {
    const hogA = a.name.toUpperCase();
    const hogB = b.name.toUpperCase();

    let comparison = 0;
    if (hogA > hogB) {
      comparison = 1;
    } else if (hogA < hogB) {
      comparison = -1;
    }
    return comparison;
  }

  handleNameClick = () => {
    this.setState({ hogsList: this.getHogs().sort(this.compareNames) })
  }

  handleWeightClick = () => {
    this.setState({
      hogsList: this.getHogs().sort((a, b) => a.weight - b.weight)
    })
  }

  getHogs = () => this.state.greasedOnly ? this.filteredHogs() : hogs

  filteredHogs = () => hogs.filter(hog => hog.greased === true)

  handleGreasedClick = () => {
    this.setState((previousState) => ({
      hogsList: previousState.greasedOnly ? hogs : this.filteredHogs(),
      greasedOnly: !previousState.greasedOnly
    }))
  }

  render() {
    return (
      <div className="App">
        <Nav handleNameClick={this.handleNameClick} handleWeightClick={this.handleWeightClick} handleGreasedClick={this.handleGreasedClick} greasedOnly={this.state.greasedOnly} />
        <HogCardContainer hogList={this.state.hogsList} />
      </div>
    )
  }
}

export default App;

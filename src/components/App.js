import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCardContainer from '../containers/HogCardContainer';

class App extends Component {

  state = {
    greasedOnly: false,
    sortedByName: false,
    sortedByWeight: false
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
    this.setState({
      sortedByWeight: false,
      sortedByName: !this.state.sortedByName
    })
  }

  handleWeightClick = () => {
    this.setState({
      sortedByName: false,
      sortedByWeight: !this.state.sortedByWeight
    })
  }

  handleGreasedClick = () => {
    this.setState((previousState) => ({
      // hogsList: previousState.greasedOnly ? hogs : this.filteredHogs(),
      greasedOnly: !previousState.greasedOnly
    }))
  }

  getHogs = () => {
    let filtered = this.state.greasedOnly ? this.filteredHogs() : [...hogs]
    if (this.state.sortedByName)
      return filtered.sort(this.compareNames)
    else if (this.state.sortedByWeight)
      return filtered.sort((a, b) => a.weight - b.weight)
    else
      return filtered
  }

  filteredHogs = () => hogs.filter(hog => hog.greased === true)

  render() {
    return (
      <div className="App">
        <Nav handleNameClick={this.handleNameClick} handleWeightClick={this.handleWeightClick} handleGreasedClick={this.handleGreasedClick} greasedOnly={this.state.greasedOnly} sortedByName={this.state.sortedByName} sortedByWeight={this.state.sortedByWeight} />
        <HogCardContainer hogList={this.getHogs()} />
      </div>
    )
  }
}

export default App;

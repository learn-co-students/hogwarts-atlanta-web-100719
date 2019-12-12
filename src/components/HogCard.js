import React from 'react'
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/mudblood.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'

class HogCard extends React.Component {
    state = { showDetails: false }

    convertName = (name) => {
        return name.toLowerCase().replace(/ /g, "_")
    }

    handleClick = () => {
        this.setState((previousState) => {
            return { showDetails: !previousState.showDetails }
        })
    }

    images = () => {
        return {
            mudblood, bay_of_pigs, cherub, galaxy_note, leggo_my_eggo, augustus_gloop, piggy_smalls, porkchop, rainbowdash, sobriety, the_prosciutto_concern, trouble, truffleshuffle
        }
    }

    hogDetails = (hog) => {
        return <div>
            <p>Specialty:{hog.specialty}</p>
            <p>Greased?:{hog.greased ? "Yes" : "No"}</p>
            <p>Weight:{hog.weight}</p>
            <p>Highest Medal Achieved:{hog["highest medal achieved"]}</p>
        </div>
    }

    render() {
        let hog = this.props.hog
        return (<div className="ui eight wide column">
            <img src={this.images()[this.convertName(hog.name)]} />
            <p>Name: {hog.name}</p>
            <button onClick={this.handleClick}>{this.state.showDetails ? "Hide Details " : "Show Details"}</button>
            {this.state.showDetails ? this.hogDetails(hog) : null}

        </div >)
    }
}

export default HogCard
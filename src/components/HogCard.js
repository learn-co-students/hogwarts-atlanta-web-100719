import React from 'react'

// import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
// import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
// import cherub from '../hog-imgs/cherub.jpg'
// import galaxy_note from '../hog-imgs/galaxy_note.jpg'
// import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
// import mudblood from '../hog-imgs/mudblood.jpg'
// import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
// import porkchop from '../hog-imgs/porkchop.jpg'
// import rainbowdash from '../hog-imgs/rainbowdash.jpg'
// import sobriety from '../hog-imgs/sobriety.jpg'
// import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
// import trouble from '../hog-imgs/trouble.jpg'
// import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'

class HogCard extends React.Component {
    state = { showDetails: false }

    slug = (name) => {
        return name.toLowerCase().replace(/ /g, "_")
    }

    handleClick = () => {
        this.setState((previousState) => {
            return { showDetails: !previousState.showDetails }
        })
    }

    // images = () => {
    //     return {
    //         mudblood, bay_of_pigs, cherub, galaxy_note, leggo_my_eggo, augustus_gloop, piggy_smalls, porkchop, rainbowdash, sobriety, the_prosciutto_concern, trouble, truffleshuffle
    //     }
    // }

    hogDetails = (hog) => {
        return <div className="description">
            <p>Specialty:{hog.specialty}</p>
            <p>Greased?:{hog.greased ? "Yes" : "No"}</p>
            <p><i className="balance scale icon"></i>{hog.weight} lbs</p>
            <span><i className="trophy icon"></i>{hog["highest medal achieved"]}</span>
        </div>
    }

    render() {
        let hog = this.props.hog
        return (
            <div className="ui four wide column">
                <div onClick={this.handleClick} className="ui card">
                    <div className="image">
                        <img src={require(`../hog-imgs/${this.slug(hog.name)}.jpg`)} alt={hog.name} />
                        {/* <img src={this.images()[this.slug(hog.name)]} alt={hog.name} /> */}
                    </div>
                    <div className="content">
                        <div className="header">{hog.name}</div>
                        {this.state.showDetails ? this.hogDetails(hog) : null}
                    </div>
                </div >
            </div>
        )
    }
}

export default HogCard
import React from 'react'
import HogCard from '../components/HogCard'

class HogCardContainer extends React.Component {
    render() {
        return (<div className="ui grid container">
            {this.props.hogList.map(hog => {
                return <HogCard key={hog.name} hog={hog} />
            })}

        </div >)
    }
}

export default HogCardContainer
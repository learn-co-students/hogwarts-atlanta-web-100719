import React from 'react'
import HogCard from '../components/HogCard'
import { Card } from 'semantic-ui-react'

const HogCardContainer = (props) => {
    return (
        <Card.Group centered stackable>
            {
                props.hogList.map(hog => <HogCard key={hog.name} hog={hog} />)
            }
        </Card.Group >
    )
}

export default HogCardContainer
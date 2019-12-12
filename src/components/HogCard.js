import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

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

    hogDetails = (hog) => {
        return (
            <Card.Content extra textAlign='center'>
                <Card.Description>Specialty:{hog.specialty}</Card.Description>
                <Card.Description>Greased?:{hog.greased ? "Yes" : "No"}</Card.Description>
                <Card.Description><Icon className="balance scale icon"></Icon>{hog.weight} lbs</Card.Description>
                <Card.Description>
                    <Icon className="trophy icon" />
                    <span>{hog["highest medal achieved"]}</span>
                </Card.Description>
            </Card.Content>
        )
    }

    render() {
        let hog = this.props.hog
        return (
            <Card onClick={this.handleClick}>
                <Image fluid src={require(`../hog-imgs/${this.slug(hog.name)}.jpg`)} alt={hog.name} />
                <Card.Content>
                    <Card.Header>{hog.name}</Card.Header>
                </Card.Content>
                {this.state.showDetails ? this.hogDetails(hog) : null}
            </Card>
        )
    }
}

export default HogCard
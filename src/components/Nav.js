import piggy from '../porco.png'
import React from 'react'
import { Button, Divider, Icon } from 'semantic-ui-react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<div className="content">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>
			<Divider />
			<div>
				<Button icon primary labelPosition='right' onClick={props.handleNameClick}> Sort By Name {props.sortedByName ? <Icon className="toggle on "></Icon> : <Icon className="toggle off"></Icon>}</Button>
				<Button icon primary labelPosition='right' onClick={props.handleWeightClick}> Sort By Weight {props.sortedByWeight ? <Icon className="toggle on"></Icon> : <Icon className="toggle off"></Icon>}</Button>
				<Button icon secondary labelPosition='right' onClick={props.handleGreasedClick}>Greased Only {props.greasedOnly ? <Icon className="toggle on"></Icon> : <Icon className="toggle off"></Icon>}</Button>
			</div>
		</div>
	)
}

export default Nav

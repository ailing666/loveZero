import React, { Component } from 'react'

export default class NavBar extends Component {
	render() {
		console.log(this.props)
		// return <div>{this.props.children}</div>
		return (
			<div>
				<div className="left">{this.props.children[0]}</div>
				<div className="center">{this.props.children[1]}</div>
				<div className="right">{this.props.children[2]}</div>
			</div>
		)
	}
}

import React, { Component } from 'react'
import MainItem from './MainItem'
import MainList from './MainList'
export class Main extends Component {
	render() {
		return (
			<>
				<div>Main</div>
				<MainItem />
				<MainList />
			</>
		)
	}
}

export default Main

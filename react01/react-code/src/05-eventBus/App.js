import React, { Component } from 'react'
import Home from './05-eventBus/Home'
import eventBus from './05-eventBus/utils/event-bus'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			age: 1,
		}
	}
	componentDidMount() {
		eventBus.on('prev', this.prevClick, this)
		eventBus.on('next', this.nextClick, this)
	}
	prevClick(info) {
		console.log('app中监听到nextClick', info)
	}

	nextClick({ name, age }) {
		console.log('app中监听到prevClick', name, age)
		this.setState({ name, age })
	}

	componentWillUnmount() {
		eventBus.off('prev', this.prevClick)
		eventBus.off('next', this.nextClick)
	}

	render() {
		return (
			<div>
				{this.state.name}---{this.state.age}
				<Home></Home>
			</div>
		)
	}
}

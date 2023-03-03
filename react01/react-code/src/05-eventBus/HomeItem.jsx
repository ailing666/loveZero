import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export default class HomeItem extends Component {
	nextClick() {
		eventBus.emit('next', { name: 'loveZero', age: 99 })
	}

	prevClick() {
		eventBus.emit('prev', 1)
	}

	render() {
		return (
			<div>
				<button onClick={e => this.prevClick()}>上一个</button>
				<button onClick={e => this.nextClick()}>下一个</button>
			</div>
		)
	}
}

import React, { Component } from 'react'
import Son from './02_组件通信/子传父/Son'
export class App extends Component {
	constructor() {
		super()
		this.state = {
			counter: 0,
		}
	}
	// 定义一个函数
	changeCounter(count) {
		this.setState({ counter: this.state.counter + count })
	}

	render() {
		const { counter } = this.state

		return (
			<div>
				<h2>当前计数: {counter}</h2>
				<Son addClick={count => this.changeCounter(count)} />
			</div>
		)
	}
}

export default App

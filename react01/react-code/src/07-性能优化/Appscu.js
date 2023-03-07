import React, { Component } from 'react'
import Home from './07-性能优化/Home'
import User from './07-性能优化/User'

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'Hello World',
			count: 0,
		}
	}
	shouldComponentUpdate(nextProps, newState) {
		if (this.state.message !== newState.message || this.state.count !== newState.count) {
			return true
		}
		return false
	}
	changeMsg() {
		this.setState({
			message: '你好',
		})
	}
	changeCount() {
		this.setState({
			count: this.state.count + 1,
		})
	}
	render() {
		console.log('App render')
		const { message, count } = this.state

		return (
			<div>
				<button onClick={e => this.changeMsg()}>改变message</button>
				<button onClick={e => this.changeCount()}>count</button>
				<Home message={message}></Home>
				<User count={count}></User>
			</div>
		)
	}
}

export default App

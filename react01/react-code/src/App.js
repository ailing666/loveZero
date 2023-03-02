import React, { Component } from 'react'
import Son from './02_组件通信/案例/index'
export class App extends Component {
	constructor() {
		super()
		this.state = {
			list: ['aaa', 'bbb', 'ccc'],
			tabIndex: 0,
		}
	}
	tabClick = index => {
		this.setState({
			tabIndex: index,
		})
	}
	render() {
		return (
			<div>
				<Son list={this.state.list} tabClick={this.tabClick} />
				<h2>{this.state.list[this.state.tabIndex]}</h2>
			</div>
		)
	}
}

export default App

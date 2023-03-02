import React, { Component } from 'react'
import Son from './03-插槽/作用域插槽/index'
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
	// 根据不同值渲染不同的元素
	getSlot(item) {
		if (item === 'aaa') {
			return <span>{item}</span>
		} else if (item === 'bbb') {
			return <button>{item}</button>
		} else {
			return <i>{item}</i>
		}
	}
	render() {
		return (
			<div>
				<Son
					list={this.state.list}
					tabClick={this.tabClick}
					itemSlot={item => this.getSlot(item)}
				/>
				<h2>{this.state.list[this.state.tabIndex]}</h2>
			</div>
		)
	}
}

export default App

import React, { Component } from 'react'
import NavBar from './03-插槽/NavBar'
export class App extends Component {
	render() {
		return (
			<div>
				<NavBar>
					{/* <div>单个元素</div> */}
					<button>按钮</button>
					<h2>哈哈哈</h2>
					<i>斜体文本</i>
				</NavBar>
			</div>
		)
	}
}

export default App

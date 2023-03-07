import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		// createRef创建ref对象
		this.titleRef = createRef()
		this.titleEl = null
	}

	getNativeDOM() {
		// current拿到dom
		console.log(this.titleRef.current)

		// 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
		console.log(this.titleEl)
	}

	render() {
		return (
			<div>
				<h2 ref={this.titleRef}>你好</h2>
				<h2 ref={el => (this.titleEl = el)}>hello</h2>
				<button onClick={e => this.getNativeDOM()}>获取DOM</button>
			</div>
		)
	}
}

export default App

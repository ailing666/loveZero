import React, { Component } from 'react'

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'Hello World',
		}
	}

	changeText() {
		// 基本使用:传入要更新的数据
		// this.setState({
		// 	message: '你好',
		// })

		// 传入回调函数：可以拿到之前state的值和外部传入的props
		// this.setState((state, props) => {
		// 	console.log(this.state.message, this.props)
		// 	return {
		// 		message: '你好',
		// 	}
		// })

		// 数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码,更新完后调用回调函数
		this.setState({ message: '你好' }, () => {
			console.log('++++++:', this.state.message)
		})
		console.log('------:', this.state.message)
	}

	increment() {}

	render() {
		const { message } = this.state

		return (
			<div>
				<h2>message: {message}</h2>
				<button onClick={e => this.changeText()}>修改文本</button>
			</div>
		)
	}
}

export default App

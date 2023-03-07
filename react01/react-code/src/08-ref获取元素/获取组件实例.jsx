import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorldFun = forwardRef(function (props, ref) {
	return (
		<div>
			<h1 ref={ref}>HelloWorldFun</h1>
			<p>哈哈哈</p>
		</div>
	)
})
// 类组件
class HelloWorld extends PureComponent {
	test(val) {
		console.log('HelloWorld组件test方法', val)
	}

	render() {
		return <h1>Hello World</h1>
	}
}

export class App extends PureComponent {
	constructor() {
		super()

		this.helloRef = createRef()
		this.helloFunRef = createRef()
	}

	getComponent() {
		console.log(this.helloRef.current)
		// 获取组件实例后可以直接调用组件方法
		this.helloRef.current.test('test')

		console.log(this.helloFunRef.current)
	}

	render() {
		return (
			<div>
				<HelloWorld ref={this.helloRef} />
				<HelloWorldFun ref={this.helloFunRef} />
				<button onClick={e => this.getComponent()}>获取组件实例</button>
			</div>
		)
	}
}

export default App

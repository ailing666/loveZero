import React, { PureComponent } from 'react'

// 高阶组件
function hoc(Cpn) {
	class NewCpn extends PureComponent {
		render() {
			return <Cpn name="loveZero" />
		}
	}
	// 返回一个新的组件
	return NewCpn
}

class HelloWorld extends PureComponent {
	render() {
		return <h1>Hello World</h1>
	}
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
	render() {
		return (
			<div>
				<HelloWorldHOC />
			</div>
		)
	}
}

export default App

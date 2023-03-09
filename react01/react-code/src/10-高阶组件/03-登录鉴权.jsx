import React, { PureComponent } from 'react'
import Cart from './10-高阶组件/pages/Cart'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			isLogin: false,
		}
	}

	loginClick() {
		localStorage.setItem('token', '1111')
		this.forceUpdate()
	}

	render() {
		return (
			<div>
				App
				<button onClick={e => this.loginClick()}>登录</button>
				<Cart />
			</div>
		)
	}
}

export default App

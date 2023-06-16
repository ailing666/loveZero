import React, { PureComponent } from 'react'
import Home from './16-redux/02-react中使用/pages/Home'
import store from './16-redux/02-react中使用/store'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			counter: store.getState().counter,
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			const state = store.getState()
			this.setState({ counter: state.counter })
		})
	}
	render() {
		const { counter } = this.state
		return (
			<div>
				<h2>App:{counter}</h2>
				<Home></Home>
			</div>
		)
	}
}

export default App

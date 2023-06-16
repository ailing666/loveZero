import React, { PureComponent } from 'react'
import Home from './16-redux/03-react-redux/pages/Home'
import About from './16-redux/03-react-redux/pages/About'
import store from './16-redux/03-react-redux/store'

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
				<About></About>
			</div>
		)
	}
}

export default App

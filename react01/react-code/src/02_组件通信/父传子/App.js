import React, { Component } from 'react'
import Footer from './02_组件通信/父传子/Footer'
import Main from './02_组件通信/父传子/Main'
import Header from './02_组件通信/父传子/Header'
export class App extends Component {
	render() {
		return (
			<>
				<div>App</div>
				<Footer />
				<Main />
				<Header />
			</>
		)
	}
}

export default App

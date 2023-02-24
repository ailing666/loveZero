import React, { Component } from 'react'
import Footer from './02_组件嵌套/components/Footer'
import Main from './02_组件嵌套/components/Main'
import Header from './02_组件嵌套/components/Header'
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

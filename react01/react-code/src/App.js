import React, { Component } from 'react'
import Home from './04-Context/Home'
import ThemeContext from './04-Context/context/HomeContext'
export default class App extends Component {
	constructor() {
		super()

		this.state = {
			info: { name: 'loveZero', age: 18 },
		}
	}
	render() {
		const { info } = this.state
		return (
			// 使用context中的Provider，传递值。名称只能是value
			<ThemeContext.Provider value={info}>
				<Home>App</Home>
			</ThemeContext.Provider>
		)
	}
}

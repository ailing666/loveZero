import React, { Component } from 'react'
import Home from './04-Context/Home'
import ThemeContext from './04-Context/context/HomeContext'
import Theme from './04-Context/Theme'
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
			<div>
				{/* // 使用context中的Provider，传递值。名称只能是value */}
				<ThemeContext.Provider value={info}>
					<Home>App</Home>
				</ThemeContext.Provider>
				<Theme></Theme>
			</div>
		)
	}
}

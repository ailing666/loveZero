import React, { Component } from 'react'
import ThemeContext from './context/HomeContext'

export default class HomeItem extends Component {
	render() {
		return (
			// 通过 Consumer 获取传递的值
			<ThemeContext.Consumer>
				{value => {
					return (
						<h2>
							HomeItem---{value.name}---{value.age}
						</h2>
					)
				}}
			</ThemeContext.Consumer>
		)
	}
}

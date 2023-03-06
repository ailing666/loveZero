import React, { Component } from 'react'
import ThemeContext from './context/HomeContext'
export default class HomeUser extends Component {
	render() {
		const { name, age } = this.context
		return (
			<div>
				<h2>
					HomeUser---{name}---{age}
				</h2>
			</div>
		)
	}
}
// 设置 contextType ，
HomeUser.contextType = ThemeContext

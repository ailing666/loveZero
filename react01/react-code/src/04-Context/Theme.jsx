import React, { Component } from 'react'
import ThemeContext from './context/HomeContext'
export default class Theme extends Component {
	render() {
		const { color, size } = this.context
		return (
			<div>
				<h2>
					Theme---{color}---{size}
				</h2>
			</div>
		)
	}
}
// 设置 contextType
Theme.contextType = ThemeContext

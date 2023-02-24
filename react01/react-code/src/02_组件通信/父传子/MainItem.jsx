import React, { Component } from 'react'

export class MainItem extends Component {
	render() {
		// props可以获取父组件传递的值
		const { keywordsList } = this.props
		return (
			<>
				<h2>MainItem</h2>
				<ul>
					{keywordsList.map(item => {
						return <li key={item.acm}>{item.words}</li>
					})}
				</ul>
			</>
		)
	}
}

export default MainItem

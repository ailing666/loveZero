import React, { Component } from 'react'

export class MainList extends Component {
	render() {
		const { recommendList } = this.props

		return (
			<>
				<h2>MainList</h2>
				<ul>
					{recommendList.map(item => {
						return <li key={item.acm}>{item.title}</li>
					})}
				</ul>
			</>
		)
	}
}

export default MainList

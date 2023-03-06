import React, { Component } from 'react'
import './index.css'

export class TabControl extends Component {
	constructor() {
		super()

		this.state = {
			currentIndex: 0,
		}
	}
	changeIndex(index) {
		this.setState({
			currentIndex: index,
		})
		this.props.tabClick(index)
	}

	render() {
		const { list, itemSlot } = this.props

		return (
			<div className="tab-control">
				{list.map((item, index) => {
					return (
						<div
							className={`item ${this.state.currentIndex === index ? 'active' : ''}`}
							key={index}
							onClick={e => this.changeIndex(index)}>
							{/* {item} */}
							{itemSlot(item)}
						</div>
					)
				})}
			</div>
		)
	}
}

export default TabControl

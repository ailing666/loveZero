import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class MainItem extends Component {
	// 定义props类型
	static propTypes = {
		returnCode: PropTypes.string,
		success: PropTypes.bool,
	}
	// props默认值
	static defaultProps = {
		returnCode: 'ok',
		success: true,
	}
	render() {
		// props可以获取父组件传递的值
		const { keywordsList, returnCode } = this.props
		console.log('returnCode', returnCode)
		return (
			<>
				<h2>MainItem</h2>
				<p>{returnCode}</p>
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

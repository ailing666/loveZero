import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
export class About extends PureComponent {
	render() {
		const { counter } = this.props

		return (
			<div>
				<h2>About Page: {counter}</h2>
				<div>
					<button>+1</button>
					<button>+5</button>
					<button>+8</button>
				</div>
			</div>
		)
	}
}
// 将state中需要的数据映射到props中
const mapStateToProps = state => ({
	counter: state.counter,
})

// connect 返回值是一个高阶组件
export default connect(mapStateToProps)(About)

import React, { Component } from 'react'

export default class Home extends Component {
	shouldComponentUpdate(nextProps, newState) {
		if (this.props.message !== nextProps.message) {
			return true
		}
		return false
	}
	render() {
		console.log('Home render')
		return <div>Home:{this.props.message}</div>
	}
}

// import React, { PureComponent } from 'react'

// export default class Home extends PureComponent {
// 	render() {
// 		console.log('Home render')
// 		return <div>Home:{this.props.message}</div>
// 	}
// }

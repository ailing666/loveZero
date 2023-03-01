import { Component } from 'react'
class Son extends Component {
	// 卸载 - 组件销毁时候
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}
	render() {
		console.log('render');
		return <div>Son</div>
	}
}

class App extends Component {
	// constructor初始化
	constructor() {
		super()
		console.log('constructor')
	}
	// 挂载 - 在DOM渲染完成后触发
	componentDidMount() {
		console.log('componentDidMount')
	}
	// 更新 - 每次组件渲染都会触发
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	state = {
		isShow: false,
	}
	render() {
		let { isShow } = this.state
		return (
			<>
				<button
					onClick={() => {
						isShow = this.setState({ isShow: !isShow })
					}}>
					按钮
				</button>
				{isShow ? <Son></Son> : null}
			</>
		)
	}
}
export default App

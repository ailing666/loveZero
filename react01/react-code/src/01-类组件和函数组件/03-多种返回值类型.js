import { Component } from 'react'

class HelloA extends Component {
	render() {
		return 'string'
	}
}
class HelloB extends Component {
	render() {
		return null
	}
}
class HelloC extends Component {
	render() {
		return <></>
	}
}

class HelloD extends Component {
	render() {
		return <div>'HelloD'</div>
	}
}
class App extends Component {
	render() {
		return [<HelloA />, <HelloB />, <HelloC />, <HelloD />]
	}
}
export default App

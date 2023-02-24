import React, { Component } from 'react'
import MainItem from './MainItem'
import MainList from './MainList'
import axios from 'axios'

export class Main extends Component {
	constructor() {
		super()
		this.state = {
			keywordsList: [],
			recommendList: [],
		}
	}

	componentDidMount() {
		axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
			this.setState({
				keywordsList: res.data.data.keywords.list,
				recommendList: res.data.data.recommend.list,
			})
		})
	}
	render() {
		const { keywordsList, recommendList } = this.state
		return (
			<>
				<div>Main</div>
				<MainItem keywordsList={keywordsList} />
				<MainList recommendList={recommendList} />
			</>
		)
	}
}

export default Main

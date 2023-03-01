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
			returnCode: '',
			success: false,
		}
	}

	componentDidMount() {
		axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
			console.log('res.data.data', res.data)
			this.setState({
				keywordsList: res.data.data.keywords.list,
				recommendList: res.data.data.recommend.list,
				returnCode: res.data.returnCode,
				success: res.data.success,
			})
		})
	}
	render() {
		const { keywordsList, recommendList, returnCode, success } = this.state
		console.log('returnCode', returnCode)
		return (
			<>
				<div>Main</div>
				<MainItem keywordsList={keywordsList} returnCode={returnCode} success={success} />
				<MainList recommendList={recommendList} />
			</>
		)
	}
}

export default Main

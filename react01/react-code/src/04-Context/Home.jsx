import React, { Component } from 'react'
import HomeItem from './HomeItem'
import HomeUser from './HomeUser'
export default class Home extends Component {
	render() {
		return (
			<div>
				<HomeItem></HomeItem>
				<HomeUser></HomeUser>
			</div>
		)
	}
}

import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
	render() {
		return (
			<div>
				<h2 className={classNames('aaa', { bbb: true, ccc: true })}>嘿嘿嘿</h2>
				<h2 className={classNames({ bbb: true, ccc: false })}>嘻嘻嘻</h2>
			</div>
		)
	}
}

export default App

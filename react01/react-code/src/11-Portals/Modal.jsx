import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends PureComponent {
	render() {
		// 将元素挂载到 modal 上
		return createPortal(this.props.children, document.querySelector('#modal'))
	}
}

export default Modal

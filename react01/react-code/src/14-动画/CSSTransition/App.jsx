import React, { createRef, PureComponent } from 'react'
// 导入 CSSTransition
import { CSSTransition } from "react-transition-group"
import "./style.css"

export class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }

    this.sectionRef = createRef()
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={e => this.setState({isShow: !isShow})}>切换</button>
        <CSSTransition 
          // 需要动画的元素的ref
          nodeRef={this.sectionRef}
          // 触发动画的进入和离开状态
          in={isShow} 
          // 动画结束都是否销毁元素
          unmountOnExit={true} 
          // 绑定动画的类名
          classNames="abc"
          // 控制什么时候移除类名，最好与css中的持续时间保持一致
          timeout={2000}
          // 是否初次出现就执行动画
          appear
          // 各周期的回调函数
          onEnter={e => console.log("开始进入动画")}
          onEntering={e => console.log("执行进入动画")}
          onEntered={e => console.log("执行进入结束")}
          onExit={e => console.log("开始离开动画")}
          onExiting={e => console.log("执行离开动画")}
          onExited={e => console.log("执行离开结束")}
        >
          <div className='section' ref={this.sectionRef}>
            <h2>哈哈哈</h2>
            <p>我是内容, 哈哈哈</p>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default App
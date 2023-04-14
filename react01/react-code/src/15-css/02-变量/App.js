import React, { PureComponent } from 'react'
import { SectionWrapper } from "./style"

export class App extends PureComponent {

  constructor() {
    super()

    this.state = {
      size: 30,
      color: "yellow"
    }
  }

  render() {
    const { size } = this.state

    return (
      <SectionWrapper size={size}>
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内容, 哈哈哈</p>
        <button onClick={e => this.setState({size: 14})}>修改size</button>
      </SectionWrapper>
    )
  }
}

export default App
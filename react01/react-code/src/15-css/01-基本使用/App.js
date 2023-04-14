import React, { PureComponent } from 'react'
import { AppWrapper } from "./style"

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div className='footer'>
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    )
  }
}

export default App
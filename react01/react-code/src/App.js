import React, { PureComponent, StrictMode } from 'react'
import Home from './13-StrictMode/Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
      </div>
    )
  }
}

export default App
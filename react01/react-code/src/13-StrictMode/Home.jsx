import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount")
  }

  componentDidMount() {
    console.log(this.refs.title)
  }

  render() {
    console.log("Home render")
    return (
      <div>
        <h2 ref="title">Home Title</h2>
      </div>
    )
  }
}

export default Home
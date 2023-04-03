import React, { Component } from 'react'

export default class Q6 extends Component {
  render() {
    return (
      <div>
        <hr />
        <p><b>Q6. Why do we use setState instead of directly mutating this.state?</b></p>
        <p>Ans:  We use setState instead of directly mutating this.state in React to ensure that the component remains in sync with its internal state and to avoid bugs caused by state inconsistencies. Direct mutations can lead to unexpected behavior and can prevent React from triggering a re-render of the component.</p>
      </div>
    )
  }
}

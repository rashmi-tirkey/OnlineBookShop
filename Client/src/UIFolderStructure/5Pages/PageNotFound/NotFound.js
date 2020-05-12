import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div style={{textAlign:"center",margin:"24px",}}>
          <h3>Page not found</h3>
          <p>The link you followed may be broken, or the page may have been removed.</p>
      </div>
    )
  }
}

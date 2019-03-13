import React, { Component } from 'react'

class Display extends Component {
  render() {
    let displayStyle = {
        padding: 15,
        fontSize: '15px',
        fontWeight: 'bold',
        
    }

    return (
      <div style={displayStyle}>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    )
  }
}
export default Display;
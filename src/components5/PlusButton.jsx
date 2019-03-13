import React, { Component } from 'react'

class PlusButton extends Component {
  render() {
    var buttonStyle = {
        fontSize: "1em",
        width: 30,
        height: 30,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold",
        lineHeight: "3px"
    }
    return (
      <button onClick={this.props.clickHandler} style={buttonStyle}>
        +
      </button>
    )
  }
}
export default PlusButton;
import React, { Component } from 'react'
import './App.css';

class Letter extends Component {
  render() {
    var letterSytyle = {
        padding: '10px',
        margin: '10px',
        backgroundColor: this.props.bgcolor,
        color: '#333',
        display: 'inline-block',
        fontFamily: 'monospace',
        fontSize: '32px',
        textAlign: 'center'
    };
    return (
      <div style={letterSytyle}>
        {this.props.children}
      </div>
    )
  }
}
export default Letter;
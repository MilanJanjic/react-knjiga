import React, { Component } from 'react'
import Display from './Display';

class Label extends Component {
  render() {
    let label2Style = {
        display: 'inline-block',
        height: 'auto',
        width: "auto",
        backgroundColor: 'red',
        opacity: '0.5',
        borderRadius: 10,
        margin: 50
    }
    return (
      <div style={label2Style}>
        <Display 
            {...this.props}
        />
      </div>
    )
  }
}
export default Label;
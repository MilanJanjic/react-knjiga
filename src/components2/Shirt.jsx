import React, { Component } from 'react'
import Label from '../components2/Label';
import bgImage from './bgimage.jpg';

class Shirt extends Component {
  render() {
    let shirtStyle = {
        width: 200,
        height: 250,
        borderRadius: '10%',
        backgroundImage: `url(${bgImage})`,
        color: this.props.color
    }
    return (
      <div style={shirtStyle}>
        <Label 
            {...this.props}
        />
      </div>
    )
  }
}
export default Shirt;
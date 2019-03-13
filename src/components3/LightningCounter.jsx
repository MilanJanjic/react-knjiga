import React, { Component } from 'react'

class LightningCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            strikes: 0
        }
        this.timeTrick = this.timeTrick.bind(this);
    }

    componentDidMount() {
        setInterval(this.timeTrick, 1000);
    }

    timeTrick() {
        this.setState({
            strikes: this.state.strikes + 100
        })
    }
  render() {
    var counterStyle = {
        color: '#66FFFF',
        fontSize: 50
    }
    
    var count = this.state.strikes.toLocaleString();

    return (
      <div style={counterStyle}>
        <h1>{count}</h1>
      </div>
    )
  }
}
export default LightningCounter;
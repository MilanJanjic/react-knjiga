import React, { Component } from "react";
import Counter from "./Counter";
import PlusButton from "./PlusButton";

class CounterParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase(e) {
      let currentCount = this.state.count;
      
      if(e.shiftKey) {
          currentCount += 10;
      } else {
          currentCount += 1;
      }

      this.setState({
          count: currentCount
      })
  }
  render() {
    var backgroundStyle = {
        padding: 50,
        backgroundColor: "#FFC53A",
        width: 250, 
        height: 100,
        borderRadius: 10,
        textAlign: "center"
    }

    
    return(
        <div style={backgroundStyle}>
            <Counter display={this.state.count}/>
            <PlusButton clickHandler={this.increase} />
        </div>
    );
  }
}
export default CounterParent;

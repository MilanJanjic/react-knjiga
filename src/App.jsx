import React, { Component } from 'react';
import Letter from './Letter';
import Card from './components/Card';
import Shirt from './components2/Shirt';
//import LightningCounterDisplay from './components3/LightningCounterDisplay';
import Circle from './components4/Circle';
import CounterParent from './components5/CounterParent';
import Colorizer from './components6/Colorizer';

class App extends Component {
  render() {
    var appStyle = {
      margin: '100px 100px'
    };

   // var theCircle = <Circle bgcolor="#F9C240"/>

   // function showCricle() {
   //   var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
    //  var ran = Math.floor(Math.random() * colors.length);

   //   return <Circle bgcolor={colors[ran]}/>
   // }

    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
    var renderData = [];
    for(var i = 0; i < colors.length; i++) {
      var color = colors[i]
      renderData.push(<Circle key={i + color} bgcolor={color}/>)
    }

    return (
      <div style={appStyle}>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">B</Letter>
        <Letter bgcolor="#FFD52E">C</Letter>
        <Letter bgcolor="#49DD9E">D</Letter>
        <Letter bgcolor="#AE99FF">D</Letter>
        <hr />
        <Card color="#FFA737"/>
        <hr />
        <Shirt color="white" num="3.14" size="medium"/>
        <hr />
        {renderData}
        <hr />
        <CounterParent />
        <hr />
        <Colorizer />
      </div>
    );
  }
}

export default App;

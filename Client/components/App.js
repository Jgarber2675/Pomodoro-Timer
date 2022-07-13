import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';

const TIME_25MIN = 1500000;
const TIME_15MIN = 900000;
const TIME_5MIN = 300000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: TIME_25MIN, //25 minutes in ms
      break: false
    }
    this.startTimer = this.startTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  startTimer(time, isBreak){
    console.log('timer started');
    const timerID = setInterval(()=>{
      this.setState({
        time: this.state.time - 1000,
        break: isBreak
      });
      if (this.state.time <= 0) clearInterval(timerID);
      console.log(this.state.time);
    },time);
  }

  handleClick(){
    alert('Handle Click');
  }
  
  //; this.startTimer(1500000,false)
  render() {
    return (
      <div style={{zIndex:-1}}>
        <TimerDisplay time={this.state.time}/>
        <button onClick= {() => {console.log('button clicked');}} style={{zIndex:1}}>25 Minutes</button>
        <button onClick={this.handleClick}>5 Minute Break</button>
        <button onClick={() =>{this.startTimer(TIME_15MIN,true)}}>15 Minute Break</button>
      </div>
    );
  }
}

export default App;
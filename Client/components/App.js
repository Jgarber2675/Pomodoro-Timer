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
    this.skipTimer = this.skipTimer.bind(this);
  }

  startTimer(time, isBreak){
    this.setState({
      time: time,
      break: isBreak
    })
    console.log('timer started');
    const timerID = setInterval(()=>{
      this.setState({
        time: this.state.time - 1000,
        break: isBreak
      });
      if (this.state.time <= 0) clearInterval(timerID);
      console.log(this.state.time);
    },1000);
  }

  skipTimer(){
    this.setState({
      time:0,
      break:false
    });
  }

  handleClick(){
    alert('Handle Click');
  }
  
  //; this.startTimer(1500000,false)
  render() {
    return (
      <>
      <div style={{zIndex:-1}}>
        <TimerDisplay time={this.state.time} breaktime={this.state.break}/>
        <button onClick= {() => this.startTimer(TIME_25MIN,false)} style={{zIndex:1}}>25 Minutes</button>
        <button onClick={() => this.startTimer(TIME_5MIN,true)} style={{zIndex:1}}>5 Minute Break</button>
        <button onClick={() => this.startTimer(TIME_15MIN,true)} style={{zIndex:1}}>15 Minute Break</button>
        <button onClick={() => this.skipTimer()} style={{zIndex:1}}>Skip Remaining Time</button>
      </div>
      </>
    );
  }
}

export default App;
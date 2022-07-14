import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';
import UserLogin from './UserLogin';

const MIN_TO_MS = 60000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 25 * MIN_TO_MS, //25 minutes in ms
      break: false,
      Username:'Username',
      Password:'Password',
      pomodoroTime:25,
      shortBreak:5,
      longBreak:10,
      timerID : undefined
    }

    this.startTimer = this.startTimer.bind(this);
    this.skipTimer = this.skipTimer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);

  }

  startTimer(time, isBreak){
    if (this.state.timerID) clearTimeout(this.state.timerID);
    this.setState({
      time: time,
      break: isBreak
    })
    console.log('timer started');
    const timerID = setInterval(()=>{
      this.setState({
        time: this.state.time - 1000,
        break: isBreak,
        timerID: timerID
      });
      if (this.state.time <= 0) clearInterval(timerID);
      console.log(this.state.time);
    },1000);
  }

  skipTimer(){
    clearTimeout(this.state.timerID);
    this.setState({
      time:0,
      break:false,
      timerID:undefined
    });
  }


  handleChangeUsername(event){
    this.setState({Username: event.target.value});
  }
  handleChangePassword(event){
    this.setState({Password: event.target.value});
  }

  handleSubmit(){
    const str = '../user/?'+  new URLSearchParams({
      username:this.state.Username,
      password:this.state.Password
    });
    
    fetch(str)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pomodoroTime:data.pomodoroTime,
          shortBreak:data.shortBreak,
          longBreak:data.longBreak,
        });
      })
      .catch(err => next(err));
  }
  
  render() {
    return (
      <>
      <div style={{zIndex:-1}}>
        <TimerDisplay time={this.state.time} breaktime={this.state.break}/>
        <button onClick= {() => this.startTimer(this.state.pomodoroTime * MIN_TO_MS,false)} style={{zIndex:1}}>Start Pomodoro</button>
        <button onClick={() => this.startTimer(this.state.shortBreak * MIN_TO_MS,true)} style={{zIndex:1}}>Short Break</button>
        <button onClick={() => this.startTimer(this.state.longBreak * MIN_TO_MS,true)} style={{zIndex:1}}>Long Break</button>
        <button onClick={() => this.skipTimer()} style={{zIndex:1}}>Skip Remaining Time</button>
      </div>
      <div>
        <UserLogin handleChangePassword ={this.handleChangePassword} handleChangeUsername ={this.handleChangeUsername} handleSubmit={this.handleSubmit} Username={this.state.Username} Password={this.state.Password}></UserLogin>
      </div>
      </>
    );
  }
}

export default App;
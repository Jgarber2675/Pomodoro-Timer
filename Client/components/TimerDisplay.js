import React, { Component } from 'react';

class TimerDisplay extends Component {
    constructor(props) {
      super(props);
      this.time = props.time;
      this.minutes = Math.floor(this.props.time /(60000));
      this.seconds = Math.floor((this.props.time % (60000))/1000);
      this.message = 'Click a button to get started';
    }

    componentDidUpdate(){
      this.minutes = Math.floor(this.props.time /(60000));
      this.seconds = Math.floor((this.props.time % (60000))/1000);
  
      this.message = this.props.breaktime? 'Enjoy your break!' : 'Get to work!';
  
    } 

    render() {
      return (
        <div>
          <h2>{this.minutes} Minutes and {this.seconds} Seconds</h2>
          <h4>{this.message}</h4>
        </div>
      );
    }
  }
  
  export default TimerDisplay;
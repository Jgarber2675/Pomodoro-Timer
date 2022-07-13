import React, { Component } from 'react';

class TimerDisplay extends Component {
    constructor(props) {
      super(props);
      this.time = props.time;
    }
    
    render() {
      return (
        <div>
          <h2>{Math.floor((this.time/60000)).toString()} Minutes</h2>
        </div>
      );
    }
  }
  
  export default TimerDisplay;
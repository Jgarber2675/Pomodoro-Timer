import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }
  
  render() {
    return (
      <div>
        <h2>YOLO</h2>
      </div>
    );
  }
}

export default App;
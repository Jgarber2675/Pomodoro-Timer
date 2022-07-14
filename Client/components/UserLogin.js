import React, { Component } from 'react';

class UserLogin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Username: this.props.Username,
        Password: this.props.Password
      }
    }

    render() {
      return (
        <div>
          <h4>Log in</h4>
          <input placeholder={this.state.Username} onChange={this.props.handleChangeUsername}></input>
          <input placeholder={this.state.Password} onChange={this.props.handleChangePassword}></input>
          <button onClick={this.props.handleSubmit}>Submit</button>
        </div>
      );
    }
  }
  
  export default UserLogin;
import React, { Component } from 'react'
import './App.css'
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {
  state = {
    username: 'Kindevall'
  }

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value })
  }

  render () {
    const style = {
      backgroundColor: '#303030',
      color: '#eee',
      boxShadow: '0 0 15px #101010bb',
      border: '1px solid #202020',
      width: '300px',
      padding: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px',
      borderRadius: '6px'
    }
    return (
      <div className='App'>
        <UserInput
          currentName={this.state.username}
          handleChange={this.usernameChangedHandler}
        />
        <div id='Output1' style={style}>
          <UserOutput username={this.state.username} />
        </div>
        <div id='Output2' style={style}>
          <UserOutput username={this.state.username} />
        </div>
      </div>
    )
  }
}

export default App

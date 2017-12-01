import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Test from './components/Test/TestPage'

import HomePage from './components/HomePage/HomePage'

class App extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
}

signUp = (event) => {
    event.preventDefault()
    this.props.signUp(
        this.state.email,
        this.state.password,
        this.state.password_confirmation
    )
}

signIn = (event) => {
    event.preventDefault()
    this.props.signIn(
        this.state.email,
        this.state.password
    )
}

handleChange = (event) => {
    const newState = {...this.state}
    newState[event.target.name] = event.target.value
    this.setState(newState)
}
  render() {
    const SignUpLogInComponent = () => (
      <HomePage
        signUp={this.signUp}
        signIn={this.signIn}
        signOut={this.signOut}
        loggedIn={this.state.signedIn} />
    )
    return (
      
        <Router>
         

           

            <Switch>

              <Route exact path="/" render={SignUpLogInComponent}/>

            </Switch>
          
        </Router>
      
    );
  }
}

export default App;

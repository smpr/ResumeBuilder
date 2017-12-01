import React, { Component } from 'react';
import axios from 'axios'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Test from './components/Test/TestPage'

import HomePage from './components/HomePage/HomePage'

import UserCreate from './components/User/UserCreate'

class App extends Component {
  state = {
    redirectToLogin: false,
    signedIn: false,

  }
  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()

      let categories = []
      if (signedIn) {
        setAxiosDefaults()
        categories = await this.getCategories()
      }

      this.setState({
        categories,
        signedIn


      })
    } catch (error) {
      console.log(error)
    }
  }
  //this is devise sign up that will be passed down via props
  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)

      saveAuthTokens(response.headers)

      this.setState({
        signedIn: true,
      })

    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)
      this.setState({
        signedIn: true,

      })

    } catch (error) {
      console.log(error)
    }
  }
  signOut = async (event) => {
    try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const SignUpLogInComponent = () => (
      <HomePage
        signUp={this.signUp}
        signIn={this.signIn}
        signOut={this.signOut}
        loggedIn={this.state.signedIn} />
    )
    const CreateUserSignup = () => (
      <UserCreate
        signUp={this.signUp}
      />
    )
    return (
      <MuiThemeProvider>
        <Router>




          <Switch>

            <Route exact path="/" render={SignUpLogInComponent} />

            <Route exact path="/User/Create" render={CreateUserSignup} />

            <Route exact path="/test" component={Test} />

          </Switch>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

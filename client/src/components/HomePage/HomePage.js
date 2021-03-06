import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class HomePage extends Component {
    state = {
        email: '',
        password: '',
        password_confirmation: '',
        redirectToNextPage: false
    }
   signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
        this.setState({ redirectToNextPage: true })
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        if (this.state.redirectToNextPage) {
            return <Redirect to={`/Test`} />
        }
       
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>


                        <form>
                            <div>
                                <h2>Log In</h2>
                            </div>
                            <div>
                                <TextField
                                    hintText="Email"
                                    floatingLabelText="Email"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="email"
                                    type="text"
                                    required

                                    value={this.state.email}
                                />
                               </div>
                            <div>
                                <TextField
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                    floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                    required

                                    value={this.state.password}
                                />
                                </div>
                            <div>
                                <RaisedButton href={`/Users/Create`} label="Sign up" style={Style} />
                                <RaisedButton onClick={this.signIn} label="Login" style={Style} />
                            </div>

                        </form>
                    </FormContainer>
                </Container>
            </BodyContainer>
        )
    }
}

export default HomePage;
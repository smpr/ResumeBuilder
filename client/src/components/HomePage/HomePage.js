import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'


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
            <div>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                    </div>
                    <Link to={`/User/Create`}><button>Sign Up</button></Link>
                    <button onClick={this.signIn}>Log In</button>
                </form>
            </div>
        )
    }
}

export default HomePage;
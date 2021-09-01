import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AuthBox.css';

class AuthBox extends Component {
    
    state = {
        users: [],
        loginOfNewUser: '',
        emailOfNewUser: '',
        passwordOfNewUser: ''
    }

    createUser = (e) => {
        e.preventDefault()
        fetch('http://localhost:3003/registration', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.loginOfNewUser,
                password: this.state.passwordOfNewUser,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem('token', data.token)
        })
    }

    changeLogin = (l) => {
        this.setState({
            loginOfNewUser: l.target.value
        })
    }
    changeEmail = (e) => {
        this.setState({
            emailOfNewUser: e.target.value
        })
    }
    changePassword = (p) => {
        this.setState({
            passwordOfNewUser: p.target.value
        })
    }




    render() {
        return(
            <div  className="auth-box">
                <form className="auth-box-form">
                    <label className="auth-box-form-label">
                        Войдите в аккаунт:<br></br>
                        <input
                            type='text'
                            className="auth-box-input"
                            placeholder="username"
                        /><br></br>
                        <input
                            type='text'
                            className="auth-box-input"
                            placeholder="password"
                        />
                    </label><br></br>
                    <button
                        type="submit"
                        className="auth-box-button"
                    >Sign in
                    </button>
                </form><br></br>
                <form className="auth-box-form" onSubmit={this.createUser}>
                    <label className="auth-box-form-label">
                        Зарегистрироваться:<br></br>
                        <input
                            value={this.state.loginOfNewUser} onChange={this.changeLogin}
                            type='text'
                            className="auth-box-input"
                            placeholder="username"
                        /><br></br>
                        <input
                            value={this.state.passwordOfNewUser} onChange={this.changePassword}
                            type='text'
                            className="auth-box-input"
                            placeholder="password"
                        />
                    </label><br></br>
                    <button
                        type="submit"
                        className="auth-box-button"
                    >Sign up
                    </button>
                </form>
                <Link to={`/choice`}>Посмотреть площадки</Link>
            </div>
            
        );
    }
}

export default AuthBox;
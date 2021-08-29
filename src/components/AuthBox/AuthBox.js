import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AuthBox.css';

class AuthBox extends Component {
    
    state = {}

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
                <form className="auth-box-form">
                    <label className="auth-box-form-label">
                        Зарегистрироваться:<br></br>
                        <input
                            type='text'
                            className="auth-box-input"
                            placeholder="username"
                        /><br></br>
                        <input
                            type='text'
                            className="auth-box-input"
                            placeholder="email"
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
                    >Sign up
                    </button>
                </form>
                <Link to={`/districts`}>Посмотреть площадки</Link>
            </div>
            
        );
    }
}

export default AuthBox;
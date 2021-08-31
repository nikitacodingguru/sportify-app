import React, { Component } from 'react';
import './StartPage.css';
import Header from '../../components/Header/Header';
import AuthBox from '../../components/AuthBox/AuthBox';


class StartPage extends Component {
    state = {

    }
    render() {
        return (
            <div className="start-page">
                <Header />
                <AuthBox />
            </div>
        )
    }
}

export default StartPage;
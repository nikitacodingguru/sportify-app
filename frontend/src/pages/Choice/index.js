import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

class Choice extends Component {
    render() {
        return(
            <div className="choice">
                <Header />
                <div className="watch-or-create">
                    <div className="watch">
                        <Link to={`/listofevents`}>Посмотреть список ближайших событий</Link> 
                    </div>
                    <div className="create">
                        <Link to={`/districts`}>Создать событие</Link>
                    </div>                                       
                </div>
            </div>
        );
    }
}

export default Choice
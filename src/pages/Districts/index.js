import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { urls } from '../../consts';


class Districts extends Component {
    render() {
        return(
            <div className="districts">
                <Header />
                <div className="okrugi">
                    <div className="one-district">
                        <Link to={`/districts/cao`}>ЦАО</Link> 
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/sao`}>САО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/svao`}>СВАО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/vao`}>ВАО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/uvao`}>ЮВАО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/uao`}>ЮАО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/uzao`}>ЮЗАО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/zao`}>ЗАО</Link>
                    </div>
                    <div className="one-district">
                        <Link to={`/districts/szao`}>СЗАО</Link>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Districts
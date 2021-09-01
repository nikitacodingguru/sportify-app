import React, { Component } from 'react';
import './index.css';

class Modal extends Component {

    state = {
        date: '',
        time: '',
        events: []
    }

    changeDate = (d) => {
        this.setState({
            date: d.target.value
        })
    }
    changeTime = (t) => {
        this.setState({
            time: t.target.value
        })
    }

    handleSumbit = () => {
        fetch('http://localhost:3003/events', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                address: this.props.address,
                date: this.state.date,
                time: this.state.time
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({ events: data})
        })
    }


    render() {
        return (
            <div className="modalWrapper"> 
                <div className="modalBody">
                    <div className="modalTitle">Укажите данные для события по адресу <strong>{this.props.address}</strong></div>
                        <input value={this.state.date} className="date-event"></input>
                        <input value={this.state.time} className="time-event"></input>
                        <button  onSubmit={this.handleSumbit}>Создать</button>
                </div>
            </div>
        );
    }
}

export default Modal;   
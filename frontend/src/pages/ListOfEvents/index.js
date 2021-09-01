import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header/Header';

class ListOfEvents extends Component {

    state = {
        currentEvents: [],
    }

    componentDidMount() {
        fetch('http://localhost:3003/events', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                this.setState({                    
                    currentEvents: data,
                })
            })
    }

    addPlayer = (eId) => {
        fetch(`http://localhost:3003/events/${eId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: localStorage.getItem('token')
            }
        })
        .then(resp => resp.json())
        .then(() => {
            const newEvents = [...this.state.currentEvents]
            const interestingEvent = newEvents.find(e => e.id === eId);
            if (interestingEvent) {
                interestingEvent.amountOfPlayers += 1;
            }
            this.setState({                    
                currentEvents: newEvents,
            })
        })
    }

    render() {
        return(
            <>
                <Header />
                {this.state.currentEvents.map((ev) => {
                    return(
                    <div key={ev.id} className="event-info">
                        <div className="ad-ev">
                            Адрес: {ev.address} <br></br>
                            Дата: {ev.date} <br></br>
                            Время: {ev.time} <br></br>
                            Количество участников: {ev.amountOfPlayers}
                        </div>
                        {/* <div className="da-ev">Дата: {ev.date}</div>
                        <div className="ti-ev">Время: {ev.time}</div>
                        <div className="am-ev">Количество участников: {ev.amountOfPlayers}</div> */}
                        <button onClick={() => this.addPlayer(ev.id)}>Я буду!</button>
                    </div>
                    )
                })}
            </>
        );
    }
}

export default ListOfEvents
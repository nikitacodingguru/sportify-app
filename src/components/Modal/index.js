import React, { Component } from 'react';
import './index.css';

class Modal extends Component {

    handleSumbit = (e) => {
        console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <div className="modalWrapper"> 
                <div className="modalBody">
                    <div className="modalTitle">Укажите данные для события по адресу <strong>{this.props.address}</strong></div>
                    <form onSubmit={this.handleSumbit}>
                        <input className="date"></input>
                        <input></input>
                        <button type="submit"> Создать</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;   
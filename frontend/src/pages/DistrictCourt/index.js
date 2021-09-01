import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import CreateAnEvent from '../../components/CreateAnEvent/CreateAnEvent';

import { SAOAddresses, ZAOAddresses, CAOAddresses, SZAOAddresses, SVAOAddresses, VAOAddresses, UVAOAddresses, UAOAddresses, UZAOAddresses } from '../../consts'
// import Modal from '../../components/Modal';
import Modal, {closeStyle} from 'simple-react-modal';



class DistrictCourt extends Component {
    state = {
        currentDistrictCourt: [], // {} Object.keys().map()
        isOpen: false,
        currentAddress: '',
        time: '',
        date: '',
        events: '',
        amountOfPlayers: 1
    }

    handleOpen = (address) => {
        this.setState({ isOpen: true, currentAddress: address })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
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



handleSubmit = () => {
        
            fetch('http://localhost:3003/events', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    address: this.state.currentAddress,
                    date: this.state.date,
                    time: this.state.time,
                    amountOfPlayers: this.state.amountOfPlayers
                })
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({ events: data})
                this.handleClose()
            })
}

createEvent = () => {
        // localStorage.getItem('token')
}

componentDidMount() {
    const { pathname } = this.props.location;
        
        // TODO: тянуть данные с API и setState задавать данными полученными отсюда
        // { data: [ 
        //  {id: 1, address: 'example1'}
        //  {id: 2, address: 'example2'}
        // ]
        // }
        // fecth() {....}


        switch(pathname) {
            case '/districts/sao':  this.setState({
                currentDistrictCourt: SAOAddresses
            }); break;
            case '/districts/zao':  this.setState({
                currentDistrictCourt: ZAOAddresses
            }); break;
            case '/districts/szao':  this.setState({
                currentDistrictCourt: SZAOAddresses
            }); break;
            case '/districts/cao':  this.setState({
                currentDistrictCourt: CAOAddresses
            }); break;
            case '/districts/svao':  this.setState({
                currentDistrictCourt: SVAOAddresses
            }); break;
            case '/districts/vao':  this.setState({
                currentDistrictCourt: VAOAddresses
            }); break;
            case '/districts/uvao':  this.setState({
                currentDistrictCourt: UVAOAddresses
            }); break;
            case '/districts/uao':  this.setState({
                currentDistrictCourt: UAOAddresses
            }); break;
            case '/districts/uzao':  this.setState({
                currentDistrictCourt: UZAOAddresses
            }); break;
            case '/districts/zao':  this.setState({
                currentDistrictCourt: ZAOAddresses
            }); break;
            default:  console.log('No such address'); break;
        }
    }



    render() {
        return(
            <>
                <Header />
                {/*                 
                {this.props.addresses && this.props.addresses.map((ad) => {
                    return(
                    <div className="court-adress">
                        <div className="ad">{ad}</div>  
                        <CreateAnEvent />
                    </div>
                    )
                // })} */}
                {this.state.currentDistrictCourt.map((ad, idx) => {
                    return(
                    <div className="court-adress" key={idx}>
                        <div className="ad">{ad}</div>  
                        {/* <CreateAnEvent /> */}
                        <button onClick={() => this.handleOpen(ad)}>create event</button>
                    </div>
                    )
                })}
                
                {/* {this.state.isOpen && <Modal address={this.state.currentAddress} />} */}
                        <Modal 
                            closeOnOuterClick
                            show={this.state.isOpen}
                            onClose={this.handleClose}>
                            <a style={closeStyle} onClick={this.handleClose}>X</a>
                            <div className="modalTitle">Укажите данные для события по адресу <br/><strong>{this.state.currentAddress}</strong></div>
                                    <input value={this.state.date} onChange={this.changeDate} type="date" className="date-event"></input><br/>
                                    <input value={this.state.time} onChange={this.changeTime} type="time" className="time-event"></input><br/>
                                    <button onClick={this.handleSubmit}>Создать</button>

                        </Modal>
            </>
        );
    }
}

export default DistrictCourt;
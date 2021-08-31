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
    }

    handleOpen = (address) => {
        this.setState({ isOpen: true, currentAddress: address })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    handleSumbit = (e) => {
        console.log(e);
        e.preventDefault();
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
                {this.state.currentDistrictCourt.map((ad) => {
                    return(
                    <div className="court-adress">
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
                                <form onSubmit={this.handleSumbit}>
                                    <input type="date" className="date-event"></input><br/>
                                    <input type="time" className="time-event"></input><br/>
                                    <button type="submit">Создать</button>
                                </form>

                        </Modal>
            </>
        );
    }
}

export default DistrictCourt;
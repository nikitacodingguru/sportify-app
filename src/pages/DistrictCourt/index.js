import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import CreateAnEvent from '../../components/CreateAnEvent/CreateAnEvent';

import { SAOAddresses, ZAOAddresses, SVAOAddresses, SZAOAddresses, urls } from '../../consts'
import Modal from '../../components/Modal';



class DistrictCourt extends Component {
    state = {
        currentDistrictCourt: [], // {} Object.keys().map()
        isOpen: false,
        currentAddress: '',
    }

    handleOpen = (address) => {
        this.setState({ isOpen: true, currentAddress: address })
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
            case urls.SVAO:  this.setState({
                currentDistrictCourt: SVAOAddresses
            }); break;
            case '/districts/szao':  this.setState({
                currentDistrictCourt: SZAOAddresses
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
                
                {this.state.isOpen && <Modal address={this.state.currentAddress} />}
            </>
        );
    }
}

export default DistrictCourt;
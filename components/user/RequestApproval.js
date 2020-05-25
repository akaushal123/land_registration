import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Message} from "semantic-ui-react";

class RequestApproval extends Component {

    state = {
        loadingApprove: false,
        loadingReject: false,
        errorMessage: '',
        displayError: false
    };

    acceptRequest = async () => {
        this.setState({loadingAccept: true, errorMessage: '', displayError: false});
        try {
            await factory.methods.processRequest(this.props.property, 3).send({
                from: ethereum.selectedAddress
            });
        } catch (err) {
            this.setState({errorMessage: err.message, displayError: true});
        }
        this.setState({loadingAccept: false});
    };

    declineRequest = async () => {
        this.setState({errorMessage: '', loadingReject: true, displayError: false});
        try {
            await factory.methods.processRequest(this.props.property, 2).send({
                from: ethereum.selectedAddress
            });
        } catch (e) {
            this.setState({errorMessage: e.message, displayError: true});
        }
        this.setState({loadingReject: false})
    };

    render() {
        return (
            <div>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={this.acceptRequest} loading={this.state.loadingAccept}>
                        Approve Request
                    </Button>
                    <Button basic color='red' onClick={this.declineRequest} loading={this.state.loadingReject}>
                        Decline Request
                    </Button>
                </div>
                <div>
                    {this.state.displayError ?
                        <Message error size={'tiny'} header={'Error'} content={this.state.errorMessage}/> : null}
                </div>
            </div>
        )
    }
}

export default RequestApproval;

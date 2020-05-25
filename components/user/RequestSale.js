import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Form, Icon} from "semantic-ui-react";

export class RequestSale extends Component {

    state = {
        send: false,
        isAvailable: this.props.isAvailable
    };

    onSubmit = async event => {
        event.preventDefault();
        console.log(this.props.id);
        try{
            await factory.methods.requstToLandOwner(this.props.id).send({
                from:ethereum.selectedAddress
            });
            this.setState({send: true})
        }catch(e) {
            console.log(e);
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Button content={'Request for sale'} icon='home' iconposition='right' color={!this.state.isAvailable?'red':'green'} fluid disabled={!this.state.isAvailable} />
            </Form>
        );
    }

}

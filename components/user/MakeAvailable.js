import React, {Component} from 'react';
import {Button, Message} from "semantic-ui-react";
import factory from "../../ethereum/factory";
import {Router} from '../../routes';

class MakeAvailable extends Component {

    state = {
        loading: false,
        error: '',
        errorMessage: false,
        isAvailable: true
    };


    makeAvailable = async () => {
        console.log( this.props.surveyId);
        this.setState({loading: true, error: '', errorMessage: false});
        try {
            await factory.methods.makeAvailable(this.props.surveyId).send({
                from: ethereum.selectedAddress
            });
            this.setState({isAvailable: false});
            Router.replaceRoute('/user/property')
        } catch (e) {
            this.setState({error: e.message, errorMessage: true})
        }
        this.setState({loading: false});
    };

    render() {
        return (
            <div>
                <Button content={'Make Available'} color={'red'} fluid loading={this.state.loading} disabled={this.props.isAvailable && this.state.isAvailable}
                        onClick={this.makeAvailable}/>
                {this.state.errorMessage ?
                    <Message error size={'tiny'} header={'Error'} content={this.state.error}/> : null}
            </div>
        )

    }
}

export default MakeAvailable;

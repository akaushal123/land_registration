import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Form, Icon, Message} from "semantic-ui-react";
import firebase from '../../components/firebaseAuth';
import * as fb from "firebase";

export class RequestSale extends Component {

    state = {
        send: false,
        isAvailable: this.props.isAvailable,
        loading: false,
        displayError: false,
        error: ''
    };

    onSubmit = async event => {

        event.preventDefault();

        this.setState({loading: true, error: '', displayError: false});
        try {
            await factory.methods.requstToLandOwner(this.props.id).send({
                from: ethereum.selectedAddress
            });
        } catch (err) {
            this.setState({error: err.message, displayError: true});
        }

        this.setState({loading:false});

        try {

            const info = await factory.methods.landInfoOwner(this.props.id).call({from: this.props.userAddress});
            // Add this req to database
            var db = firebase.firestore();
            var reqDataRef = db.collection("RequestedData").doc(this.props.userAddress);

            await reqDataRef.get().then((doc) => {
                if (doc.exists) {
                    reqDataRef.update({
                        requested: fb.firestore.FieldValue.arrayUnion({
                            village: info[2],
                            state: info[0],
                            district: info[1],
                            survey: info[3],
                            id: this.props.id
                        })
                    })
                        .then(function () {
                            console.log("Request Added");
                        })
                } else {
                    console.log("First request");
                    reqDataRef.set({
                        requested: [{
                            village: this.props.village,
                            state: this.props.state,
                            district: this.props.district,
                            survey: this.props.survey,
                            id: this.props.id
                        }]
                    })
                }
            })
                .catch(function (error) {
                    console.log("Error getting document:", error);
                });
            this.setState({send: true})
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Button content={'Request for sale'} icon='home' iconposition='right'
                            color={!this.state.isAvailable ? 'red' : 'green'} fluid disabled={!this.state.isAvailable}/>
                </Form>
                {this.state.displayError ?
                    <Message error size={'tiny'} header={'Error'} content={this.state.errorMessage}/> : null}
            </div>

        );
    }
}

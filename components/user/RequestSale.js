import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Form, Icon} from "semantic-ui-react";
import firebase from './../firebaseAuth';
import * as fb from 'firebase';

export class RequestSale extends Component {

    state = {
        send: false,
        isAvailable : this.props.isAvailable
    };

    onSubmit = async event => {
        event.preventDefault();
        //console.log(this.props.id);
        try{
            const info = await factory.methods.landInfoOwner(this.props.id).call({ from : this.props.userAddress}); 
            //console.log(this.state.isAvailable);
            // Add this req to database 
            var db = firebase.firestore();
            var reqDataRef = db.collection("RequestedData").doc(this.props.userAddress);
            
            await reqDataRef.get().then( (doc) => {
                console.log(doc.exists);
                if (doc.exists) {
                    console.log("Exists");
                    reqDataRef.update({
                        requested : fb.firestore.FieldValue.arrayUnion({
                            village : info[2],
                            state : info[0],
                            district : info[1],
                            survey : info[3],
                            id : this.props.id
                        })
                    })
                    .then(function() {
                        console.log("Request Added");
                    })
                } else {
                    console.log("First request");
                    var now = this.props;
                    console.log(now.village,now.state,now.district,now.survey,now.id);
                    reqDataRef.set({
                        requested : [{
                            village : info[2],
                            state : info[0],
                            district : info[1],
                            survey : info[3],
                            id : this.props.id
                        }]
                    })
                    //console.log("first last");
                }
            })
            .catch(function(error) {
                console.log("Error getting document:", error.message);
            });

            await factory.methods.requstToLandOwner(this.props.id).send({ from : this.props.userAddress});
            
            this.setState({send: true});
            console.log(this.state.isAvailable);
        }catch(e) {
            console.log(e);
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Button content={'Request for sale'} icon='home' iconposition='right' color={!this.state.send?'red':'green'} 
                fluid
                disabled={!this.state.isAvailable || this.state.send} />
            </Form>
        );
    }

}

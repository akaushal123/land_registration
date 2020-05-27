import React, {Component} from "react";
import factory from "../../ethereum/factory";
import firebase from "../firebaseAuth";
import * as fb from 'firebase';
import {Button, Message} from "semantic-ui-react";

class BuyProperty extends Component {

    state = {
        loading: '',
        error: '',
        displayError: false
    };

    buyProperty = async () => {

        this.setState({loading: true, error: '', displayError: false});


        var userAddress = ethereum.selectedAddress;

        const info = await factory.methods.landInfoUser(this.props.propertyId).call();
        const price = info[1];
        const payablePrice = Math.ceil(price + price / 10 + 100);

        var db = firebase.firestore();
        var reqDataRef = db.collection("RequestedData").doc(userAddress);
        const LandInfo = await factory.methods.landInfoOwner(this.props.propertyId).call();
        // await reqDataRef.update({
        //     requested : fb.firestore.FieldValue.arrayRemove({
        //         district : LandInfo[1],
        //         village : LandInfo[2],
        //         state : LandInfo[0],
        //         survey : LandInfo[3],
        //         id : this.props.propertyId})
        // });
        try {
            await factory.methods.buyProperty(this.props.propertyId).send({
                from: userAddress,
                value: payablePrice
            });
            await reqDataRef.update({
                requested : fb.firestore.FieldValue.arrayRemove({
                    district : LandInfo[1],
                    village : LandInfo[2],
                    state : LandInfo[0],
                    survey : LandInfo[3],
                    id : this.props.propertyId})
            });
        } catch (err) {
            this.setState({error: err.message, displayError: true});
        }

        this.setState({loading: false})
    };

    render() {
        return (
            <div>
                <Button fluid color={this.props.status === 'Approved' ? 'green' : 'red'} loading={this.state.loading}
                        content={'Buy Property'} onClick={this.buyProperty}
                        disabled={this.props.status !== 'Approved'}/>
                {this.state.displayError ?
                    <Message error size={'tiny'} header={'Error'} content={this.state.error}/> : null}
            </div>
        )
    }

}

export default BuyProperty;

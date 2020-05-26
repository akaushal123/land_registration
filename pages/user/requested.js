import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Card} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import {Link} from '../../routes';
import firebase from './../../components/firebaseAuth';
import * as fb from 'firebase';

class Requested extends Component {

    state = {
        loaded: false,
        propertiesRequested: [],
        userAddress: '',
        status: []
    };

    reqStatus = ["Not set","Pending","Reject","Approved"];

    async componentDidMount() {
        // Get req from database

        var userAddress = ethereum.selectedAddress;
        this.setState({userAddress: userAddress});
        var db = firebase.firestore();
        var reqDataRef = db.collection("RequestedData").doc(userAddress);

        await reqDataRef.get().then((doc) => {
            if (doc.exists) {
                this.setState({propertiesRequested: doc.data().requested});
            } else {
                console.log("No Requested");
            }
        })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });
        /*
        const status = await Promise.all(
            this.state.propertiesRequested.map((id, index)=>{
                return factory.methods.landInfoAdmin(id.id).call()
            })
        );
        */
        this.state.propertiesRequested.map((property, index)=>{
            factory.methods.landInfoAdmin(property.id).call()
                .then(info => {
                    const status = [...this.state.status];
                    status.push(this.reqStatus[info['3']]);
                    this.setState({status : status});
                    return true;
                })
        })
    }

    convertAddress = (address) => {
        if (!address)
            return address;
        return address.toLowerCase();
    };

    buyProperty = async (propId) => {
        const info = await factory.methods.landInfoUser(propId).call();
        const price = info[1];
        const payablePrice = Math.ceil(price + price/10 + 100);
        const LandInfo = await factory.methods.landInfoOwner(propId).call();

        var db = firebase.firestore();
        var reqDataRef = db.collection("RequestedData").doc(this.state.userAddress);
        await reqDataRef.update({
            requested : fb.firestore.FieldValue.arrayRemove({
                district : LandInfo[1],
                village : LandInfo[2],
                state : LandInfo[0],
                survey : LandInfo[3],
                id : propId})
        });

        await factory.methods.buyProperty(propId).send({
            from : this.state.userAddress,
            value : payablePrice
        });

        

    }

    renderRequestedProperties() {
        const properties = this.state.propertiesRequested.map((surveyId, index) => {
            //console.log(this.state.status[index]);
            return {
                header: `Property ID: ${this.state.propertiesRequested[index].id}`,
                meta: `Requested Status: ${this.state.status[index]}`,
                description: (
                    <div>
                        <h4>
                            Survey Number: {this.state.propertiesRequested[index].survey}<br/>
                            Village: {this.state.propertiesRequested[index].village}<br/>
                            District: {this.state.propertiesRequested[index].district}<br/>
                            State: {this.state.propertiesRequested[index].state}<br/>
                        </h4>
                    </div>
                ),
                style: {overflowWrap: 'break-word'},
                extra: (
                    <Button 
                    fluid 
                    onClick={(event) => this.buyProperty(this.state.propertiesRequested[index].id)} 
                    color={this.state.status[index] == 'Approved' ? 'green': 'red'} 
                    content={'Buy Property'}
                    disabled={this.state.status[index] == 'Approved' ? false : true} />
                )
            };
        });
        return <Card.Group items={properties}/>;

    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Requested Property Status</h3>
                    {this.renderRequestedProperties()}
                </div>
            </Layout>
        );
    }
}

export default Requested;
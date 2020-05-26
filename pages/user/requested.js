import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Card, Header, Icon} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import firebase from './../../components/firebaseAuth';
import BuyProperty from "../../components/user/BuyProperty";

class Requested extends Component {

    state = {
        propertiesRequested: [],
        userAddress: '',
        status: []
    };

    reqStatus = ["Not set","Pending","Reject","Approved"];

    async componentDidMount() {

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

        this.state.propertiesRequested.map((property, index)=>{
            factory.methods.landInfoAdmin(property.id).call()
                .then(info => {
                    const status = [...this.state.status];
                    status.push({reqStatus: this.reqStatus[info['3']], currentOwner: info['0']});
                    this.setState({status : status});
                    return true;
                })
        });
    }

    convertAddress = (address) => {
        if (!address)
            return address;
        return address.toLowerCase();
    };

    renderRequestedProperties() {

        if(!this.state.propertiesRequested.length)
            return (
                <Header as='h1' textAlign={'center'} icon>
                    <Icon name='edit' size={'large'}/>
                    No property requested
                </Header>
            );


        const properties = this.state.propertiesRequested.map((surveyId, index) => {
            return {
                header: `Property ID: ${this.state.propertiesRequested[index].id}`,
                meta: `Requested Status: ${this.state.status[index] ? this.state.status[index].reqStatus : '' }`,
                description: (
                    <div>
                        <h4>
                            Survey Number: {this.state.propertiesRequested[index].survey}<br/>
                            Village: {this.state.propertiesRequested[index].village}<br/>
                            District: {this.state.propertiesRequested[index].district}<br/>
                            State: {this.state.propertiesRequested[index].state}<br/>
                            Current Owner: {this.state.status[index] ? this.state.status[index].currentOwner : ''}
                        </h4>
                    </div>
                ),
                style: {overflowWrap: 'break-word'},
                extra: (
                    <BuyProperty propertyId={this.state.propertiesRequested[index].id} status={this.state.status[index] ? this.state.status[index].reqStatus : 'Pending'}/>
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

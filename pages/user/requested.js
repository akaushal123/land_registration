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

    async componentDidMount() {

        var userAddress = ethereum.selectedAddress;
        this.setState({userAddress: userAddress});
        var db = firebase.firestore();
        var reqDataRef = db.collection("RequestedData").doc(
            '0x14c4ddee634c037ca1bce97397d3bf85f6feb6d7');

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

        const status = await Promise.all(
            this.state.propertiesRequested.map((id, index)=>{
                return factory.methods.landInfoAdmin(id.id).call()
            })
        );
        console.log('Staus', status);
        this.setState({status: status});
        console.log(this.state.status);
    }

    convertAddress = (address) => {
        if (!address)
            return address;
        return address.toLowerCase();
    };


    renderRequestedProperties() {
        const properties = this.state.propertiesRequested.map((surveyId, index) => {
            return {
                header: `Property ID: ${this.state.propertiesRequested[index].id}`,
                meta: `Requested Status: ${this.state.status[0][1] ? 'Yes' :'No'}`,
                description: (
                    <div>
                        <h4>
                            Survey Number: {this.state.propertiesRequested[index].survey}<br/>
                            Village: {this.state.propertiesRequested[index].village}<br/>
                            District: {this.state.propertiesRequested[index].district}<br/>
                            State: {this.state.propertiesRequested[index].state}<br/>
                            {/*Current Owner: {this.state.status[index]1}*/}
                        </h4>
                    </div>
                ),
                style: {overflowWrap: 'break-word'},
                extra: (
                    <Button fluid color={!this.state.status[index] ? 'red': 'green'} content={'Buy Property'}/>
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

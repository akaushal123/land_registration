import React,{ Component } from 'react';
import factory from '../../ethereum/factory';
import {Card} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import {Link} from '../../routes';
import firebase from './../../components/firebaseAuth';
import * as fb from 'firebase';

class Requested extends Component{

    state = {
        loaded: false,
        properties: [],
        userAddress : ''
    };

    async componentDidMount() {
        /*
        const properties = await factory.methods.viewAssets().call({
            from: ethereum.selectedAddress
        });
        this.setState({loaded: true, properties});
        return {properties}; */

        // Get req from database
        
        var userAddress = ethereum.selectedAddress;
        this.setState({userAddress : userAddress}); 
        var db = firebase.firestore();
        var reqDataRef = db.collection("RequestedData").doc(userAddress);
        
        await reqDataRef.get().then( (doc) => {
            if (doc.exists) {
                this.setState({properties : doc.data().requested});
            } else {
                console.log("No Requested");
            }
        })
        .catch(function(error) {
            console.log("Error getting document:", error);
        });

        console.log(this.state.properties);
    }

    convertAddress = (address) => {
        if(!address)
            return address;
        return address.toLowerCase();;
    }


    renderRequestedProperties() {

        /*
    const properties = this.state.properties.map(surveyId => {
        return {
            header: surveyId,
            description: (
                <Link route={`/explore/${surveyId}`}>
                    <a>View Property</a>
                </Link>
            ),
            fluid:true,
            style: {overflowWrap: 'break-word'}
        };
    });
    return <Card.Group items={properties}/>;
    */
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Requested Property Status : </h3>
                    {this.renderRequestedProperties()}
                </div>
            </Layout>
        );
    }
}

export default Requested;

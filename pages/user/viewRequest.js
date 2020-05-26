import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Card, Header, Icon} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import RequestApproval from '../../components/user/RequestApproval';

export default class viewRequest extends Component {

    state = {
        properties: [],
        requests:[]
    };

    async componentDidMount() {
        const properties = await factory.methods.viewAssets().call({
            from: ethereum.selectedAddress
        });

        try {
            const requests = await Promise.all(
                properties.map(property => {
                    return factory.methods.viewRequest(property).call({
                        from: ethereum.selected
                    });
                })
            );
            this.setState({properties, requests});
            return {properties, requests};
        } catch(e){
            console.log(e);
        }
    }

    renderCard() {

        if(!this.state.properties.length)
            return (
                <Header as='h1' textAlign={'center'} icon>
                    <Icon name='bell' />
                    No pending request
                </Header>
            );

        const items = this.state.properties.map((property,index) =>{
            const requestAddress = this.state.requests[index];
            return{
                header: `Property ID: ${property}`,
                description: `Requester: ${requestAddress}`,
                style: { overflowWrap: 'break-word' },
                extra: (
                    <RequestApproval property={property} requestAddress={requestAddress}/>
                )
            };
        });

        return <Card.Group items={items}/>
    }

    render(){
        return (
            <Layout>
                <h3>View Requests</h3>
                {this.renderCard()}
            </Layout>
        )
    }

}

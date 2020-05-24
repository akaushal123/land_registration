import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Card} from 'semantic-ui-react';

export default class viewRequest extends Component {

    async componentDidMount() {

        const properties = await factory.methods.viewAssets().call({
            from: ethereum.selectedAddress
        });
        console.log(properties);

        //TODO yeh hr bnde k liye request ko dikhta hai, but iska UI bnana h. Console.log() ho rha h
        try {
            const requests = await Promise.all(
                properties.map(property => {
                    return factory.methods.viewRequest(property).call({
                        from: ethereum.selected
                    });
                })
            );
            console.log(requests);
            return {requests};
        } catch(e){
            console.log(e);
        }

    }

    renderCard() {
        return this.props.requests.map((request, index) =>
            <Card.Group>
                <Card>
                    <Card.Content>

                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }

    render(){
        return (
            <Layout>
                {this.renderCard()}
            </Layout>
        )
    }

}

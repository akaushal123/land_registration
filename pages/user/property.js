import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Card} from 'semantic-ui-react';
import Layout from "../../components/Layout";

class Property extends Component {

    state = {
        loaded: false,
        properties: [],
        data: [{}],
        loading: false,
        error: ''
    };

    async componentDidMount() {
        const properties = await factory.methods.viewAssets().call({
            from: ethereum.selectedAddress
        });
        this.setState({loaded: true, properties});
        const data = await Promise.all(properties.map(property => {
            return factory.methods.landInfoOwner(property).call({
                from: ethereum.selectedAddress
            });
        }));
        this.setState({data: data});
        console.log(this.state.data);
        console.log(data);
    }

    makeAvailable = async (surveyId) => {
        this.setState({loading: true, error: ''});
        try {
            await factory.methods.makeAvailable(surveyId).send({
                from: ethereum.selectedAddress
            });
        } catch (e) {
            this.setState({error: e.message})
        }
        this.setState({loading: false});

    };

    renderProperties() {
        const properties = this.state.properties.map((surveyId, index) => {
            return {
                header: `Property ID: ${surveyId}`,
                description: (
                    <div>
                        <h4>
                            Survey Number: {this.state.data[index][3]}<br/>
                            Village: {this.state.data[index][2]}<br/>
                            District: {this.state.data[index][2]}<br/>
                            State: {this.state.data[index][2]}<br/>
                        </h4>
                    </div>
                ),
                style: {overflowWrap: 'break-word'},
                extra: (
                    <Button content={'Make Available'} color={'red'} fluid loading={this.state.loading}
                            onClick={event => this.makeAvailable(surveyId)}/>
                )
            }
        });
        return <Card.Group items={properties}/>;
    };


    render() {
        return (
            <Layout>
                <div>
                    <h3>Properties</h3>
                    {this.renderProperties()}
                </div>
            </Layout>
        );
    }
}

export default Property;

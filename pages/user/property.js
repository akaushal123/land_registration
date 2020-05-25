import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Card} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import {Link} from '../../routes';

class Property extends Component {

    state = {
        loaded: false,
        properties: [],
        data: []
    };

    async componentDidMount() {
        const properties = await factory.methods.viewAssets().call({
            from: ethereum.selectedAddress
        });
        this.setState({loaded: true, properties});
    }

    makeAvailable = async (surveyId) => {
        console.log(surveyId);
        try {
            await factory.methods.makeAvailable(surveyId).send({
                from: ethereum.selectedAddress
            });
        } catch (e) {
            console.log(e);
        }

    };

    data = async (surveyId) => {
        const data = await factory.methods.landInfoOwner(surveyId).call();
        this.setState({data});
        console.log(data);
    };

    renderProperties() {
        const properties = this.state.properties.map(surveyId => {
            // await this.data(surveyId);
                return {
                    header: surveyId,
                    description: (
                        <div>
                            Hello
                        </div>
                        // <a onClick={this.data(surveyId)}>View Property</a>
                    ),
                    fluid: true,
                    style: {overflowWrap: 'break-word'},
                    extra: (
                        <Button content={'Make Available'} color={'red'} fluid
                                onClick={event => this.makeAvailable(surveyId)}/>
                    )
                }
            });
        return <Card.Group items={properties}/>;
    };


    render(){
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

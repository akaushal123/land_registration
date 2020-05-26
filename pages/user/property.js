import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Card, Header, Icon} from 'semantic-ui-react';
import Layout from "../../components/Layout";

class Property extends Component {

    state = {
        loaded: false,
        properties: [],
        data: [],
        loading: false,
        error: ''
    };

    async componentDidMount() {
        const properties = await factory.methods.viewAssets().call({
            from: ethereum.selectedAddress
        });
        this.setState({loaded: true, properties});

        this.state.properties.map((property, index)=>{
            factory.methods.landInfoOwner(property).call()
                .then(info => {
                    const data = [...this.state.data];
                    console.log('data54', data);
                    data.push(info);
                    this.setState({data});
                    return true;
                })
        });
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

        if(!this.state.properties.length)
            return (
                <Header as='h1' textAlign={'center'} icon>
                    <Icon name='home' />
                    No property owned
                </Header>
            );


        const properties = this.state.properties.map((surveyId, index) => {
            return {
                header: `Property ID: ${surveyId}`,
                description: (
                    <div>
                        <h4>
                            Survey Number: {this.state.data[index] ? this.state.data[index][3]:''}<br/>
                            Village: {this.state.data[index] ? this.state.data[index][2]:''}<br/>
                            District: {this.state.data[index] ? this.state.data[index][1]:''}<br/>
                            State: {this.state.data[index] ? this.state.data[index][0]:''}<br/>
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

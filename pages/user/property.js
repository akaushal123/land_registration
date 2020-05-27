import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Button, Card, Header, Icon} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import MakeAvailable from "../../components/user/MakeAvailable";

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
                    data.push(info);
                    this.setState({data});
                    return true;
                })
        });
    }

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
                    <MakeAvailable surveyId={surveyId} isAvailable={this.state.data[index] ? this.state.data[index][4] : true}/>
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

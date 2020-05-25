import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Input, Card, Search, Grid, Form, Icon, Container, Button} from "semantic-ui-react";
import {RequestSale} from "../../components/user/RequestSale";
import Layout from "../../components/Layout";

class ExploreProperty extends Component {

    state = {
        village: '',
        district: '',
        state: '',
        survey: null,
        loading: false,
        loaded: false,
        error: '',
        currentOwner: '',
        marketValue: null,
        isAvailable: null,
        requester: '',
        requestStatus: null,
        id: null,
    };

    renderSearchCard() {

        const header = (
            <div>
                <h3>Property ID: {this.state.id}</h3>
                Current Owner: {this.state.currentOwner}
            </div>
        );

        return <Card fluid color={this.state.isAvailable ? 'green' : 'red'}
                     header={header}
                     description={`Market Value:  ${this.state.marketValue}`}
                     meta={`Available for Sale:  ${this.state.isAvailable ? "Yes" : "No"}`}
                     extra={<RequestSale basic isAvailable={this.state.isAvailable} id={this.state.id}/>}
        />;
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        try {
            const id = await factory.methods.computeId(this.state.state, this.state.district, this.state.village, this.state.survey).call();
            const ownerDetails = await factory.methods.landInfoUser(id).call();
            const currentOwner = ownerDetails[0], marketValue = ownerDetails[1], isAvailable = ownerDetails[2],
                requester = ownerDetails[3], requestStatus = ownerDetails[4];
            this.setState({
                currentOwner,
                marketValue,
                isAvailable,
                requester,
                requestStatus,
                id,
                state: '',
                district: '',
                survey: null,
                village: ''
            });
            this.renderSearchCard();
            this.setState({loaded: true});
        } catch (err) {
            this.setState({error: err.message});
        }
        this.setState({loading: false, value: ''});

    };


    render() {
        return (
            <Layout>
                <h3 aligntext={'center'}>Search Property</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group widths={'equal'}>
                        <Form.Input fluid placeholder={'Village'} value={this.state.village}
                                    onChange={event => this.setState({village: event.target.value})}/>
                        <Form.Input fluid placeholder={'District'} value={this.state.district}
                                    onChange={event => this.setState({district: event.target.value})}/>
                        <Form.Input fluid placeholder={'State'} value={this.state.state}
                                    onChange={event => this.setState({state: event.target.value})}/>
                        <Form.Input fluid placeholder={'Survey Number'} value={this.state.survey}
                                    onChange={event => this.setState({survey: event.target.value})} type={'number'}/>
                        <Button loading={this.state.loading} size={'tiny'}
                                icon={<Icon name='search' size={'small'} inverted circular/>}/>
                    </Form.Group>
                </Form>

                <br/>
                <br/>

                {this.state.loaded ? (
                    <Container>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    {this.renderSearchCard()}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                ) : null}
            </Layout>
        );
    }
}

export default ExploreProperty;

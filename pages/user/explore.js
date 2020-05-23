import React, {Component} from 'react';
import factory from '../../ethereum/factory';
import {Input, Card, Search, Grid, Form, Icon} from "semantic-ui-react";
import web3 from '../../ethereum/web3';
import Layout from "../../components/Layout";
import SearchResult from "../../components/user/SearchResult";
import Link from "next/link";

class ExploreProperty extends Component{

    state = {
        value: '',
        loading: false,
        loaded: false,
        error: '',
        currentOwner: '',
        marketValue: null,
        isAvailable: null,
        requester: '',
        requestStatus: null
    };

    renderSearchCard() {
        const {currentOwner, marketValue, isAvailable, requester, requestStatus} = this.state;

        const items = [
            {
                header: currentOwner,
                meta: "Property's current owner",
                description: "This is the owner of the property",
                style: {overflowWrap: 'break-word'}
            },
            {
                header: marketValue,
                meta: "Property's current Value",
                description: "Market value of the property",
                style: {overflowWrap: 'break-word'}
            },
            {
                header: isAvailable ? "Yes" : "No",
                meta: "Property's available for sale",
                description: "is Property Available for sale"
            },
            {
                header: requester,
                meta: "Property's requested by",
                description: "This is the property is currently requested for sale",
                style: {overflowWrap: 'break-word'}
            },
            {
                header: requestStatus,
                meta: "Response of the owner for property sale",
                description: "Request status of the property",
                style: {overflowWrap: 'break-word'}
            }
        ];
        return <Card.Group items={items}/>;
    }

    onSubmit = async () => {
        this.setState({loading: true, errorMessage: ''});
        try{
            const ownerDetails = await factory.methods.landInfoUser(this.state.value).call();
            const currentOwner = ownerDetails[0],  marketValue = ownerDetails[1], isAvailable = ownerDetails[2], requester = ownerDetails[3], requestStatus = ownerDetails[4] ;
            this.setState({currentOwner, marketValue, isAvailable, requester, requestStatus});
            this.renderSearchCard();
            this.setState({loaded:true});

        } catch(err){
            this.setState({error: err.message});
        }
        this.setState({loading: false, value: ''});

    };


    render() {
      return (
          <Layout>
              <h3 aligntext={'center'}>Search Property</h3>
              <Form onSubmit={this.onSubmit}>
                  <Form.Input
                      icon={<Icon name='search' inverted circular />} loading={this.state.loading} value={this.state.value}
                      placeholder='Search...' onChange={event => this.setState({value:event.target.value})}
                  />
              </Form>

              <br/>
              <br/>

              {this.state.loaded ? (
                  <Grid>
                      <Grid.Row>
                          <Grid.Column width={10}>
                              {this.renderSearchCard()}
                          </Grid.Column>
                          <Grid.Column width={6}>
                              Request for sale
                          </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                          <Grid.Column>
                              xyz
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
              ) : null}
          </Layout>
      );
    }
}

export default ExploreProperty;

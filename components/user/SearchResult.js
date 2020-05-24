import React, {Component} from 'react';
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Card, Grid} from "semantic-ui-react";
import Layout from "../Layout";


// Shi hai, but parameter passing me dikkat h

class SearchResult extends Component {

    static async getInitialProps(props) {
        const ownerDetails = await factory.methods.landInfoUser(props.query.surveyId).call();
        const currentOwner = ownerDetails[0],  marketValue = ownerDetails[1], isAvailable = ownerDetails[2], requester = ownerDetails[3], requestStatus = ownerDetails[4] ;
        //const {currentOwner, marketValue, isAvailable, requester, requestStatus} = props.query;
        return {currentOwner, marketValue, isAvailable, requester, requestStatus};
    }

    renderSearchCard() {
        const {currentOwner, marketValue, isAvailable, requester, requestStatus} = this.props;

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

    render() {
        return (
            <Layout>
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
            </Layout>
        );
    }
}

export default SearchResult;

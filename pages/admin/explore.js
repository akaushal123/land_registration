import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutAdmin';
import styles from './explore.module.css';
import factory from './../../ethereum/factory';
import { Form, Button, Input, Message } from 'semantic-ui-react';

class Explore extends Component {
    state = {
        village : "",
        district : "",
        state : "",
        address : "",
        userAddress : "",
        surveyNumber : "",
        errorMessage : '',
        landInfo : {
            isAvailable : "",
            requester : "",
            requestStatus : ""
        }
    }

    async componentDidMount() {
        const userAddress = await ethereum.selectedAddress;
        this.setState({userAddress : userAddress});
    }

    searchLand = async () => {
        event.preventDefault();
        try{
            const computedId = await factory.methods.computeId(
                this.state.state,this.state.district,this.state.village,
                this.state.surveyNumber
            ).call();
            
            const landInfo = {
                isAvailable : "",
                requester : "",
                requestStatus : ""
            };

            const info = await factory.methods.landInfoOwner(computedId).call();
            
            landInfo[isAvailable] = info[4];
            landInfo[requester] = info[5];
            landInfo[requestStatus] = info[6];
            
            this.setState({landInfo});
            
        }catch(err) {
        }
    }

    searchUser = async () => {
        
    }

    render() {
        return (
            <Layout>
                <section className={styles.Main}>
                    <div>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Search Any Land </h1>
                        </div>
                        
                        <Form className={styles.AddForm} onSubmit={this.searchLand} error={!!this.state.errorMessage}>
                            <div class="ui grid">
                                <div class="three wide column">
                                    <Form.Field className={styles.SearchField}>
                                        <label>Village</label>
                                        <Input 
                                        required 
                                        value={this.state.village} 
                                        onChange={event => this.setState({village : event.target.value})}
                                        />
                                    </Form.Field>
                                </div>
                                <div class="three wide column">
                                    <Form.Field>
                                        <label>District</label>
                                        <Input 
                                        value={this.state.district} 
                                        onChange={event => this.setState({district : event.target.value})}
                                        />
                                    </Form.Field>
                                </div>
                                <div class="three wide column">
                                <Form.Field>
                                    <label>State</label>
                                    <Input 
                                    value={this.state.state} 
                                    onChange={event => this.setState({state : event.target.value})}
                                    />
                                </Form.Field>
                                </div>
                                <div class="three wide column">
                                <Form.Field>
                                    <label>Survey Number</label>
                                    <Input 
                                    value={this.state.surveyNumber} 
                                    onChange={event => this.setState({surveyNumber : event.target.value})}
                                    />
                                </Form.Field>
                                </div>
                                <div class="four wide column">
                                    <div className={styles.BtnSearch}>
                                        <Message error header="Oops!" content={this.state.errorMessage} />
                                        <Button primary> Search </Button>
                                    </div>
                                </div>
                            </div>                        
                        </Form>
                    </div>
                    <h3 style={{margin: "5px 0px 5px 50px"}}> OR </h3>
                    <div>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Search Any User </h1>
                        </div>
                        <Form className={styles.AddForm} onSubmit={this.searchUser} error={!!this.state.errorMessage}>
                            <div class="ui grid">
                                <div class="seven wide column">
                                    <Form.Field className={styles.SearchField}>
                                        <label>User Ethereum Address</label>
                                        <Input 
                                        required
                                        value={this.state.address} 
                                        onChange={event => this.setState({address : event.target.value})}
                                        />
                                    </Form.Field>
                                </div>
                                
                                <div class="four wide column">
                                    <div className={styles.BtnSearch}>
                                        <Message error header="Oops!" content={this.state.errorMessage} />
                                        <Button primary> Search </Button>
                                    </div>
                                </div>
                            </div>                        
                        </Form>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Explore;
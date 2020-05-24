import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutSuperAdmin';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import styles from './registerLand.module.css';
import factory from './../../ethereum/factory';
import { Router } from '../../routes';

class RegisterLand extends Component {

    state = {
        village : "v1",
        district : "d1",
        state : "s1",
        ownerAddress : '',
        buttonText : "Register!",
        userAddress : "",
        errorMessage : '',
        surveyNumber : "",
        marketValue : 0
    }

    async componentDidMount() {
        const userAddress = await ethereum.selectedAddress;
        this.setState({userAddress : userAddress});
    }

    register = async () => {
        event.preventDefault();
        try{
            const computedId = await factory.methods.computeId(
                this.state.state,this.state.district,this.state.village,
                this.state.surveyNumber
            ).call();

            await factory.methods.Registration(
                this.state.state,this.state.district,this.state.village,
                this.state.surveyNumber,
                this.state.ownerAddress,
                this.state.marketValue,
                computedId
                )
                .send({
                from : this.state.userAddress
            });
            this.setState({buttonText : "Registered!!!"});
            Router.pushRoute('/superAdmin');
        }catch(err) {
            this.setState({errorMessage : err.message.slice(0,50)});
        }
    }

    render() {
        return (
            <Layout>
                <section className={styles.Main}>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Register Land </h1>
                        </div>
                        <Form className={styles.AddForm} onSubmit={this.register} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <label>Village</label>
                                <Input 
                                required 
                                value={this.state.village} 
                                onChange={event => this.setState({village : event.target.value})}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>District</label>
                                <Input 
                                value={this.state.district} 
                                onChange={event => this.setState({district : event.target.value})}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>State</label>
                                <Input 
                                value={this.state.state} 
                                onChange={event => this.setState({state : event.target.value})}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Survey Number</label>
                                <Input  
                                type="number"
                                value={this.state.surveyNumber}
                                onChange={event => this.setState({surveyNumber : event.target.value})} />
                            </Form.Field>
                            <Form.Field>
                                <label>Owner's Address</label>
                                <Input 
                                required 
                                label="addrress" 
                                labelPosition="right" 
                                value={this.state.ownerAddress}
                                onChange={event => this.setState({ownerAddress : event.target.value})}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Market Value</label>
                                <Input  
                                label="ether"
                                labelPosition="right"
                                type="number"
                                value={this.state.marketValue}
                                onChange={event => this.setState({marketValue : event.target.value})} />
                            </Form.Field>
                            <Message error header="Oops!" content={this.state.errorMessage} />
                            <Button primary> {this.state.buttonText} </Button>
                        </Form>
                </section>
            </Layout>
        );
    }
}

export default RegisterLand;
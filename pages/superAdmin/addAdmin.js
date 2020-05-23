import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutSuperAdmin';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import styles from './addAdmin.module.css';
import factory from './../../ethereum/factory';
import web3 from './../../ethereum/factory';
import { Router } from '../../routes';

class AddAdmin extends Component {

    state = {
        village : "",
        district : "",
        state : "",
        adminAddress : '',
        buttonText : "Assign!",
        userAddress : "",
        errorMessage : ''
    }

    async componentDidMount() {
        const userAddress = await ethereum.selectedAddress;
        this.setState({userAddress : userAddress});
    }

    onSubmit = async () => {
        event.preventDefault();
        try{
            await factory.methods.addSuperAdmin(this.state.adminAddress,this.state.village).send({
                from : this.state.userAddress
            });
            this.setState({buttonText : "Added!!!"});
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
                            <h1 className={styles.HeroText}> Add Admin </h1>
                        </div>
                        <Form className={styles.AddForm} onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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
                                <label>Admin Address</label>
                                <Input 
                                required 
                                label="addrress" 
                                labelPosition="right" 
                                value={this.state.adminAddress}
                                onChange={event => this.setState({adminAddress : event.target.value})}/>
                            </Form.Field>
                            <Message error header="Oops!" content={this.state.errorMessage} />
                            <Button primary> {this.state.buttonText} </Button>
                        </Form>
                </section>
            </Layout>
        );
    }
}

export default AddAdmin;

/*
<div className={styles.AddForm}>
    <form>
        <div className={styles.FormField}>
            <label> Village : </label> <input type="text" />
        </div>
        <div className={styles.FormField}>
            <label> District : </label> <input type="text" />
        </div>
        <div className={styles.FormField}>
            <label> State : </label> <input type="text" />
        </div>
        <div className={styles.FormField}>
            <label> Admin Address : </label> <input type="text" />
        </div>
        <div className={styles.Submit}>
            <a onClick={this.onSubmit}>Submit</a>
        </div>
    </form>
</div>
*/
import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutSuperAdmin';
import { Form, Button, Input } from 'semantic-ui-react';
import styles from './addAdmin.module.css';
import factory from './../../ethereum/factory';
import web3 from './../../ethereum/factory';

class AddAdmin extends Component {

    static getInitialProps() {
        const userAddress = ethereum.selectedAddress;
        return { userAddress };
    }

    state = {
        village : "",
        district : "",
        state : "",
        adminAddress : "",
    }

    onSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <Layout>
                <section className={styles.Main}>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Add Admin </h1>
                        </div>
                        <Form className={styles.AddForm}>
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
                                <label value={this.state.adminAddress}>Admin Address</label>
                                <Input 
                                required 
                                label="addrress" 
                                labelPosition="right" 
                                onChange={event => this.setState({adminAddress : event.target.value})}/>
                            </Form.Field>
                            <Button primary onClick={this.onSubmit}>Assign!</Button>
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
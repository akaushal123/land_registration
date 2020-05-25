import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutSuperAdmin';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import styles from './addAdmin.module.css';
import factory from './../../ethereum/factory';
import web3 from './../../ethereum/web3';
import firebase from "../../components/firebaseAuth";
import * as fb from 'firebase';
import { Router } from '../../routes';

class AddAdmin extends Component {

    state = {
        village : "v1",
        district : "d1",
        state : "s1",
        adminAddress : '',
        buttonText : "Assign!",
        userAddress : "",
        errorMessage : '',
        loading : false
    }

    convertAddress = (address) => {
        if(!address)
            return address;
        return address.toLowerCase();;
    }

    async componentDidMount() {
        var userAddress = await ethereum.selectedAddress;
        userAddress = this.convertAddress(userAddress);
        this.setState({userAddress});
    }

    onSubmit = async () => {
        event.preventDefault();
        try{
            this.setState({loading : true});
            const userAddress = this.convertAddress(this.state.userAddress);
            const adminAddress = this.convertAddress(this.state.adminAddress);
            if(!userAddress){
                throw new Error("Plese Connect to Ethereum first");
            }

            await factory.methods.addAdmin(adminAddress,this.state.village).send({
                from : userAddress
            });

            var db = firebase.firestore();
            var userRef = db.collection("UserRoles").doc(adminAddress);
            
            await userRef.get().then( (doc) => {
                if (doc.exists) {
                    userRef.update({
                        villages: fb.firestore.FieldValue.arrayUnion({
                            address : this.state.userAddress,
                            village : this.state.village,
                            role : 'admin'
                        })
                    })
                    .then(function() {
                        console.log("Admin Added");
                    })
                } else {
                    console.log("Dont exits");
                    userRef.set({
                        villages : [{
                            address : this.state.userAddress,
                            village : this.state.village,
                            role : 'admin'
                        }]
                    })
                }
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
            
            this.setState({buttonText : "Added!!!", loading : false});
            //Router.pushRoute('/superAdmin');
        }catch(err) {
            this.setState({errorMessage : err.message.slice(0,50),loading : false});
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
                            <Button loading={this.state.loading} primary> {this.state.buttonText} </Button>
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
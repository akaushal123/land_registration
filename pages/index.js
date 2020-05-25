import React, { Component } from 'react';
import factory from './../ethereum/factory';
import Layout from '../components/Layout/Landing';
import styles from './index.module.css';
import firebase from './../components/firebaseAuth';
import { Link, Router } from './../routes';
import { Button } from 'semantic-ui-react';

class Index extends Component {
    state = {
        userAddress : '',
        loading : false
    };

    convertAddress = (address) => {
        if(!address)
            return address;
        return address.toLowerCase();
    };

    async componentDidMount() {
        const userAddress = ethereum.selectedAddress;
        this.setState({userAddress});    
    }

    connectEthereum = async () => {
        this.setState({loading : true});
        ethereum.enable();
        var userAddress =  await ethereum.selectedAddress;
        userAddress = this.convertAddress(userAddress);
        
        this.setState({userAddress});    
        
        var db = firebase.firestore();
        const dataRef = db.collection("UserRoles").doc(userAddress);
        var role ;
        await dataRef.get()
            .then( (doc) => {
                if (doc.exists) {
                    role = doc.data().role;
                } else {
                    role = 'user';
                }
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
        this.setState({loading : false});
            if(role === 'SA'){
            Router.pushRoute('/superAdmin');
        }
        else if(role === 'admin'){
            Router.pushRoute('/admin');
        }else {
            Router.pushRoute('/user');
        }

    }

    render() {
        return (
            <Layout>
                <div className={styles.Header}>
                    <div className={styles.LogoBox}>
                        <img src="/static/tiranga_national_emblem.png" alt="logo" />
                    </div>
                </div>
                <div className={styles.clearfix}/>
                <section className={styles.Main}>
                    <div className={styles.HeaderText}>
                        <h1 className={styles.HeroText}>
                            <span className={styles.HeroText__sub1}> Welcome to Online Land Registration </span>
                            <span className={styles.HeroText__sub2}> and Transfer of entitlement</span>
                            <span className={styles.HeroText__sub3} onClick={this.connectEthereum}>
                            <Button loading={this.state.loading} style={{fontSize : "20px", backgroundColor : "#fff"}} >Connect To Etherum</Button>
                            </span>
                        </h1>
                    </div>
                </section>
            </Layout>

        );
    }
}

export default Index;

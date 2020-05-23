import React, { Component } from 'react';
import factory from './../ethereum/factory';
import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';

class Index extends Component {
    async componentDidMount() {
        const response = await factory.methods.viewAssets().call();
        console.log(response);
    }

    render() {
        return (
            <Layout>
                <LoginForm/>
            </Layout>

        );
    }
}

export default Index;

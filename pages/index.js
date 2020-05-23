import React, { Component } from 'react';
import factory from './../ethereum/factory';

class Index extends Component {
    static async getInitialProps() {
        const response = await factory.methods.viewAssets().call();
        return { response };
    }

    render() {
        return (
            <div> Hello World Index! </div>
        );
    }
}

export default Index;
import React, { Component } from 'react';
import factory from './../ethereum/factory';

class Index extends Component {
    async componentDidMount() {
        const response = await factory.methods.viewAssets().call();
        console.log(response);
    }

    render() {
        return (
            <div> Hello World Index! </div>
        );
    }
}

export default Index;
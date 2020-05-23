import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { Container } from "semantic-ui-react";

const Layout = props =>{
    return (
        <Container>
            <Head>
                <link rel="icon" href="../static/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <link rel="apple-touch-icon" href="../static/logo.png" />
                <link rel="manifest" href="../manifest.json" />
                <title>Land Registration</title>
            </Head>
            <Header/>
            {props.children}
        </Container>
    );
};

export default Layout;

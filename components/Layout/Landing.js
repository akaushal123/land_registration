import React, { Component } from 'react';
import { Link } from '../../routes';
import Head from 'next/head';
import styles from './LayoutAdmin.module.css';
import { Container, StepTitle } from 'semantic-ui-react';

class LayoutAdmin extends Component {
    render() {
        return (
            <Container>
                <Head>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
                </Head>
                <div className={styles.Container}>
                {this.props.children}
                </div>
            </Container>
        );
    }
}

export default LayoutAdmin;
import React, { Component } from 'react';
import { Link } from '../../routes';
import Head from 'next/head';
import styles from './LayoutSuperAdmin.module.css';
import { Container, StepTitle } from 'semantic-ui-react';

class LayoutSuperAdmin extends Component {
    render() {
        return (
            <Container>
                <Head>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
                </Head>
                <div className={styles.Container}>
                    <div className={styles.Header}>
                        <div className={styles.LogoBox}>
                            <img src="/static/tiranga_national_emblem.png" alt="logo" />
                        </div>
                        <div className={styles.NavBox}>
                            <ul>
                                <li>
                                    <Link route="/superAdmin/addAdmin"><a href="#">Add Admin</a></Link>
                                </li>
                                <li>
                                    <Link route="/superAdmin/explore"><a href="#">Explore</a></Link>
                                </li>
                                <li>
                                    <Link route="/superAdmin/registerLand"><a href="#">Register Land</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.clearfix}></div>
                    
                    <div className={styles.Children}>
                    {this.props.children}
                    </div>
                    
                </div>
            </Container>
        );
    }
}

export default LayoutSuperAdmin;
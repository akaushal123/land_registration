import React, { Component } from 'react';
import Layout from './../../components/Layout/Layout';
import styles from './index.module.css';

class Index extends Component {
    render() {
        return (
            <Layout>
                <section className={styles.Main}>
                    <div className={styles.HeaderText}>
                        <h1 className={styles.HeroText}>
                            <span className={styles.HeroText__sub1}> Welcome to Online Land Registration </span>
                            <span className={styles.HeroText__sub2}> and Transfer of entitlement</span>
                            <span className={styles.HeroText__sub3}> SuperAdmin </span>
                        </h1>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Index;
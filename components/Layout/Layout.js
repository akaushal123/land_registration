import React, { Component } from 'react';
import Aux from './../../HOC/Aux';
import styles from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div className={styles.Container}>
                    <header className={styles.Header}>
                        <div className={styles.LogoBox}>
                            <img src="/static/tiranga_national_emblem.png" alt="logo" />
                        </div>
                        <div className={styles.NavBox}>
                            <ul>
                                <li> <a href="#"> Add Admin </a> </li>
                                <li> <a href="#"> Explore </a> </li>
                                <li> <a href="#"> Register Land </a> </li>
                            </ul>
                        </div>
                    </header>
                    <div className={styles.clearfix}></div>
                    
                    {this.props.children}
                    
                </div>
            </Aux>
        );
    }
}

export default Layout;
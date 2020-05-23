import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutSuperAdmin';
import { Form, Button, Input } from 'semantic-ui-react';
import styles from './registerLand.module.css';


class RegisterLand extends Component {
    render() {
        return (
            <Layout>
                <section className={styles.Main}>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Register Land </h1>
                        </div>
                        <Form className={styles.AddForm}>
                            <Form.Field>
                                <label>Village</label>
                                <Input type="text" required />
                            </Form.Field>
                            <Form.Field>
                                <label>District</label>
                                <Input type="text" required />
                            </Form.Field>
                            <Form.Field>
                                <label>State</label>
                                <Input type="text" required />
                            </Form.Field>
                            <Form.Field>
                                <label>Survey Number</label>
                                <Input type="number" required />
                            </Form.Field>
                            <Form.Field>
                                <label>Owner Address</label>
                                <Input label="addrress" labelPosition="right" required />
                            </Form.Field>
                            <Form.Field>
                                <label>Market Value</label>
                                <Input  />
                            </Form.Field>
                            <Button primary>Register</Button>
                        </Form>
                </section>
            </Layout>
        );
    }
}

export default RegisterLand;
import React, {Component} from 'react';
import {Form, Grid, Header, Button} from 'semantic-ui-react';
import Layout from '../../components/Layout'
import Head from "next/head";


class profile extends Component {

    state = {
        etherAddress: '',
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phoneNumber: '',
        building: '',
        street: '',
        state: '',
        region: '',
    };

    render() {
        const genderOptions = [
            {
                key: 'm',
                text: 'Male',
                value: 'Male'
            },
            {
                key: 'f',
                text: 'Female',
                value: 'Female'
            },
            {
                key: 'o',
                text: 'Other',
                value: 'Other'
            },
        ];
        const {state, region} = this.state;
        return (
            <Layout>
                <Head>
                    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"/>
                    <script src="//geodata.solutions/includes/statecity.js"/>
                </Head>
                <div>
                    <Header size={'large'} aligntext={'center'}>Edit Profile</Header>

                    <Grid textAlign={'center'} style={{height: '100vh'}}>
                        <Grid.Column style={{maxWidth: '80vw'}}>
                            <Form size={'medium'}>
                                <Header size={'medium'}>Ether Details</Header>
                                <Form.Input fluid placeholder={'Ether Address'} label={'Ether Address'} required/>
                                <Header size={'medium'}>Personal Information</Header>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid placeholder={'First Name'} label={'First Name'} required/>
                                    <Form.Input fluid placeholder={'Middle Name'} label={'Middle Name'}/>
                                    <Form.Input fluid placeholder={'Last Name'} label={'Last Name'} required/>
                                </Form.Group>
                                <Form.Group widths={'equal'}>
                                    <Form.Dropdown fluid placeholder={'Gender'} label={'Gender'} selection
                                                   options={genderOptions}/>
                                    <Form.Input fluid placeholder={'Email Address'} label='Email' required
                                                type={'email'}/>
                                    <Form.Input fluid placeholder={'Contact'} required label='Contact Number'
                                                type={'number'}/>
                                </Form.Group>
                                <Header size={'medium'}>Address detail</Header>
                                <Form.Group widths={'equal'}>
                                    <Form.Input fluid placeholder={'Building Number'} label={'Building Number'}/>
                                    <Form.Input fluid placeholder={'Street'} label={'Street'}/>
                                </Form.Group>
                                <Form.Group widths={'equal'}>
                                    <input type="hidden" name="country" id="countryId" value="IN"/>
                                    <select name="state" className="states order-alpha" id="stateId">
                                        <option value="">Select State</option>
                                    </select>
                                    <select name="city" className="cities order-alpha" id="cityId">
                                        <option value="">Select City</option>
                                    </select>

                                </Form.Group>
                                <Form.Group>
                                    <Button color={'red'} fluid size='large'>
                                        Update Profile
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Grid.Column>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default profile;

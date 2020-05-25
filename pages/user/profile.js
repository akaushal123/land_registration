import React, {Component} from 'react';
import {Form, Grid, Header, Button, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory';
import Head from "next/head";
import firebase from '../../components/firebaseAuth';

class profile extends Component {

    state = {
        etherAddress: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        contact: '',
        building: '',
        street: '',
        state: '',
        village: '',
        city: '',
        render: false,
        success: '',
    };

    componentDidMount = async () => {
        const userAddress = await ethereum.selectedAddress;
        this.setState({etherAddress: userAddress});

        var db = firebase.firestore();
        var data = {};

        db.collection("UserData").doc(userAddress).get().then(doc => {
            if (doc.exists) {
                  data = doc.data();
                 console.log('fetch', data);
                this.setState(data );
                console.log(this.state.state, this.state.city);
            }else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    };

    onSubmit = (event)=> {
        event.preventDefault();
        var db = firebase.firestore();
        db.collection("UserData").doc(this.state.etherAddress).set({
            etherAddress: this.state.etherAddress,
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            email: this.state.email,
            contact: this.state.contact,
            building: this.state.building,
            street: this.state.street,
            village: this.state.village,
            state: this.state.state,
            city: this.state.city,
        })
            .then(() => {
                console.log("Document written with ID");
                this.setState({render:true, success:true});
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                // this.setState({render: true,success:false});
            });
    };

    renderMessage() {
        return ( this.state.success ?
                    <Message
                        success
                        header='Success'
                        content='Data updated successfully'
                    /> :
                    <Message error
                                 header='Error'
                                 content='Data not updated'
                    />
        );
    }

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
        return (
            <Layout>
                <Head>
                    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"/>
                    <script src="//geodata.solutions/includes/statecity.js"/>
                </Head>
                <div>
                    <Header size={'large'} aligntext={'center'} center>Profile</Header>

                    <Grid textAlign={'left'} style={{height: '100vh'}}>
                        <Grid.Column style={{maxWidth: '80vw'}}>

                            <Form size={'small'} onSubmit={this.onSubmit}>
                                <Header size={'medium'} textAlign={'center'}>Ether Details</Header>
                                <Form.Input fluid label={'Ether Address'} required style={{textColor:'red'}}
                                            value={this.state.etherAddress} disabled/>
                                <Header size={'medium'} textAlign={'center'}>Personal Information</Header>

                                <Form.Group widths='equal'>
                                    <Form.Input fluid placeholder={'First Name'} label={'First Name'} required value={this.state.firstName}
                                                onChange={event => this.setState({firstName: event.target.value})}/>
                                    <Form.Input fluid placeholder={'Middle Name'} label={'Middle Name'} value={this.state.middleName}
                                                onChange={event => this.setState({middleName: event.target.value})}/>

                                    <Form.Input fluid placeholder={'Last Name'} label={'Last Name'} required value={this.state.lastName}
                                                onChange={event => this.setState({lastName: event.target.value})}
                                    />
                                </Form.Group>
                                <Form.Group widths={'equal'}>
                                    <Form.Select fluid placeholder={'Gender'} label={'Gender'} selection
                                                   options={genderOptions} value={this.state.gender}
                                                    onChange={(event,data) => {this.setState({gender: data.value})}}/>

                                    <Form.Input fluid placeholder={'Email Address'} label='Email' required type={'email'} value={this.state.email}
                                                onChange={event => {this.setState({email: event.target.value})}}/>

                                    <Form.Input fluid placeholder={'Contact'} required label='Contact Number' type={'number'} value={this.state.contact}
                                    onChange={event => {this.setState({contact: event.target.value})}}/>
                                </Form.Group>

                                <Header size={'medium'} textAlign={'center'}>Address detail</Header>
                                <Form.Group widths={'equal'}>
                                    <Form.Input fluid placeholder={'Building Number'} label={'Building Number'} required value={this.state.building}
                                    onChange={event => this.setState({building: event.target.value})}/>
                                    <Form.Input fluid placeholder={'Street'} label={'Street'} required value={this.state.street}
                                    onChange={event => this.setState({street: event.target.value})}/>
                                </Form.Group>

                                <Form.Group widths={'equal'}>

                                    <Form.Input fluid placeholder={'Village'} label={'Village'} required value={this.state.village}
                                                onChange={event => this.setState({village: event.target.value})}/>
                                    <Form.Input fluid placeholder={'City'} label={'City'} required value={this.state.city}
                                                onChange={event => this.setState({city: event.target.value})}/>
                                    <Form.Input fluid placeholder={'State'} label={'State'} required value={this.state.state}
                                                onChange={event => this.setState({state: event.target.value})}/>

                                    {/*<input type="hidden" name="country" id="countryId" value="IN"/>*/}
                                    {/*<select name="state" value={this.state.state} className="states order-alpha" id="stateId" required*/}
                                    {/*        onChange={event => this.setState({state: event.target.value})}>*/}
                                    {/*    <option value="">Select State</option>*/}
                                    {/*</select>*/}
                                    {/*<select name="city" value={this.state.city} className="cities order-alpha" id="cityId" required*/}
                                    {/*        onChange={event=>this.setState({city: event.target.value})}>*/}
                                    {/*    <option value="">Select City</option>*/}
                                    {/*</select>*/}

                                </Form.Group>
                                <Form.Group>
                                    <Button color={'red'} fluid size='large'>
                                        Update Profile
                                    </Button>
                                </Form.Group>
                            </Form>
                            {this.state.render ? this.renderMessage() : null}
                        </Grid.Column>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default profile;

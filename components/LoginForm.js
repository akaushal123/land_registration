import React,{ Component } from 'react'
import ReactDOM from 'react-dom';
import {Button, Form, Grid, Header, Image, Message, Segment, Select} from 'semantic-ui-react';
import Layout from '../components/Layout';

class LoginForm extends Component{

    render(){
        const options = [
            {
                key: 'super-admin',
                text: 'Super Admin',
                value: 'Super Admin'
            },
            {
                key: 'admin',
                text: 'Admin',
                value: 'Admin'
            },
            {
                key: 'public',
                text: 'Public',
                value: 'Public'
            },

        ];
         return (
                 <Grid textAlign={'center'} style={{height: '100vh'}} verticalAlign={'middle'}>
                     <Grid.Column style={{maxWidth: 450}}>
                         <Header as={'h2'} color={'red'} textAlign={'center'}>
                             <Image src={'static/logo.png'}/> Login
                         </Header>
                         <Form size={'large'}>
                             <Segment stacked>
                                 <Form.Input fluid icon='user' iconposition={'left'} placeholder={'Address'}/>
                                 <Form.Input fluid icon='lock' iconposition={'left'} placeholder={'Password'}
                                             type={'password'}/>
                                 <Form.Field fluid icon='id badge' iconposition={'left'} placeholder={'Role'} control={Select} options={options}/>
                                 <Button color={'red'} fluid size='large'>
                                     Login
                                 </Button>
                             </Segment>
                         </Form>
                     </Grid.Column>
                 </Grid>
        );
    }

}

export default LoginForm;

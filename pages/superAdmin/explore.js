import React, { Component } from 'react';
import Layout from './../../components/Layout/LayoutSuperAdmin';
import styles from './explore.module.css';
import factory from './../../ethereum/factory';
import { Form, Button, Input, Message } from 'semantic-ui-react';

class Explore extends Component {
    state = {
        village : "v2",
        district : "d1",
        state : "s1",
        address : "",
        userAddress : "",
        surveyNumber : "123",
        errorMessage : '',
        landInfo : null,
        loading : false
    }

    reqStatus = ["Not set","Pending","Reject","Approved"];

    async componentDidMount() {
        const userAddress = await ethereum.selectedAddress;
        this.setState({userAddress : userAddress});
    }

    searchLand = async () => {
        event.preventDefault();
        try{
            this.setState({loading : true});
            const computedId = await factory.methods.computeId(
                this.state.state,this.state.district,this.state.village,
                this.state.surveyNumber
            ).call();
            
            const landInfo = {
                currentOwner : "",
                isAvailable : "",
                requester : "",
                requestStatus : ""
            };

            const info = await factory.methods.landInfoAdmin(computedId).call();
            
            if(!info) {
                throw new Error("No such record");
            }

            landInfo.currentOwner = info[0];
            landInfo.isAvailable = info[1] ? "true" : "false";
            landInfo.requester = info[2];
            landInfo.requestStatus = info[3];
            
            console.log(landInfo);

            this.setState({landInfo : landInfo , loading : false});
            
        }catch(err) {
        }
    }

    searchUser = async () => {
        
    }

    render() {
        return (
            <Layout>
                <section className={styles.Main}>
                    <div>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Search Any Land </h1>
                        </div>
                        
                        <Form className={styles.AddForm} onSubmit={this.searchLand} error={!!this.state.errorMessage}>
                            <div className={["ui","grid"].join(' ')}>
                                <div className={["three","wide","column"].join(' ')}>
                                    <Form.Field className={styles.SearchField}>
                                        <label>Village</label>
                                        <Input 
                                        required 
                                        value={this.state.village} 
                                        onChange={event => this.setState({village : event.target.value})}
                                        />
                                    </Form.Field>
                                </div>
                                <div className={["three","wide","column"].join(' ')}>
                                    <Form.Field>
                                        <label>District</label>
                                        <Input 
                                        value={this.state.district} 
                                        onChange={event => this.setState({district : event.target.value})}
                                        />
                                    </Form.Field>
                                </div>
                                <div className={["three","wide","column"].join(' ')}>
                                <Form.Field>
                                    <label>State</label>
                                    <Input 
                                    value={this.state.state} 
                                    onChange={event => this.setState({state : event.target.value})}
                                    />
                                </Form.Field>
                                </div>
                                <div className={["three","wide","column"].join(' ')}>
                                <Form.Field>
                                    <label>Survey Number</label>
                                    <Input 
                                    value={this.state.surveyNumber} 
                                    onChange={event => this.setState({surveyNumber : event.target.value})}
                                    />
                                </Form.Field>
                                </div>
                                <div className={["four","wide","column"].join(' ')}>
                                    <div className={styles.BtnSearch}>
                                        <Message error header="Oops!" content={this.state.errorMessage} />
                                        <Button primary loading={this.state.loading}> Search </Button>
                                    </div>
                                </div>
                            </div>                        
                        </Form>
                    </div>
                    <h3 style={{margin: "5px 0px 5px 50px"}}> OR </h3>
                    <div>
                        <div className={styles.HeaderText}>
                            <h1 className={styles.HeroText}> Search Any User </h1>
                        </div>
                        <Form className={styles.AddForm} onSubmit={this.searchUser} error={!!this.state.errorMessage}>
                            <div className={["ui","grid"].join(' ')}>
                                <div className={["seven","wide","column"].join(' ')}>
                                    <Form.Field className={styles.SearchField}>
                                        <label>User Ethereum Address</label>
                                        <Input 
                                        required
                                        value={this.state.address} 
                                        onChange={event => this.setState({address : event.target.value})}
                                        />
                                    </Form.Field>
                                </div>
                                
                                <div className={["four","wide","column"].join(' ')}>
                                    <div className={styles.BtnSearch}>
                                        <Message error header="Oops!" content={this.state.errorMessage} />
                                        <Button primary> Search </Button>
                                    </div>
                                </div>
                            </div>                        
                        </Form>
                    </div>
                
                    { this.state.landInfo!==null ? 
                    <div className={styles.LandInfoCard}>
                        <div className={["ui","cards"].join(' ')}>
                            <div style={{wordWrap : "break-word", width : "70%"}} className="card">
                                <div className="content">
                                    <div className="header">Currnet Owner's Address</div>
                                    <div className="meta">{this.state.landInfo.currentOwner}</div>
                                    <div className="description">
                                        <h3 className={["ui","header"].join(' ')}>Village : {this.state.village} </h3>
                                        <h3 className={["ui","header"].join(' ')}>District : {this.state.district} </h3>
                                        <h3 className={["ui","header"].join(' ')}>State : {this.state.state} </h3>
                                        <h3 className={["ui","header"].join(' ')}>Survey Number : {this.state.surveyNumber} </h3>
                                        <h3 className={["ui","header"].join(' ')}>Is Available : {this.state.landInfo.isAvailable} </h3>
                                        <h3 className={["ui","header"].join(' ')}>Requester : {this.state.landInfo.requester} </h3>
                                        <h3 className={["ui","header"].join(' ')}>Request Status : {this.reqStatus[this.state.landInfo.requestStatus]} </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        : null
                    }
                </section>
            </Layout>
        
        );
    }
}

export default Explore;
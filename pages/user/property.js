import React,{ Component } from 'react';
import factory from '../../ethereum/factory';
import {Card} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import {Link} from '../../routes';

class Property extends Component{

<<<<<<< HEAD
    async componentDidMount() {
        try{
            console.log(ethereum.selectedAddress);
            const property = await factory.methods.viewAssets().call();
            console.log('property', property);
            return {property};
        } catch(e){
            console.log(e);
        }
    }
=======
    state = {
        loaded: false,
        properties: []
    };

     async componentDidMount() {
         const properties = await factory.methods.viewAssets().call({
             from: ethereum.selectedAddress
         });
         this.setState({loaded: true, properties});
         return {properties};
     }
>>>>>>> master

     renderProperties() {
         console.log('yes');
         // if(this.props.properties){
             const properties = this.state.properties.map(surveyId => {
                 return {
                     header: surveyId,
                     description: (
                         <Link route={`/explore/${surveyId}`}>
                             <a>View Property</a>
                         </Link>
                     ),
                     fluid:true,
                     style: {overflowWrap: 'break-word'}
                 };
             });
             return <Card.Group items={properties}/>;
     }

     render() {
         return (
             <Layout>
                 <div>
                     <h3>Properties</h3>
                     {this.renderProperties()}
                 </div>
             </Layout>
         );
     }
}

export default Property;

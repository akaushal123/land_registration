import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0xBCfaD3ef0F1B3329DABB5BDf730849Ff4c96528A';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

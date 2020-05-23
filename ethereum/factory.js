import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0x006E909b00229360bDC671d6d41607ECE6A422C4';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

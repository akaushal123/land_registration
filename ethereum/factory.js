import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0xf6c343e57ee54ecbdd1e843cfefd52b2310201d8';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

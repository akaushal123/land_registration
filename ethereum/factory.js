import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0x77c897082c85db44d17e4106f923836451e45b23';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

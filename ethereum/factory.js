import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0x5f81d511164BAdAA029654fE967f10EA48DCB018';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

// const address = '0x0c2ff53340630cd75dc3c8b5ac36c0b549622ee5';
const address = '0xB2E25Bf91447c91F404CaFa07e5519221932cAa3';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

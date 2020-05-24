import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0x496090ce1a0CA0354EB25cDe2234d399f5b489aF';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    address
);

export default instance;

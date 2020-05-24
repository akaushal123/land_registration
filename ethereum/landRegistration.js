import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

export default (address) => {
    return new web3.eth.Contract(
        LandRegistration.interface,
        address
    );
};

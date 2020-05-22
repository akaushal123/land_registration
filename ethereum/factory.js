import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0x347dDF048B4FC7676EBF25855195BCD2eF1385B6';

const instance = new web3.eth.Contract(
    JSON.parse(LandRegistration.interface),
    address
);

export default instance;

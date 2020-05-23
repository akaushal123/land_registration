import web3 from './web3';
import LandRegistration from './build/LandRegistration.json';

const address = '0x0dd48Ba4Dc9e058471e9B5F57B6A41ACbE345f69';

const instance = new web3.eth.Contract(
    LandRegistration.interface,
    '0x0dd48Ba4Dc9e058471e9B5F57B6A41ACbE345f69'
);

export default instance;

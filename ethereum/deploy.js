const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledLandRegistration = require('./build/LandRegistration.json');

const mnemonic = 'edit steak lake outside polar stock retire guess gloom finger ring fox';
const linkEndPoint = 'https://rinkeby.infura.io/v3/1062a6440acb41acbdb0b4f33305fc04';

const provider = new HDWalletProvider(
    mnemonic,linkEndPoint
);

const web3 = new Web3(provider);

const deploy = async () => {
    var accounts;
    try{
        accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0]);
    } catch(e){
        console.log(e);
    }
    try{
        const result = await new web3.eth.Contract(compiledLandRegistration.interface)
            .deploy({data: `0x${compiledLandRegistration.bytecode}`})
            .send({from: accounts[0]});

        console.log('Contract deployed at ', result.options.address);
        console.log('Contract Owner : ', accounts[0]);
    } catch(e) {
        console.log(e);
    }
};

deploy();

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const landRegistrationPath = path.resolve(__dirname, 'contract', 'LandRegistration.sol');
const source = fs.readFileSync(landRegistrationPath, 'utf8');

const input =  {
    language: 'Solidity',
    sources: {
        'LandRegistration.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};
/*
const { abi: interface, evm: { bytecode: { object } } } = JSON.parse(solc.compile(JSON.stringify(input))).contracts['LandRegistration.sol'].LandRegistration;

module.exports = {interface, object};*/


const output = JSON.parse(solc.compile(JSON.stringify(input)), 1); //solc.compile(source, 1).contracts;

//console.log(output['LandRegistration.sol'].LandRegistration.abi);
fs.ensureDirSync(buildPath);
/*
// console.log(output.contracts);
// console.log(output.contracts['LandRegistration.sol'].landRegistration.evm.bytecode.object);
*/
for (let contract in output.contracts['LandRegistration.sol']){
    var { abi:interface, evm: { bytecode: { object } } } = output.contracts['LandRegistration.sol'][contract];
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        { interface, bytecode : object}
    );
}


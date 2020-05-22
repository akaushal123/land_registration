import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    //in browser and metamask up and running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on server and user not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/1062a6440acb41acbdb0b4f33305fc04'
    );
    web3 = new Web3(provider);
}

export default web3;

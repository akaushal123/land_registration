import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    //in browser and metamask up and running
    console.log('Metamask');
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on server and user not running metamask
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/716f78cc121c40d299539ffe4442b887');
    web3 = new Web3(provider);
    console.log('Errrrrooooooooorrrrr!!!!!!!!');
}

export default web3;

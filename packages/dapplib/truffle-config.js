require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind artwork guess cloth fresh spirit'; 
let testAccounts = [
"0xe725464aa9400d541f5f86fc70d0bb8bdde841a33f2a95f8802c52b34a9a346d",
"0xa66b08cfe6b45bb36c74e47bca762178c5f2964533bbda9d29e1e8d00e3b0f9d",
"0x4fb3de81a89ae41c52c8ff63f12e8bdb9eec33aadbcb429e13526ed0e25d48e5",
"0x311b9c8a2366d88ccafcfc87dc32a3f38ed005ecca417b2f7f8ec2e531c18d99",
"0x9a42ba88cc02c1be02b6b6be730e817f01b6827ebfe07c6f69234679cc7a311c",
"0x8285eb846a0e8da963c2a72f71acd2531d307b8f81f3c3cfab8ce51e13863d97",
"0xdc3a0b24508377f24471708a95035d697c79fedb64f67f9a2c0aa837569a2bcc",
"0xf764e8dadb8e5f3250b2f61886aec1a353332f8ecb0e8e297a6cd1b9ae8164ed",
"0x1cbac875be322b70799c7d78e59f90c3c3d8241ea44b2c8511befd4e93be469b",
"0x9fae29d012fd20c1bbf1e2398dd784edf9e0672536aacdcb69e0ec09cc043470"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


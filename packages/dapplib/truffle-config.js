require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind pulp hunt loan outer sketch'; 
let testAccounts = [
"0x11733c674136fc0ac0937691f277f7b607eeabc72926929a8db4a565341327de",
"0x56a7055861d3bd09e914ddd389130161d34ea79c06ccbc6ef27d5fd5fecfeee3",
"0x6b79aa204c10958938e4f54ddc5a25c0643d9192150a86f9252448f79a827117",
"0xfc88eda97ccd3ab3be7ac16d2e0f54ad7219de433705913fb5be9082799e66d6",
"0x10a782f0baf2045dba983e1687fa506765cd6050dfe2a9c2cbbcdf27483ca137",
"0xb16844e3d479c377592c0f432d30ffe7a8be89b8efd4518099f573ecd9bf7414",
"0x7b44e6a4781a9d95ff8fa27d2d8f3b423dcac9db3b43f0b7baa0004cf88db5f0",
"0xc482bc90ae64e4e44cbd4f757688c7f95d4e4a488654f1aae2fdffe4ea5e64ae",
"0xe9e63aa73421cc95cb55f1c59865c0878a13327a86125b09064914a7fa6a9683",
"0xa3640ee01b822c82101bc892dfeb82bc2903e754fd3f1d3603a2b56787558499"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



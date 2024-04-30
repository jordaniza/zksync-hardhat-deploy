import * as dotenv from "dotenv";



import {  HardhatUserConfig } from "hardhat/config";

// import "hardhat-deploy";

import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-node";
// import '@nomicfoundation/hardhat-chai-matchers';
import "@nomicfoundation/hardhat-chai-matchers"
dotenv.config();

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.4.0", // Uses latest available in https://github.com/matter-labs/zksolc-bin/
    compilerSource: 'binary',
    settings: {},
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      blockGasLimit: 3000000000, // really high to test some things that are only possible with a higher block gas limit
      gasPrice: 80000000000,
      allowUnlimitedContractSize: true,
      // deploy: ["./deploy"],
      zksync: true
    },
    zkSyncLocal: {
      url: "http://127.0.0.1:8011",
      ethNetwork: "http://127.0.0.1:8545",
      zksync: true,
      accounts: [
        // This is the rich account that already has lots of funds on the chain of port 8545
        '0x3d3cbc973389cb26f657686445bcc75662b415b656078503592ac8c1abb8810e',
        // '0xac1e735be8536c6534bb4f17f06f6afc73b2b5ba84ac2cfb12f7461b20c0bbe3'
      ],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
    deploy: "./deploy",
  },
};

export default config;

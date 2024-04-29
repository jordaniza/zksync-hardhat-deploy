import * as dotenv from "dotenv";

import "hardhat-deploy";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-node";

import {  HardhatUserConfig } from "hardhat/config";

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
      zksync: true,
      allowUnlimitedContractSize: true,
      deploy: ["./deploy"]
    }
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

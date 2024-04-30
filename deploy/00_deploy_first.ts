import daoArtifactJson from "../artifacts/src/Test.sol/Test.json";
import { ArtifactData, DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ethers } from "ethers";
import { getWallet } from "@matterlabs/hardhat-zksync-deploy/src/plugin";
import { loadDeployment } from "@matterlabs/hardhat-zksync-deploy/src/deployment-saver";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet } from "zksync-ethers";
// import * as hre from "hardhat";

/** NOTE:
 * Create a (Managing DAO) with no Plugin, to be the owner DAO for the framework, temporarily.
 */

// 0x4B3B4CA85A86C47A098A224000000000
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log(`\nDeploying ManagingDao.`);

  // ==================HARDHAT-ZKSYNC-DEPLOY==============
  // const { deployments, deployer } = hre;
  // const { deploy } = deployments;
  // // const { deployer } = await getNamedAccounts();
  // const daoArtifactData = daoArtifactJson as ArtifactData;

  // console.log(await deployer.getWallet())
  // // console.log(eth)
  // const t = await deployer.loadArtifact("fuck");
  // const b = await deployer.deploy(t);
  // console.log(b.address);

  // ==================HARDHAT-DEPLOY==============
  // const { deployments, getNamedAccounts } = hre;
  // const { deploy } = deployments;
  // const { deployer } = await getNamedAccounts();

  // console.log(deployer, ' deployer123')
  // console.log(deployer, ' omg')
  // const contract = await deploy("Test", {
  //   contract: daoArtifactJson,
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   proxy: {
  //     owner: deployer,
  //     proxyContract: "ERC1967Proxy",
  //     proxyArgs: ["{implementation}", "{data}"],
  //     // execute: {
  //     //   init: {
  //     //     methodName: "initialize",
  //     //     args: [],
  //     //   },
  //     // },
  //   },
  // });

  

  // console.log(contract.address)

  // ==============HARDHAT-ZKSYNC-UPGRADEABLE========
  // mnemonic for local node rich wallet
  // const testMnemonic =
  //   "stuff slice staff easily soup parent arm payment cotton trade scatter struggle";
  // const zkWallet = Wallet.fromMnemonic(testMnemonic);

  // const deployer = new Deployer(hre, zkWallet);

  // const contract = await deployer.loadArtifact("Test");
  // const box = await hre.zkUpgrades.deployProxy(
  //   deployer.zkWallet,
  //   contract,
  //   [42],
  //   {
  //     initializer: "initialize",
  //   }
  // );

  // Load compiled contract info
  // const contractArtifact = await hre.artifacts.readArtifact("Test");

  // console.log("oe1234");
  // // // Initialize contract instance for interaction
  // const contract = new ethers.Contract(
  //   b.address,
  //   t.abi,
  //   await deployer.getWallet() // Interact with the contract on behalf of this wallet
  // );

  // console.log("oe1255");

  // console.log(await deployments.get("Test"));

  const { deployments } = hre;
  const { deploy } = deployments;
  const {deployer} = await hre.getNamedAccounts()
  // const { deployer } = await getNamedAccounts();
  const daoArtifactData = daoArtifactJson as ArtifactData;

  console.log(deployer, '')
  // hre.console.log(await loadDeployment(hre, "Test"));
  await deploy("Test", {
    contract: daoArtifactData,
    from: deployer,
    args: [],
    log: true,
  });
};
export default func;
func.tags = ["New", "ManagingDao"];

import * as hre from "hardhat";
import {Test__factory} from '../typechain/factories/Test__factory'
import { Wrapper } from "./Wrapper";
import { Test } from "../typechain/Test";
import { expect } from "chai";
import { Wallet, Provider, Contract } from "zksync-ethers";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

describe("Test", function () {
  let k: Contract;
  beforeEach(async () => {
    // const contract = (await new Wrapper().deploy("Test")) as Test;
    // console.log(contract?.address, ' sss')

    // console.log((await contract.z()).toString(), ' first')
    // await contract.setHere(2020202)
    // console.log((await contract.z()).toString(), ' second')

    const { deployments, deployer } = hre;

    // // console.log(await deployer.getWallet())
    // // // console.log(eth)
    const t = await deployer.loadArtifact("Test");
    k = await deployer.deploy(t)

    // const tx = await k.oe();
    await expect(k.failsHere()).to.be.revertedWith("failMessage")
    
    // console.log(b.address);
  });

  it("oe", async () => {

  })

  // it("Should revert", async function () {
  //   const p = new Provider("http://localhost:8011");
  //   const w = new Wallet("0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110", p);
  //   const deploy = new Deployer(hre, w);

  //   const artifact = await deploy.loadArtifact("Test");
  //   const contract = await deploy.deploy(artifact, []);


  //   await expect(contract.oe()).to.be.revertedWith("Revert with a payable error message string");
  // });

  // it("check1", async () => {
  //   const ttt = await hre.deployments.get('Test')
  //   let k = Test__factory.connect(ttt.address, await hre.deployer.getWallet())
  //   console.log((await k.z()).toString())
  //   await k.setHere(1999)
  //   console.log((await k.z()).toString())
  // })

  // it("check2", async () => {
  //   const ttt = await hre.deployments.get('Test')
  //   let k = Test__factory.connect(ttt.address, await hre.deployer.getWallet())
  //   console.log((await k.z()).toString())
  //   await k.setHere(1999)
  //   console.log((await k.z()).toString())
  // })

  // it("check3", async () => {
  //   const ttt = await hre.deployments.get('Test')
  //   const {deployer} = await hre.getNamedAccounts()
  //   let k = Test__factory.connect(ttt.address, await hre.deployer.getWallet())
  //   console.log((await hre.deployer.getWallet()).getAddress(), deployer, await k.sender())
    
  // })
});

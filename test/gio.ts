import * as hre from "hardhat";
import { expect } from "chai";
import { Contract } from "zksync-ethers";

describe("Test", function () {
  let contract: Contract;
  beforeEach(async () => {
    const { deployer } = hre;
    const loadedArtifact = await deployer.loadArtifact("Test");
    contract = await deployer.deploy(loadedArtifact);

    console.log(hre.upgrades);
    // const upgrades = await import("@openzeppelin/hardhat-upgrades");
    // if (!upgrades) throw new Error("No upgrades");
  });

  // this will fail
  it("no bueno", async () => {
    // await expect(contract.failsHere()).to.be.revertedWithCustomError(contract, "Hell");
    // await expect(contract.failsHere()).to.be.revertedWithCustomError(contract, "Hell").withArgs(12);
  });
  // this will not
  it("hacky bueno", async () => {
    // await expect(contract.failsHere()).to.be.revertedWith("failMessage");
  });
});

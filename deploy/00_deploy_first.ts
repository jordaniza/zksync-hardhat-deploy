import daoArtifactJson from "../build/artifacts-zk/src/Test.sol/Test.json";
import { ArtifactData, DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre;
  const { deploy } = deployments;
  const {deployer} = await hre.getNamedAccounts()
  const daoArtifactData = daoArtifactJson as ArtifactData;

  console.log(deployer, ' great);')
  await deploy("Test", {
    contract: daoArtifactData,
    from: deployer,
    args: [],
    log: true,
  });
};
export default func;
func.tags = ["New", "ManagingDao"];

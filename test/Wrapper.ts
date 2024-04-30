import hre from "hardhat";
export class Wrapper {
  static async deploy(artifactName: string) {
    if (
      hre.network.name == "zkLocalTestnet" ||
      hre.network.name == "zkSyncLocal"
    ) {
        console.log("coming into zksync")
        const { deployer } = hre;
        const artifact = await deployer.loadArtifact(artifactName);
        const contract = await deployer.deploy(artifact);
        return contract;
    } else {
        console.log("coming into normal one")
        const {ethers  } = hre
        const signers = await ethers.getSigners()
        const artifact = await hre.artifacts.readArtifact(artifactName)
        const contract = (new ethers.ContractFactory(artifact.abi, artifact.bytecode, signers[0])).deploy()
        return contract;
    }
  }
}
import * as hre from "hardhat";

describe("Test", function () {
  beforeEach(async () => {
    await hre.deployments.fixture(); // ensure you start from a fresh deployments
    const Token = await hre.deployments.get('Test'); 
    console.log(Token, ' kkk')
  });

  it("check", async () => {

  })
});

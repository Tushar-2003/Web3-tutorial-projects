import hre from "hardhat";
import { NFTee__factory } from "../typechain-types";



async function main() {
  const nftContract = await hre.ethers.deployContract("NFTee")

  await nftContract.waitForDeployment();

  console.log("NFT Contract Address:", nftContract.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(()=>process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

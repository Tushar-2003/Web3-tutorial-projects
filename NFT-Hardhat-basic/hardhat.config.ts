import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { string } from "hardhat/internal/core/params/argumentTypes";
import dotenv from "dotenv";
dotenv.config();


const config: any = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.QUICKNODE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};

export default config;

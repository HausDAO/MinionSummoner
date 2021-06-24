import { ethers } from "hardhat";
import {env} from "../config";


async function main() {
  const accounts = await ethers.getSigners();

  console.log("Accounts:", accounts.map(a => a.address));
  
  console.log({env})

  const ERC721 = await ethers.getContractFactory("ERC721Minty");
  console.log('ready for deploy')
  const erc721 = await ERC721.deploy("Mumbai Minty Genesis Collection", "MINTY-testnet");
  console.log('waiting for deployment')

  console.log({erc721})

  await erc721.deployed();

  console.log("Greeter deployed to:", erc721.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

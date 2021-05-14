const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const IERC20 = require("../build/contracts/interfaces/IERC20.sol/IERC20.json");
const IMoloch = require("../build/contracts/interfaces/IMOLOCH.sol/IMOLOCH.json");
const Moloch = require("../build/contracts/test-helper/Molochv21.sol/Moloch.json");
const MolochFactory = require("../build/contracts/test-helper/Molochv21.sol/MolochSummoner.json")
const Minion = require("../build/contracts/Minion.sol/Minion.json");
const minionFactory = require("../build/contracts/MinionFactory.sol/MinionFactory.json");

const { deployMockContract } = waffle;

const zeroAddress = '0x0000000000000000000000000000000000000000'

const _1 = new ethers.BigNumber.from('1')
const _1e18 = new ethers.BigNumber.from('1000000000000000000') // 1e18
const _100e18 = new ethers.BigNumber.from('100000000000000000000') // 10e18

async function blockTime () {
  const block = await web3.eth.getBlock('latest')
  return block.timestamp
}

async function snapshot () {
  return network.provider.send('evm_snapshot', [])
}

async function restore (snapshotId) {
  return network.provider.send('evm_revert', [snapshotId])
}

async function forceMine () {
  return network.provider.send('evm_mine', [])
}

const deploymentConfig = {
  'PERIOD_DURATION_IN_SECONDS': 60,
  'VOTING_DURATON_IN_PERIODS': 5,
  'GRACE_DURATON_IN_PERIODS': 2,
  'PROPOSAL_DEPOSIT': 10,
  'DILUTION_BOUND': 3,
  'PROCESSING_REWARD': 1,
  'TOKEN_SUPPLY': _100e18
}

async function moveForwardPeriods (periods) {
  await blockTime()
  const goToTime = deploymentConfig.PERIOD_DURATION_IN_SECONDS * periods
  await network.provider.send('evm_increaseTime', [goToTime])
  await forceMine()
  await blockTime()
  return true
}

function addressArray(length) {
  // returns an array of distinct non-zero addresses
  let array = []
  for (let i = 1; i <= length; i++) {
    array.push('0x' + (new BN(i)).toString(16, 40))
  }
  return array
}

describe("Minion", function() {
    let molochFactory;
    let moloch;
    let minionFactory;
    let minion;
    let mockToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function() {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        mockToken = await deployMockContract(owner, IERC20.abi);

        const Minion = await ethers.getContractFactory("Minion")
        minion = await Minion.deploy()
        await minion.deployed()

        const MinionFactory = await ethers.getContractFactory("MinionFactory")
        minionFactory = await MinionFactory.deploy(minion.address)
        await minionFactory.deployed()

        const Moloch = await ethers.getContractFactory("Moloch")
        moloch = await Moloch.deploy()
        await moloch.deployed()

        const MolochFactory = await ethers.getContractFactory("MolochSummoner")
        molochFactory = await MolochFactory.deploy(moloch.address)
        await molochFactory.deployed()

        const testMoloch = await molochFactory.summonMoloch([owner, addr1], [mockToken], 60, 5, 5, 10, 3, 9, [1,1])
        testMinion = await minionFactory.summonMinion(testMoloch, "test")

    });

    it("Should deploy with correct data", async function() {
        expect(await testMinion.moloch()).to.equal(testMoloch);
    });
}); 


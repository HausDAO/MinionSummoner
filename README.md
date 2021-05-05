# MinionSummoner
Summon All the Minions

## Summoning 
Summon a minion for your DAO, give it a name, just 'cause this is a vanilla minion (the OG) doesn't mean it doesn't deserve some spice. 

Summoning a minion is easy. The only arguments the summon function takes are the address of the moloch it will minion for (e.g. it's parent DAO) and a description, which can be a name or other description for this minion's purpose. The summon function emits a SummonMinion event where you can grab the new minion's address.

Details of summoned minions can be looked up in the minions mapping, which will allow you to search by minion address and retrieve information about the minion's description and the Moloch it serves. 

## Using your minion 

Minion is meant for submitting proposals to DAOs for arbitrary contract calls (i.e. minion proposals allow the DAO to submit proposals that will allow it to interact with other smart contracts). The way to use a minion is to submit the proposal with all the normal fields plus the byte data you want to send to the other contract's function. One way to get this byte data is by pretending to interact with the target function using MetaMask and then clicking on the data tab and copying and pasting the Hex data into the byte data field for a minion proposal--there are also other ways of getting the necessary byte data that are slightly more advanced. 

Once your minion proposal has passed in the DAO you can call the executeAction function. The executeAction function just takes the proposalId to make the desired contract interaction happen. 

The doWithdraw function allows the minion to collect any funds waiting for the minion in its parent DAO. The doWithdraw function takes the token and amount as its arguments. 

Other features of the vanilla minion are the ability to withdraw funds and cancel proposals. 

The crossWithdraw function means that you can either draw funds from any Moloch into the minion (when transfer is set to false) or directly into the parent moloch (when transfer is set to true). The crossWithdraw function just takes a target address, a token address, an amount, and a true / false on that transfer option mentioned above. The crossWithdraw can only pull tokens directly into its parent DAO if the tokens have already been whitelisted. 

The cancelProposal function allows an proposer to cancel the proposal they submitted. This function just takes the proposalId of the proposal they submitted. The cancelProposal function must be called prior to the proposal being sponsored in the parent moloch. 

## Deployments

### version 1
xDAI - 0x9610389d548Ca0224aCaC40eB3241c5ED88D2479

kovan - 0x80ec2dB292E7a6D1D5bECB80e6479b2bE048AC98

rinkeby - 0x316eFCd421b0654B7aE8E806880D4AE88ecaE206

mainnet - 0x2A0D29d0a9e5DE91512805c3E2B58c1e95700dDa

## version 2

xDAI - 0x53508D981439Ce6A3283597a4775F6f23504d4A2

kovan - 0xCE63803E265617c55567a7A7b584fF2dbD76210B

rinkeby - 0x313F02A44089150C9ff7011D4e87b52404A914A9

mainnet - 0x88207Daf515e0da1A32399b3f92D128B1BF45294

matic - 0x02e458B5eEF8f23e78AefaC0F15f5d294C3762e9

# Development Features

This version contains arbitrary conditional statements for minion execution. Basically as part of the proposal you can specify a contract call, and the expected return data in order to execute the minion action.

For the minion action to execute all conditions must be met:

* DAO proposal passes
* Conditional call matches expected data
* Time not expired

## Example use case - Rage Quit with Conditional Buyout

**Encode action data:**

Action Target - USDC Contract

`0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b`

Action Value - 0 ETH

Action Data - Transfer 2 USDC to buyout recipient

`0xa9059cbb0000000000000000000000005aaf1550c05ecf287f51954e263b9a44d055761700000000000000000000000000000000000000000000000000000000001e8480`

**Encode Condition data:**

Condition Target - Moloch Contract

`0x2c2c6D601B922F2d23745cb836B2431804543FeE`

Condition Data - Moloch Contract Members Getter

`0x08ae4b0c0000000000000000000000005aaf1550c05ecf287f51954e263b9a44d0557617`

Condition Expected State - Buyout recipient has 0 shares

`0x0000000000000000000000005aaf1550c05ecf287f51954e263b9a44d055761700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`

This is the encoded version of the Member struct

```
0:
address: delegateKey 0x5AAF1550C05EcF287F51954E263b9a44D0557617
1:
uint256: shares 0
2:
uint256: loot 0
3:
bool: exists true
4:
uint256: highestIndexYesVote 0
5:
uint256: jailed 0
```

**Payment Requested**

This must match the action data above. The payment requested sends tokens from the treasury to the minion, which must be withdrawn by the minion prior to execution of the buyout action.

`2000000`

## Procedure

1. Propose Action [Transaction](https://rinkeby.etherscan.io/tx/0x7d8121d60ae90071ba8a9297821d632bc37c71c556d7fe7935e49098161379a3)
2. Sponsor [Transaction](https://rinkeby.etherscan.io/tx/0xc586974d7c99f8381b46d84e873dfef250e059d9c4e0c464fdbedc5d356ce7f3)
3. Vote [Transaction](https://rinkeby.etherscan.io/tx/0xc586974d7c99f8381b46d84e873dfef250e059d9c4e0c464fdbedc5d356ce7f3)
4. Process [Transaction](https://rinkeby.etherscan.io/tx/0x3e8640464c689659fb6e8f4a5132fc8862164675b095fe1b98630f2b5ac0f056)
5. Withdraw via Minion [Transaction](https://rinkeby.etherscan.io/tx/0x7f72ece81cb33f4e7540381a4f7761508b1b11a82c2444281ce9d8f467ba1421)
6. Rage Quit [Transaction](https://rinkeby.etherscan.io/tx/0x417e4581b8410c3991a1d6e29d8eb704aba4c29a3f42fecbecfa71241fcd7889)
7. Withdraw Token Balance [Transaction](https://rinkeby.etherscan.io/tx/0x41072cf109fe050ca0144f87352ec5c4005dc06b991de686b1a153799550db1a)
8. Execute Buyout Action [Transaction](https://rinkeby.etherscan.io/tx/0xec76d36e486aed82106f093606a3d19c9630a7455f4764460bd08048d6d2a870)

## Limitations & Bugs

This implementation assumes the conditional call returns `bytes`.

The state comparison is hacky and can probably be improved through some ABI decoding so we can just compare a relevant part of the returned data.

If the state conditional state gets corrupted and the action cannot be executed, another proposal needs to be made through the Minion to return the stuck tokens.


## dev version

rinkeby Moloch - 0x3C5087511A60f4d2907871D4e5bF1E57775f6Ed6
rinkeby Minion - 0x70E666AB613866fde8349cf25C6f7363d4Ed3808

## Credits

Based on the original work done by RaidGuild at [Moloch-Minion](https://github.com/raid-guild/moloch-minion/)

To be used as an extension to the Moloch V2 contracts by MolochVentures [Moloch](https://github.com/MolochVentures/moloch)

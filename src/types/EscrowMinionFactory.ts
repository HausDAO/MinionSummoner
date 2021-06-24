/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EscrowMinion } from "./EscrowMinion";

export class EscrowMinionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EscrowMinion> {
    return super.deploy(overrides || {}) as Promise<EscrowMinion>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EscrowMinion {
    return super.attach(address) as EscrowMinion;
  }
  connect(signer: Signer): EscrowMinionFactory {
    return super.connect(signer) as EscrowMinionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EscrowMinion {
    return new Contract(address, _abi, signerOrProvider) as EscrowMinion;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
    ],
    name: "ActionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
    ],
    name: "ExecuteAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
    ],
    name: "ProposeAction",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "actions",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "address",
        name: "applicant",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "molochAddress",
        type: "address",
      },
    ],
    name: "cancelAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "molochAddress",
        type: "address",
      },
    ],
    name: "executeAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "applicant",
        type: "address",
      },
      {
        internalType: "address",
        name: "molochAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "requestAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    name: "proposeTribute",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ddb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063150b7a021461005c57806346a957e214610109578063bd20841714610137578063bfee4bba146101ef578063ef5ebd081461021b575b600080fd5b6100ec6004803603608081101561007257600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156100ad57600080fd5b8201836020820111156100bf57600080fd5b803590602001918460018302840111640100000000831117156100e157600080fd5b50909250905061028b565b604080516001600160e01b03199092168252519081900360200190f35b6101356004803603604081101561011f57600080fd5b50803590602001356001600160a01b03166102b5565b005b6101dd600480360360e081101561014d57600080fd5b6001600160a01b0382358116926020810135821692604082013583169260608301359260808101359091169160a0820135919081019060e0810160c082013564010000000081111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111640100000000831117156101d257600080fd5b5090925090506104f2565b60408051918252519081900360200190f35b6101356004803603604081101561020557600080fd5b50803590602001356001600160a01b0316610956565b6102476004803603604081101561023157600080fd5b506001600160a01b038135169060200135610d00565b604080516001600160a01b0397881681526020810196909652938616858501529185166060850152909316608083015291151560a082015290519081900360c00190f35b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b806102be610d52565b506001600160a01b03828116600090815260208181526040808320878452825291829020825160c081018452815485168152600182015492810192909252600281015484169282019290925260038201548316606082018190526004909201549283166080820152600160a01b90920460ff16151560a0830152331461037a576040805162461bcd60e51b815260206004820152600c60248201526b3737ba10383937b837b9b2b960a11b604482015290519081900360640190fd5b6001600160a01b03808416600090815260208181526040808320888452825280832080546001600160a01b0319908116825560018201859055600282018054821690556003820180549091169055600490810180546001600160a81b031916905585516080870151938701518351632142170760e11b8152309381019390935293861660248301526044820193909352905191938416926342842e0e9260648084019382900301818387803b15801561043257600080fd5b505af1158015610446573d6000803e3d6000fd5b5050604080518881526001600160a01b038816602082015281517fdcccc5725b7256a6975da00de8953e5d326756a3079d203ff6df9e52331f411a9450908190039091019150a1826001600160a01b031663e0a8f6f5866040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156104d357600080fd5b505af11580156104e7573d6000803e3d6000fd5b505050505050505050565b6000808890506000816001600160a01b031663c89039c56040518163ffffffff1660e01b815260040160206040518083038186803b15801561053357600080fd5b505afa158015610547573d6000803e3d6000fd5b505050506040513d602081101561055d57600080fd5b505190506001600160a01b038b1633146105be576040805162461bcd60e51b815260206004820152601760248201527f73656e646572206973206e6f74206170706c6963616e74000000000000000000604482015290519081900360640190fd5b6001600160a01b038716610610576040805162461bcd60e51b8152602060048201526014602482015273696e76616c6964207661756c744164647265737360601b604482015290519081900360640190fd5b60408051632142170760e11b81526001600160a01b038d81166004830152306024830152604482018b905291518b928316916342842e0e91606480830192600092919082900301818387803b15801561066857600080fd5b505af115801561067c573d6000803e3d6000fd5b505050506000836001600160a01b031663590f940b308a6000808860008a8f8f6040518a63ffffffff1660e01b8152600401808a6001600160a01b03168152602001898152602001888152602001878152602001866001600160a01b03168152602001858152602001846001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509a5050505050505050505050602060405180830381600087803b15801561074957600080fd5b505af115801561075d573d6000803e3d6000fd5b505050506040513d602081101561077357600080fd5b5051905061077f610d52565b6040518060c001604052808d6001600160a01b031681526020018c81526020018b6001600160a01b03168152602001336001600160a01b031681526020018f6001600160a01b03168152602001600015158152509050806000808f6001600160a01b03166001600160a01b03168152602001908152602001600020600084815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015560408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a08201518160040160146101000a81548160ff0219169083151502179055509050507fc882722c052491a1279c078b3fce9bb85067d5753a66d2602da10dfb122516f182338f60405180848152602001836001600160a01b03168152602001826001600160a01b03168152602001935050505060405180910390a1509c9b505050505050505050505050565b8061095f610d52565b506001600160a01b03828116600090815260208181526040808320878452825291829020825160c08101845281548516815260018201549281019290925260028101548416928201929092526003820154831660608201526004909101549182166080820152600160a01b90910460ff16151560a08201526109df610d87565b826001600160a01b031663b2643aab866040518263ffffffff1660e01b81526004018082815260200191505060c06040518083038186803b158015610a2357600080fd5b505afa158015610a37573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525060c0811015610a5c57600080fd5b5060408301519091506001600160a01b0316610ab4576040805162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a59081c1c9bdc1bdcd85b125960721b604482015290519081900360640190fd5b8160a0015115610afd576040805162461bcd60e51b815260206004820152600f60248201526e1858dd1a5bdb88195e1958dd5d1959608a1b604482015290519081900360640190fd5b606081015115610b49576040805162461bcd60e51b81526020600482015260126024820152711c1c9bdc1bdcd85b0818d85b98d95b1b195960721b604482015290519081900360640190fd5b8151604082015115610be257806001600160a01b03166342842e0e30856040015186602001516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b158015610bc557600080fd5b505af1158015610bd9573d6000803e3d6000fd5b50505050610c83565b60208201518015610bf557506040820151155b15610c8357806001600160a01b03166342842e0e30856080015186602001516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b158015610c6a57600080fd5b505af1158015610c7e573d6000803e3d6000fd5b505050505b6001600160a01b0385166000818152602081815260408083208a8452825291829020600401805460ff60a01b1916600160a01b1790558151898152339181019190915280820192909252517f96092b4b65f0f87b0be3b57295b8c29c02b88192c09ae2303b2993a729db17299181900360600190a1505050505050565b6000602081815292815260408082209093529081522080546001820154600283015460038401546004909401546001600160a01b0393841694929391821692821691811690600160a01b900460ff1686565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040518060c00160405280600690602082028036833750919291505056fea2646970667358221220236174088c1cd4277035737616b86944ee867a5271a8160075d297d945afd2f464736f6c63430007050033";

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc721 } from "./Erc721";

export class Erc721Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<Erc721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<Erc721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): Erc721 {
    return super.attach(address) as Erc721;
  }
  connect(signer: Signer): Erc721Factory {
    return super.connect(signer) as Erc721Factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc721 {
    return new Contract(address, _abi, signerOrProvider) as Erc721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cf138038062001cf1833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250620001b391506301ffc9a760e01b90506200021d565b8151620001c8906006906020850190620002a2565b508051620001de906007906020840190620002a2565b50620001f16380ac58cd60e01b6200021d565b62000203635b5e139f60e01b6200021d565b6200021563780e9d6360e01b6200021d565b50506200034e565b6001600160e01b031980821614156200027d576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002da576000855562000325565b82601f10620002f557805160ff191683800117855562000325565b8280016001018555821562000325579182015b828111156200032557825182559160200191906001019062000308565b506200033392915062000337565b5090565b5b8082111562000333576000815560010162000338565b611993806200035e6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a257806395d89b411161007157806395d89b4114610349578063a22cb46514610351578063b88d4fde1461037f578063c87b56dd14610445578063e985e9c5146104625761010b565b80634f6ccce7146102e15780636352211e146102fe5780636c0360eb1461031b57806370a08231146103235761010b565b806318160ddd116100de57806318160ddd1461022f57806323b872dd146102495780632f745c591461027f57806342842e0e146102ab5761010b565b806301ffc9a71461011057806306fdde031461014b578063081812fc146101c8578063095ea7b314610201575b600080fd5b6101376004803603602081101561012657600080fd5b50356001600160e01b031916610490565b604080519115158252519081900360200190f35b6101536104b3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018d578181015183820152602001610175565b50505050905090810190601f1680156101ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e5600480360360208110156101de57600080fd5b5035610549565b604080516001600160a01b039092168252519081900360200190f35b61022d6004803603604081101561021757600080fd5b506001600160a01b0381351690602001356105ab565b005b610237610686565b60408051918252519081900360200190f35b61022d6004803603606081101561025f57600080fd5b506001600160a01b03813581169160208101359091169060400135610697565b6102376004803603604081101561029557600080fd5b506001600160a01b0381351690602001356106ee565b61022d600480360360608110156102c157600080fd5b506001600160a01b03813581169160208101359091169060400135610719565b610237600480360360208110156102f757600080fd5b5035610734565b6101e56004803603602081101561031457600080fd5b503561074a565b610153610772565b6102376004803603602081101561033957600080fd5b50356001600160a01b03166107d3565b61015361083b565b61022d6004803603604081101561036757600080fd5b506001600160a01b038135169060200135151561089c565b61022d6004803603608081101561039557600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156103d057600080fd5b8201836020820111156103e257600080fd5b8035906020019184600183028401116401000000008311171561040457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109a1945050505050565b6101536004803603602081101561045b57600080fd5b50356109ff565b6101376004803603604081101561047857600080fd5b506001600160a01b0381358116916020013516610c82565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561053f5780601f106105145761010080835404028352916020019161053f565b820191906000526020600020905b81548152906001019060200180831161052257829003601f168201915b5050505050905090565b600061055482610cb0565b61058f5760405162461bcd60e51b815260040180806020018281038252602c815260200180611888602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105b68261074a565b9050806001600160a01b0316836001600160a01b031614156106095760405162461bcd60e51b815260040180806020018281038252602181526020018061190c6021913960400191505060405180910390fd5b806001600160a01b031661061b610cbd565b6001600160a01b0316148061063c575061063c81610637610cbd565b610c82565b6106775760405162461bcd60e51b81526004018080602001828103825260388152602001806117db6038913960400191505060405180910390fd5b6106818383610cc1565b505050565b60006106926002610d2f565b905090565b6106a86106a2610cbd565b82610d3a565b6106e35760405162461bcd60e51b815260040180806020018281038252603181526020018061192d6031913960400191505060405180910390fd5b610681838383610dde565b6001600160a01b03821660009081526001602052604081206107109083610f2a565b90505b92915050565b610681838383604051806020016040528060008152506109a1565b600080610742600284610f36565b509392505050565b60006107138260405180606001604052806029815260200161183d6029913960029190610f52565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561053f5780601f106105145761010080835404028352916020019161053f565b60006001600160a01b03821661081a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611813602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061071390610d2f565b60078054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561053f5780601f106105145761010080835404028352916020019161053f565b6108a4610cbd565b6001600160a01b0316826001600160a01b0316141561090a576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610917610cbd565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff19169215159290921790915561095b610cbd565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6109b26109ac610cbd565b83610d3a565b6109ed5760405162461bcd60e51b815260040180806020018281038252603181526020018061192d6031913960400191505060405180910390fd5b6109f984848484610f69565b50505050565b6060610a0a82610cb0565b610a455760405162461bcd60e51b815260040180806020018281038252602f8152602001806118dd602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610ada5780601f10610aaf57610100808354040283529160200191610ada565b820191906000526020600020905b815481529060010190602001808311610abd57829003601f168201915b505050505090506060610aeb610772565b9050805160001415610aff575090506104ae565b815115610bc05780826040516020018083805190602001908083835b60208310610b3a5780518252601f199092019160209182019101610b1b565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610b825780518252601f199092019160209182019101610b63565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506104ae565b80610bca85610fbb565b6040516020018083805190602001908083835b60208310610bfc5780518252601f199092019160209182019101610bdd565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610c445780518252601f199092019160209182019101610c25565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610713600283611096565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610cf68261074a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610713826110a2565b6000610d4582610cb0565b610d805760405162461bcd60e51b815260040180806020018281038252602c8152602001806117af602c913960400191505060405180910390fd5b6000610d8b8361074a565b9050806001600160a01b0316846001600160a01b03161480610dc65750836001600160a01b0316610dbb84610549565b6001600160a01b0316145b80610dd65750610dd68185610c82565b949350505050565b826001600160a01b0316610df18261074a565b6001600160a01b031614610e365760405162461bcd60e51b81526004018080602001828103825260298152602001806118b46029913960400191505060405180910390fd5b6001600160a01b038216610e7b5760405162461bcd60e51b815260040180806020018281038252602481526020018061178b6024913960400191505060405180910390fd5b610e86838383610681565b610e91600082610cc1565b6001600160a01b0383166000908152600160205260409020610eb390826110a6565b506001600160a01b0382166000908152600160205260409020610ed690826110b2565b50610ee3600282846110be565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061071083836110d4565b6000808080610f458686611138565b9097909650945050505050565b6000610f5f8484846111b3565b90505b9392505050565b610f74848484610dde565b610f808484848461127d565b6109f95760405162461bcd60e51b81526004018080602001828103825260328152602001806117596032913960400191505060405180910390fd5b606081610fe057506040805180820190915260018152600360fc1b60208201526104ae565b8160005b8115610ff857600101600a82049150610fe4565b60608167ffffffffffffffff8111801561101157600080fd5b506040519080825280601f01601f19166020018201604052801561103c576020820181803683370190505b50859350905060001982015b831561108d57600a840660300160f81b8282806001900393508151811061106b57fe5b60200101906001600160f81b031916908160001a905350600a84049350611048565b50949350505050565b600061071083836113e5565b5490565b600061071083836113fd565b600061071083836114c3565b6000610f5f84846001600160a01b03851661150d565b815460009082106111165760405162461bcd60e51b81526004018080602001828103825260228152602001806117376022913960400191505060405180910390fd5b82600001828154811061112557fe5b9060005260206000200154905092915050565b81546000908190831061117c5760405162461bcd60e51b81526004018080602001828103825260228152602001806118666022913960400191505060405180910390fd5b600084600001848154811061118d57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000828152600184016020526040812054828161124e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112135781810151838201526020016111fb565b50505050905090810190601f1680156112405780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061126157fe5b9060005260206000209060020201600101549150509392505050565b6000611291846001600160a01b03166115a4565b61129d57506001610dd6565b60606113ab630a85bd0160e11b6112b2610cbd565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611319578181015183820152602001611301565b50505050905090810190601f1680156113465780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001611759603291396001600160a01b03881691906115aa565b905060008180602001905160208110156113c457600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b600081815260018301602052604081205480156114b9578354600019808301919081019060009087908390811061143057fe5b906000526020600020015490508087600001848154811061144d57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061147d57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610713565b6000915050610713565b60006114cf83836113e5565b61150557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610713565b506000610713565b600082815260018401602052604081205480611572575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610f62565b8285600001600183038154811061158557fe5b9060005260206000209060020201600101819055506000915050610f62565b3b151590565b6060610f5f8484600085856115be856115a4565b61160f576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061164e5780518252601f19909201916020918201910161162f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146116b0576040519150601f19603f3d011682016040523d82523d6000602084013e6116b5565b606091505b50915091506116c58282866116d0565b979650505050505050565b606083156116df575081610f62565b8251156116ef5782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156112135781810151838201526020016111fb56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220e4ea8c9551d79824e80c6e20f9608a140cf4ea934a785dbb3eec61db072268c264736f6c63430007050033";

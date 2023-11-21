/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  CryptoCoffMember,
  CryptoCoffMemberInterface,
} from "../../contracts/CryptoCoffMember";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pointAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC721EnumerableForbiddenBatchMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
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
    name: "ERC721OutOfBoundsIndex",
    type: "error",
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
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "source",
            type: "address",
          },
          {
            internalType: "bytes32[]",
            name: "topics",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Log",
        name: "log",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkLog",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
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
    ],
    name: "getTokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "point",
    outputs: [
      {
        internalType: "contract ICryptoCoffPoint",
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
        name: "data",
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
] as const;

const _bytecode =
  "0x610180604052606360e08181526080918291906200248b6101003981526020016040518060a0016040528060638152602001620023c56063913981526020016040518060a0016040528060638152602001620024286063913990526200006a90600c90600362000151565b503480156200007857600080fd5b50604051620024ee380380620024ee8339810160408190526200009b9162000228565b6040518060400160405280601481526020017f43727970746f436f66664d656d6265724e4654730000000000000000000000008152506040518060400160405280601381526020017f43727970746f436f66664d656d6265724e4654000000000000000000000000008152508160009081620001189190620002ff565b506001620001278282620002ff565b5050600d80546001600160a01b0319166001600160a01b03939093169290921790915550620003cb565b8280548282559060005260206000209081019282156200019c579160200282015b828111156200019c57825182906200018b9082620002ff565b509160200191906001019062000172565b50620001aa929150620001ae565b5090565b80821115620001aa576000620001c58282620001cf565b50600101620001ae565b508054620001dd9062000270565b6000825580601f10620001ee575050565b601f0160209004906000526020600020908101906200020e919062000211565b50565b5b80821115620001aa576000815560010162000212565b6000602082840312156200023b57600080fd5b81516001600160a01b03811681146200025357600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200028557607f821691505b602082108103620002a657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002fa57600081815260208120601f850160051c81016020861015620002d55750805b601f850160051c820191505b81811015620002f657828155600101620002e1565b5050505b505050565b81516001600160401b038111156200031b576200031b6200025a565b62000333816200032c845462000270565b84620002ac565b602080601f8311600181146200036b5760008415620003525750858301515b600019600386901b1c1916600185901b178555620002f6565b600085815260208120601f198616915b828110156200039c578886015182559484019460019091019084016200037b565b5085821015620003bb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611fea80620003db6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806342842e0e116100ad57806395d89b411161007157806395d89b4114610299578063a22cb465146102a1578063b88d4fde146102b4578063c87b56dd146102c7578063e985e9c5146102da57600080fd5b806342842e0e1461023a5780634585e33b1461024d5780634f6ccce7146102605780636352211e1461027357806370a082311461028657600080fd5b806323b872dd116100f457806323b872dd146101c05780632ba9fcd5146101d35780632f745c59146101e6578063349f258b146101f957806340691db41461021957600080fd5b806301ffc9a71461013157806306fdde0314610159578063081812fc1461016e578063095ea7b31461019957806318160ddd146101ae575b600080fd5b61014461013f366004611866565b6102ed565b60405190151581526020015b60405180910390f35b6101616102fe565b60405161015091906118d3565b61018161017c3660046118e6565b610390565b6040516001600160a01b039091168152602001610150565b6101ac6101a7366004611914565b6103b9565b005b6009545b604051908152602001610150565b6101ac6101ce366004611940565b6103c8565b600d54610181906001600160a01b031681565b6101b26101f4366004611914565b610458565b61020c610207366004611981565b6104bd565b604051610150919061199e565b61022c610227366004611a8e565b61055f565b604051610150929190611afb565b6101ac610248366004611940565b61061f565b6101ac61025b366004611b16565b61063f565b6101b261026e3660046118e6565b6106f6565b6101816102813660046118e6565b61074f565b6101b2610294366004611981565b61075a565b6101616107a2565b6101ac6102af366004611b88565b6107b1565b6101ac6102c2366004611bc6565b6107bc565b6101616102d53660046118e6565b6107d3565b6101446102e8366004611c32565b6107de565b60006102f88261080c565b92915050565b60606000805461030d90611c60565b80601f016020809104026020016040519081016040528092919081815260200182805461033990611c60565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b5050505050905090565b600061039b82610831565b506000828152600460205260409020546001600160a01b03166102f8565b6103c482823361086a565b5050565b6001600160a01b0382166103f757604051633250574960e11b8152600060048201526024015b60405180910390fd5b6000610404838333610877565b9050836001600160a01b0316816001600160a01b031614610452576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103ee565b50505050565b60006104638361075a565b82106104945760405163295f44f760e21b81526001600160a01b0384166004820152602481018390526044016103ee565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b606060006104ca8361075a565b905060008167ffffffffffffffff8111156104e7576104e76119e2565b604051908082528060200260200182016040528015610510578160200160208202803683370190505b50905060005b82811015610557576105288582610458565b82828151811061053a5761053a611c9a565b60209081029190910101528061054f81611cc6565b915050610516565b509392505050565b60016060600061059061057560c0870187611cdf565b600181811061058657610586611c9a565b9050602002013590565b905060006105a160c0870187611cdf565b60028181106105b2576105b2611c9a565b60200291909101359150600090506105ed6105d060c0890189611cdf565b60038181106105e1576105e1611c9a565b90506020020135610890565b905082828260405160200161060493929190611d30565b60405160208183030381529060405293505050509250929050565b61063a838383604051806020016040528060008152506107bc565b505050565b6000808061064f84860186611d60565b92509250925061067d8160405180604001604052806006815260200165636f6666656560d01b815250610919565b156106e557600d54604051634ea1dedb60e01b8152600481018490526001600160a01b0390911690634ea1dedb90602401600060405180830381600087803b1580156106c857600080fd5b505af11580156106dc573d6000803e3d6000fd5b505050506106ef565b6106ef8284610972565b5050505050565b600061070160095490565b821061072a5760405163295f44f760e21b815260006004820152602481018390526044016103ee565b6009828154811061073d5761073d611c9a565b90600052602060002001549050919050565b60006102f882610831565b60006001600160a01b038216610786576040516322718ad960e21b8152600060048201526024016103ee565b506001600160a01b031660009081526003602052604090205490565b60606001805461030d90611c60565b6103c4338383610af8565b6107c78484846103c8565b61045284848484610b97565b60606102f882610cb9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b14806102f857506102f882610dc2565b6000818152600260205260408120546001600160a01b0316806102f857604051637e27328960e01b8152600481018490526024016103ee565b61063a8383836001610de7565b600080610885858585610eed565b90505b949350505050565b6040805160208082528183019092526060916000919060208201818036833701905050905060005b6020811015610912578381602081106108d3576108d3611c9a565b1a60f81b8282815181106108e9576108e9611c9a565b60200101906001600160f81b031916908160001a9053508061090a81611cc6565b9150506108b8565b5092915050565b60008160405160200161092c9190611dcd565b60405160208183030381529060405280519060200120836040516020016109539190611dcd565b6040516020818303038152906040528051906020012014905092915050565b600061097d826104bd565b600d54604051634ea1dedb60e01b8152600481018690529192506001600160a01b031690634ea1dedb90602401600060405180830381600087803b1580156109c457600080fd5b505af11580156109d8573d6000803e3d6000fd5b50505050600081511115610aef576000816000815181106109fb576109fb611c9a565b602002602001015190506002610a1082610fba565b10610a1b5750505050565b6000610a2682610fba565b610a31906001611de9565b90506000600c8281548110610a4857610a48611c9a565b906000526020600020018054610a5d90611c60565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8990611c60565b8015610ad65780601f10610aab57610100808354040283529160200191610ad6565b820191906000526020600020905b815481529060010190602001808311610ab957829003601f168201915b50505050509050610ae783826110b5565b505050505050565b61063a82611105565b6001600160a01b038216610b2a57604051630b61174360e31b81526001600160a01b03831660048201526024016103ee565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561045257604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610bd9903390889087908790600401611dfc565b6020604051808303816000875af1925050508015610c14575060408051601f3d908101601f19168201909252610c1191810190611e39565b60015b610c7d573d808015610c42576040519150601f19603f3d011682016040523d82523d6000602084013e610c47565b606091505b508051600003610c7557604051633250574960e11b81526001600160a01b03851660048201526024016103ee565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b146106ef57604051633250574960e11b81526001600160a01b03851660048201526024016103ee565b6060610cc482610831565b5060008281526006602052604081208054610cde90611c60565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0a90611c60565b8015610d575780601f10610d2c57610100808354040283529160200191610d57565b820191906000526020600020905b815481529060010190602001808311610d3a57829003601f168201915b505050505090506000610d7560408051602081019091526000815290565b90508051600003610d87575092915050565b815115610db9578082604051602001610da1929190611e56565b60405160208183030381529060405292505050919050565b61088884611237565b60006001600160e01b03198216632483248360e11b14806102f857506102f8826112ac565b8080610dfb57506001600160a01b03821615155b15610ebd576000610e0b84610831565b90506001600160a01b03831615801590610e375750826001600160a01b0316816001600160a01b031614155b8015610e4a5750610e4881846107de565b155b15610e735760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103ee565b8115610ebb5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b600080610efb8585856112fc565b90506001600160a01b038116610f5857610f5384600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b610f7b565b846001600160a01b0316816001600160a01b031614610f7b57610f7b81856113f5565b6001600160a01b038516610f9757610f9284611486565b610888565b846001600160a01b0316816001600160a01b031614610888576108888585611535565b600080610fc6836107d3565b905061107881600c600081548110610fe057610fe0611c9a565b906000526020600020018054610ff590611c60565b80601f016020809104026020016040519081016040528092919081815260200182805461102190611c60565b801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b5050505050610919565b156110865750600092915050565b61109e81600c600181548110610fe057610fe0611c9a565b156110ac5750600192915050565b50600292915050565b60008281526006602052604090206110cd8282611ecb565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b6000611110826104bd565b905080516000146111635760405162461bcd60e51b815260206004820152601960248201527f596f7520616c726561647920686176652061206d656d6265720000000000000060448201526064016103ee565b600b80549060019060006111778385611de9565b9091555061118790508382611585565b61063a81600c60008154811061119f5761119f611c9a565b9060005260206000200180546111b490611c60565b80601f01602080910402602001604051908101604052809291908181526020018280546111e090611c60565b801561122d5780601f106112025761010080835404028352916020019161122d565b820191906000526020600020905b81548152906001019060200180831161121057829003601f168201915b50505050506110b5565b606061124282610831565b50600061125a60408051602081019091526000815290565b9050600081511161127a57604051806020016040528060008152506112a5565b806112848461159f565b604051602001611295929190611e56565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b14806112dd57506001600160e01b03198216635b5e139f60e01b145b806102f857506301ffc9a760e01b6001600160e01b03198316146102f8565b6000828152600260205260408120546001600160a01b039081169083161561132957611329818486611632565b6001600160a01b0381161561136757611346600085600080610de7565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615611396576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60006114008361075a565b600083815260086020526040902054909150808214611453576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b60095460009061149890600190611f8b565b6000838152600a6020526040812054600980549394509092849081106114c0576114c0611c9a565b9060005260206000200154905080600983815481106114e1576114e1611c9a565b6000918252602080832090910192909255828152600a9091526040808220849055858252812055600980548061151957611519611f9e565b6001900381819060005260206000200160009055905550505050565b600060016115428461075a565b61154c9190611f8b565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6103c4828260405180602001604052806000815250611696565b606060006115ac836116ad565b600101905060008167ffffffffffffffff8111156115cc576115cc6119e2565b6040519080825280601f01601f1916602001820160405280156115f6576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461160057509392505050565b61163d838383611785565b61063a576001600160a01b03831661166b57604051637e27328960e01b8152600481018290526024016103ee565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103ee565b6116a083836117e8565b61063a6000848484610b97565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106116ec5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611718576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061173657662386f26fc10000830492506010015b6305f5e100831061174e576305f5e100830492506008015b612710831061176257612710830492506004015b60648310611774576064830492506002015b600a83106102f85760010192915050565b60006001600160a01b038316158015906108885750826001600160a01b0316846001600160a01b031614806117bf57506117bf84846107de565b806108885750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160a01b03821661181257604051633250574960e11b8152600060048201526024016103ee565b600061182083836000610877565b90506001600160a01b0381161561063a576040516339e3563760e11b8152600060048201526024016103ee565b6001600160e01b03198116811461186357600080fd5b50565b60006020828403121561187857600080fd5b81356112a58161184d565b60005b8381101561189e578181015183820152602001611886565b50506000910152565b600081518084526118bf816020860160208601611883565b601f01601f19169290920160200192915050565b6020815260006112a560208301846118a7565b6000602082840312156118f857600080fd5b5035919050565b6001600160a01b038116811461186357600080fd5b6000806040838503121561192757600080fd5b8235611932816118ff565b946020939093013593505050565b60008060006060848603121561195557600080fd5b8335611960816118ff565b92506020840135611970816118ff565b929592945050506040919091013590565b60006020828403121561199357600080fd5b81356112a5816118ff565b6020808252825182820181905260009190848201906040850190845b818110156119d6578351835292840192918401916001016119ba565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611a1357611a136119e2565b604051601f8501601f19908116603f01168101908282118183101715611a3b57611a3b6119e2565b81604052809350858152868686011115611a5457600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611a7f57600080fd5b6112a5838335602085016119f8565b60008060408385031215611aa157600080fd5b823567ffffffffffffffff80821115611ab957600080fd5b908401906101008287031215611ace57600080fd5b90925060208401359080821115611ae457600080fd5b50611af185828601611a6e565b9150509250929050565b821515815260406020820152600061088860408301846118a7565b60008060208385031215611b2957600080fd5b823567ffffffffffffffff80821115611b4157600080fd5b818501915085601f830112611b5557600080fd5b813581811115611b6457600080fd5b866020828501011115611b7657600080fd5b60209290920196919550909350505050565b60008060408385031215611b9b57600080fd5b8235611ba6816118ff565b915060208301358015158114611bbb57600080fd5b809150509250929050565b60008060008060808587031215611bdc57600080fd5b8435611be7816118ff565b93506020850135611bf7816118ff565b925060408501359150606085013567ffffffffffffffff811115611c1a57600080fd5b611c2687828801611a6e565b91505092959194509250565b60008060408385031215611c4557600080fd5b8235611c50816118ff565b91506020830135611bbb816118ff565b600181811c90821680611c7457607f821691505b602082108103611c9457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611cd857611cd8611cb0565b5060010190565b6000808335601e19843603018112611cf657600080fd5b83018035915067ffffffffffffffff821115611d1157600080fd5b6020019150600581901b3603821315611d2957600080fd5b9250929050565b60018060a01b0384168152826020820152606060408201526000611d5760608301846118a7565b95945050505050565b600080600060608486031215611d7557600080fd5b8335611d80816118ff565b925060208401359150604084013567ffffffffffffffff811115611da357600080fd5b8401601f81018613611db457600080fd5b611dc3868235602084016119f8565b9150509250925092565b60008251611ddf818460208701611883565b9190910192915050565b808201808211156102f8576102f8611cb0565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e2f908301846118a7565b9695505050505050565b600060208284031215611e4b57600080fd5b81516112a58161184d565b60008351611e68818460208801611883565b835190830190611e7c818360208801611883565b01949350505050565b601f82111561063a57600081815260208120601f850160051c81016020861015611eac5750805b601f850160051c820191505b81811015610ae757828155600101611eb8565b815167ffffffffffffffff811115611ee557611ee56119e2565b611ef981611ef38454611c60565b84611e85565b602080601f831160018114611f2e5760008415611f165750858301515b600019600386901b1c1916600185901b178555610ae7565b600085815260208120601f198616915b82811015611f5d57888601518255948401946001909101908401611f3e565b5085821015611f7b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b818103818111156102f8576102f8611cb0565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220ef6c0a24d05036f7977945d905d945e92f221d1e64f67215224ecd478ac701f764736f6c6343000814003368747470733a2f2f6261667962656968686b67757236763275636761637137756a676f72656e326c6d73786b35767233713274716c636437636e33356677366d746b752e697066732e6e667473746f726167652e6c696e6b2f72616e6b322e6a736f6e68747470733a2f2f6261667962656968686b67757236763275636761637137756a676f72656e326c6d73786b35767233713274716c636437636e33356677366d746b752e697066732e6e667473746f726167652e6c696e6b2f72616e6b332e6a736f6e68747470733a2f2f6261667962656968686b67757236763275636761637137756a676f72656e326c6d73786b35767233713274716c636437636e33356677366d746b752e697066732e6e667473746f726167652e6c696e6b2f72616e6b312e6a736f6e";

type CryptoCoffMemberConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptoCoffMemberConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptoCoffMember__factory extends ContractFactory {
  constructor(...args: CryptoCoffMemberConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _pointAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_pointAddress, overrides || {});
  }
  override deploy(
    _pointAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_pointAddress, overrides || {}) as Promise<
      CryptoCoffMember & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CryptoCoffMember__factory {
    return super.connect(runner) as CryptoCoffMember__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoCoffMemberInterface {
    return new Interface(_abi) as CryptoCoffMemberInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CryptoCoffMember {
    return new Contract(address, _abi, runner) as unknown as CryptoCoffMember;
  }
}
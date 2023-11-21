/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CryptoCoffMember,
  CryptoCoffMemberInterface,
} from "../../../contracts/CryptoCoffMember.sol/CryptoCoffMember";

const _abi = [
  {
    inputs: [],
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
        indexed: true,
        internalType: "address",
        name: "customerAddress",
        type: "address",
      },
    ],
    name: "Customer",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MemberStage",
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
        internalType: "bytes32",
        name: "_address",
        type: "bytes32",
      },
    ],
    name: "bytes32ToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
        internalType: "string",
        name: "a",
        type: "string",
      },
      {
        internalType: "string",
        name: "b",
        type: "string",
      },
    ],
    name: "compareStrings",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "counted",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "upgradeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610160604052604d60e0818152608091829190620022d86101003981526020016040518060800160405280605681526020016200222c605691398152602001604051806080016040528060568152602001620022826056913990526200006a90600c906003620000e2565b506000600d553480156200007d57600080fd5b5060405180604001604052806005815260200164644e46547360d81b815250604051806040016040528060048152602001631913919560e21b8152508160009081620000ca91906200025e565b506001620000d982826200025e565b5050506200032a565b8280548282559060005260206000209081019282156200012d579160200282015b828111156200012d57825182906200011c90826200025e565b509160200191906001019062000103565b506200013b9291506200013f565b5090565b808211156200013b57600062000156828262000160565b506001016200013f565b5080546200016e90620001cf565b6000825580601f106200017f575050565b601f0160209004906000526020600020908101906200019f9190620001a2565b50565b5b808211156200013b5760008155600101620001a3565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001e457607f821691505b6020821081036200020557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025957600081815260208120601f850160051c81016020861015620002345750805b601f850160051c820191505b81811015620002555782815560010162000240565b5050505b505050565b81516001600160401b038111156200027a576200027a620001b9565b62000292816200028b8454620001cf565b846200020b565b602080601f831160018114620002ca5760008415620002b15750858301515b600019600386901b1c1916600185901b17855562000255565b600085815260208120601f198616915b82811015620002fb57888601518255948401946001909101908401620002da565b50858210156200031a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611ef2806200033a6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80634585e33b116100de578063a22cb46511610097578063c87b56dd11610071578063c87b56dd14610349578063d481912d1461035c578063e985e9c51461036f578063f937f9101461038257600080fd5b8063a22cb46514610310578063b88d4fde14610323578063bed34bba1461033657600080fd5b80634585e33b146102ab5780634f6ccce7146102be5780635ced058e146102d15780636352211e146102e257806370a08231146102f557806395d89b411461030857600080fd5b806323b872dd1161013057806323b872dd1461021e5780632f745c5914610231578063349f258b1461024457806340691db41461026457806340d097c31461028557806342842e0e1461029857600080fd5b806301ffc9a71461017857806306fdde03146101a0578063081812fc146101b5578063095ea7b3146101e05780631451b5c8146101f557806318160ddd14610216575b600080fd5b61018b6101863660046117bf565b61038b565b60405190151581526020015b60405180910390f35b6101a861039c565b604051610197919061182c565b6101c86101c336600461183f565b61042e565b6040516001600160a01b039091168152602001610197565b6101f36101ee36600461186d565b610457565b005b61020861020336600461183f565b610466565b604051908152602001610197565b600954610208565b6101f361022c366004611899565b610561565b61020861023f36600461186d565b6105f1565b6102576102523660046118da565b610656565b60405161019791906118f7565b6102776102723660046119de565b6106f8565b604051610197929190611a4b565b6101f36102933660046118da565b610759565b6101f36102a6366004611899565b610890565b6101f36102b9366004611a66565b6108ab565b6102086102cc36600461183f565b6109a5565b6101c86102df36600461183f565b90565b6101c86102f036600461183f565b6109fe565b6102086103033660046118da565b610a09565b6101a8610a51565b6101f361031e366004611ad8565b610a60565b6101f3610331366004611b16565b610a6b565b61018b610344366004611b82565b610a82565b6101a861035736600461183f565b610adb565b6101f361036a36600461183f565b610ae6565b61018b61037d366004611bcf565b610bc5565b610208600d5481565b600061039682610bf3565b92915050565b6060600080546103ab90611bfd565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790611bfd565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b600061043982610c18565b506000828152600460205260409020546001600160a01b0316610396565b610462828233610c51565b5050565b60008061047283610adb565b905061052481600c60008154811061048c5761048c611c37565b9060005260206000200180546104a190611bfd565b80601f01602080910402602001604051908101604052809291908181526020018280546104cd90611bfd565b801561051a5780601f106104ef5761010080835404028352916020019161051a565b820191906000526020600020905b8154815290600101906020018083116104fd57829003601f168201915b5050505050610a82565b156105325750600092915050565b61054a81600c60018154811061048c5761048c611c37565b156105585750600192915050565b50600292915050565b6001600160a01b03821661059057604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061059d838333610c5e565b9050836001600160a01b0316816001600160a01b0316146105eb576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610587565b50505050565b60006105fc83610a09565b821061062d5760405163295f44f760e21b81526001600160a01b038416600482015260248101839052604401610587565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6060600061066383610a09565b905060008167ffffffffffffffff8111156106805761068061193b565b6040519080825280602002602001820160405280156106a9578160200160208202803683370190505b50905060005b828110156106f0576106c185826105f1565b8282815181106106d3576106d3611c37565b6020908102919091010152806106e881611c63565b9150506106af565b509392505050565b60016060600061072961070e60c0870187611c7c565b600181811061071f5761071f611c37565b9050602002013590565b604080516001600160a01b0383166020820152919250016040516020818303038152906040529150509250929050565b600061076482610656565b905080516000146107b75760405162461bcd60e51b815260206004820152601960248201527f596f7520616c726561647920686176652061206d656d626572000000000000006044820152606401610587565b600b80549060019060006107cb8385611ccd565b909155506107db90508382610c77565b61088b81600c6000815481106107f3576107f3611c37565b90600052602060002001805461080890611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461083490611bfd565b80156108815780601f1061085657610100808354040283529160200191610881565b820191906000526020600020905b81548152906001019060200180831161086457829003601f168201915b5050505050610c91565b505050565b61088b83838360405180602001604052806000815250610a6b565b6001600d60008282546108be9190611ccd565b90915550600090506108d2828401846118da565b6040519091506001600160a01b038216907f3894d0b3ab3a6e809eb80cc842fe6dd3bc4571b6aea1d6b094c2997b782a3c1090600090a2600061091482610656565b905060008151116109675760405162461bcd60e51b815260206004820152601760248201527f596f7520646f6e277420686176652061206d656d6265720000000000000000006044820152606401610587565b80511561099c5760008160008151811061098357610983611c37565b6020026020010151905061099681610ae6565b506105eb565b6105eb82610759565b60006109b060095490565b82106109d95760405163295f44f760e21b81526000600482015260248101839052604401610587565b600982815481106109ec576109ec611c37565b90600052602060002001549050919050565b600061039682610c18565b60006001600160a01b038216610a35576040516322718ad960e21b815260006004820152602401610587565b506001600160a01b031660009081526003602052604090205490565b6060600180546103ab90611bfd565b610462338383610ce1565b610a76848484610561565b6105eb84848484610d80565b600081604051602001610a959190611ce0565b6040516020818303038152906040528051906020012083604051602001610abc9190611ce0565b6040516020818303038152906040528051906020012014905092915050565b606061039682610ea9565b6002610af182610466565b10610af95750565b6000610b0482610466565b610b0f906001611ccd565b90506000600c8281548110610b2657610b26611c37565b906000526020600020018054610b3b90611bfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6790611bfd565b8015610bb45780601f10610b8957610100808354040283529160200191610bb4565b820191906000526020600020905b815481529060010190602001808311610b9757829003601f168201915b5050505050905061088b8382610c91565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b1480610396575061039682610fb2565b6000818152600260205260408120546001600160a01b03168061039657604051637e27328960e01b815260048101849052602401610587565b61088b8383836001610fd7565b600080610c6c8585856110dd565b90505b949350505050565b6104628282604051806020016040528060008152506111aa565b6000828152600660205260409020610ca98282611d4a565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b6001600160a01b038216610d1357604051630b61174360e31b81526001600160a01b0383166004820152602401610587565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156105eb57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610dc2903390889087908790600401611e0a565b6020604051808303816000875af1925050508015610dfd575060408051601f3d908101601f19168201909252610dfa91810190611e47565b60015b610e66573d808015610e2b576040519150601f19603f3d011682016040523d82523d6000602084013e610e30565b606091505b508051600003610e5e57604051633250574960e11b81526001600160a01b0385166004820152602401610587565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610ea257604051633250574960e11b81526001600160a01b0385166004820152602401610587565b5050505050565b6060610eb482610c18565b5060008281526006602052604081208054610ece90611bfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610efa90611bfd565b8015610f475780601f10610f1c57610100808354040283529160200191610f47565b820191906000526020600020905b815481529060010190602001808311610f2a57829003601f168201915b505050505090506000610f6560408051602081019091526000815290565b90508051600003610f77575092915050565b815115610fa9578082604051602001610f91929190611e64565b60405160208183030381529060405292505050919050565b610c6f846111c1565b60006001600160e01b03198216632483248360e11b1480610396575061039682611236565b8080610feb57506001600160a01b03821615155b156110ad576000610ffb84610c18565b90506001600160a01b038316158015906110275750826001600160a01b0316816001600160a01b031614155b801561103a57506110388184610bc5565b155b156110635760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610587565b81156110ab5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806110eb858585611286565b90506001600160a01b0381166111485761114384600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61116b565b846001600160a01b0316816001600160a01b03161461116b5761116b818561137f565b6001600160a01b0385166111875761118284611410565b610c6f565b846001600160a01b0316816001600160a01b031614610c6f57610c6f85856114bf565b6111b4838361150f565b61088b6000848484610d80565b60606111cc82610c18565b5060006111e460408051602081019091526000815290565b90506000815111611204576040518060200160405280600081525061122f565b8061120e84611574565b60405160200161121f929190611e64565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b148061126757506001600160e01b03198216635b5e139f60e01b145b8061039657506301ffc9a760e01b6001600160e01b0319831614610396565b6000828152600260205260408120546001600160a01b03908116908316156112b3576112b3818486611607565b6001600160a01b038116156112f1576112d0600085600080610fd7565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615611320576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b600061138a83610a09565b6000838152600860205260409020549091508082146113dd576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b60095460009061142290600190611e93565b6000838152600a60205260408120546009805493945090928490811061144a5761144a611c37565b90600052602060002001549050806009838154811061146b5761146b611c37565b6000918252602080832090910192909255828152600a909152604080822084905585825281205560098054806114a3576114a3611ea6565b6001900381819060005260206000200160009055905550505050565b600060016114cc84610a09565b6114d69190611e93565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6001600160a01b03821661153957604051633250574960e11b815260006004820152602401610587565b600061154783836000610c5e565b90506001600160a01b0381161561088b576040516339e3563760e11b815260006004820152602401610587565b606060006115818361166b565b600101905060008167ffffffffffffffff8111156115a1576115a161193b565b6040519080825280601f01601f1916602001820160405280156115cb576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846115d557509392505050565b611612838383611743565b61088b576001600160a01b03831661164057604051637e27328960e01b815260048101829052602401610587565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610587565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106116aa5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106116d6576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106116f457662386f26fc10000830492506010015b6305f5e100831061170c576305f5e100830492506008015b612710831061172057612710830492506004015b60648310611732576064830492506002015b600a83106103965760010192915050565b60006001600160a01b03831615801590610c6f5750826001600160a01b0316846001600160a01b0316148061177d575061177d8484610bc5565b80610c6f5750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b0319811681146117bc57600080fd5b50565b6000602082840312156117d157600080fd5b813561122f816117a6565b60005b838110156117f75781810151838201526020016117df565b50506000910152565b600081518084526118188160208601602086016117dc565b601f01601f19169290920160200192915050565b60208152600061122f6020830184611800565b60006020828403121561185157600080fd5b5035919050565b6001600160a01b03811681146117bc57600080fd5b6000806040838503121561188057600080fd5b823561188b81611858565b946020939093013593505050565b6000806000606084860312156118ae57600080fd5b83356118b981611858565b925060208401356118c981611858565b929592945050506040919091013590565b6000602082840312156118ec57600080fd5b813561122f81611858565b6020808252825182820181905260009190848201906040850190845b8181101561192f57835183529284019291840191600101611913565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261196257600080fd5b813567ffffffffffffffff8082111561197d5761197d61193b565b604051601f8301601f19908116603f011681019082821181831017156119a5576119a561193b565b816040528381528660208588010111156119be57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156119f157600080fd5b823567ffffffffffffffff80821115611a0957600080fd5b908401906101008287031215611a1e57600080fd5b90925060208401359080821115611a3457600080fd5b50611a4185828601611951565b9150509250929050565b8215158152604060208201526000610c6f6040830184611800565b60008060208385031215611a7957600080fd5b823567ffffffffffffffff80821115611a9157600080fd5b818501915085601f830112611aa557600080fd5b813581811115611ab457600080fd5b866020828501011115611ac657600080fd5b60209290920196919550909350505050565b60008060408385031215611aeb57600080fd5b8235611af681611858565b915060208301358015158114611b0b57600080fd5b809150509250929050565b60008060008060808587031215611b2c57600080fd5b8435611b3781611858565b93506020850135611b4781611858565b925060408501359150606085013567ffffffffffffffff811115611b6a57600080fd5b611b7687828801611951565b91505092959194509250565b60008060408385031215611b9557600080fd5b823567ffffffffffffffff80821115611bad57600080fd5b611bb986838701611951565b93506020850135915080821115611a3457600080fd5b60008060408385031215611be257600080fd5b8235611bed81611858565b91506020830135611b0b81611858565b600181811c90821680611c1157607f821691505b602082108103611c3157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611c7557611c75611c4d565b5060010190565b6000808335601e19843603018112611c9357600080fd5b83018035915067ffffffffffffffff821115611cae57600080fd5b6020019150600581901b3603821315611cc657600080fd5b9250929050565b8082018082111561039657610396611c4d565b60008251611cf28184602087016117dc565b9190910192915050565b601f82111561088b57600081815260208120601f850160051c81016020861015611d235750805b601f850160051c820191505b81811015611d4257828155600101611d2f565b505050505050565b815167ffffffffffffffff811115611d6457611d6461193b565b611d7881611d728454611bfd565b84611cfc565b602080601f831160018114611dad5760008415611d955750858301515b600019600386901b1c1916600185901b178555611d42565b600085815260208120601f198616915b82811015611ddc57888601518255948401946001909101908401611dbd565b5085821015611dfa5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e3d90830184611800565b9695505050505050565b600060208284031215611e5957600080fd5b815161122f816117a6565b60008351611e768184602088016117dc565b835190830190611e8a8183602088016117dc565b01949350505050565b8181038181111561039657610396611c4d565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a597608c1de20e4ffb11ddddff11301931e95fdd8b321a3de9543790c26b9ffd64736f6c6343000814003368747470733a2f2f697066732e696f2f697066732f516d59615473797854446e724734746f6338373231773632724c345a424b585154476a396339527064726e746f752f707572706c652d7370726f75742e6a736f6e68747470733a2f2f697066732e696f2f697066732f516d59615473797854446e724734746f6338373231773632724c345a424b585154476a396339527064726e746f752f707572706c652d626c6f6f6d732e6a736f6e68747470733a2f2f697066732e696f2f697066732f516d59615473797854446e724734746f6338373231773632724c345a424b585154476a396339527064726e746f752f736565642e6a736f6e";

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
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
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
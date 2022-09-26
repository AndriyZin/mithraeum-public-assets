/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Unit,
  UnitInterface,
} from "../../../../contracts/assets/units/Unit";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "worldAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_worldUnitName",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ARMY_ASSET_TYPE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNITS_AMM_ASSET_TYPE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "systemBurnFrom",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "systemTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "contract IWorld",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "worldUnitName",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e5e38038062001e5e833981016040819052620000349162000433565b8251839083906200004d906003906020850190620002c0565b50805162000063906004906020840190620002c0565b50505060006200007a60016200010660201b60201c565b9050801562000093576005805461ff0019166101001790555b6200009e856200021a565b8151620000b3906006906020850190620002c0565b508015620000fb576005805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505062000521565b600554600090610100900460ff1615620001a1578160ff1660011480156200014157506200013f30620002b160201b620008751760201c565b155b620001995760405162461bcd60e51b815260206004820152602e602482015260008051602062001e3e83398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60055460ff808416911610620002005760405162461bcd60e51b815260206004820152602e602482015260008051602062001e3e83398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000190565b506005805460ff191660ff92909216919091179055600190565b600554610100900460ff16620002875760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840162000190565b600580546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b6001600160a01b03163b151590565b828054620002ce90620004e5565b90600052602060002090601f016020900481019282620002f257600085556200033d565b82601f106200030d57805160ff19168380011785556200033d565b828001600101855582156200033d579182015b828111156200033d57825182559160200191906001019062000320565b506200034b9291506200034f565b5090565b5b808211156200034b576000815560010162000350565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200038e57600080fd5b81516001600160401b0380821115620003ab57620003ab62000366565b604051601f8301601f19908116603f01168101908282118183101715620003d657620003d662000366565b81604052838152602092508683858801011115620003f357600080fd5b600091505b83821015620004175785820183015181830184015290820190620003f8565b83821115620004295760008385830101525b9695505050505050565b600080600080608085870312156200044a57600080fd5b84516001600160a01b03811681146200046257600080fd5b60208601519094506001600160401b03808211156200048057600080fd5b6200048e888389016200037c565b94506040870151915080821115620004a557600080fd5b620004b3888389016200037c565b93506060870151915080821115620004ca57600080fd5b50620004d9878288016200037c565b91505092959194509250565b600181811c90821680620004fa57607f821691505b6020821081036200051b57634e487b7160e01b600052602260045260246000fd5b50919050565b61190d80620005316000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806357aea03e116100ad578063a9059cbb11610071578063a9059cbb146102b4578063dd62ed3e146102c2578063f3ef0d59146102fb578063fbd6948f1461030e578063ffb883d71461032157600080fd5b806357aea03e1461025557806370a082311461025d57806379cc67901461028657806395d89b4114610299578063a457c2d7146102a157600080fd5b8063313ce567116100f4578063313ce567146101c857806339509351146101d757806340c10f19146101ea57806342966c68146101ff57806345c05b8a1461021257600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd1461018457806330b67baa14610197575b600080fd5b610139610369565b60405161014691906116d5565b60405180910390f35b61016261015d36600461173f565b6103fb565b6040519015158152602001610146565b6002545b604051908152602001610146565b61016261019236600461176b565b610413565b6005546101b0906201000090046001600160a01b031681565b6040516001600160a01b039091168152602001610146565b60405160128152602001610146565b6101626101e536600461173f565b610457565b6101fd6101f836600461173f565b610496565b005b6101fd61020d3660046117ac565b610571565b60408051808201909152600481526361726d7960e01b6020909101526101767f1dfa95949f0b18e5ee916f85d0296148ce2f94b82b74404d6a5d6e64ed9b8c5f81565b61013961057d565b61017661026b3660046117c5565b6001600160a01b031660009081526020819052604090205490565b6101fd61029436600461173f565b61060b565b610139610615565b6101626102af36600461173f565b610624565b61016261019236600461173f565b6101766102d03660046117e9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101fd61030936600461173f565b6106c1565b6101fd61031c36600461176b565b610798565b604080518082019091526009815268756e6974735f616d6d60b81b6020909101526101767fa8f44ddae39a7529b601d3f4f7f6c626f032805f7c86c31ff69f1d04823a374f81565b60606003805461037890611822565b80601f01602080910402602001604051908101604052809291908181526020018280546103a490611822565b80156103f15780601f106103c6576101008083540402835291602001916103f1565b820191906000526020600020905b8154815290600101906020018083116103d457829003601f168201915b5050505050905090565b600033610409818585610884565b5060019392505050565b60405162461bcd60e51b8152602060048201526011602482015270199d5b98dd1a5bdb88191a5cd8589b1959607a1b60448201526000906064015b60405180910390fd5b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104099082908690610491908790611872565b610884565b6005546201000090046001600160a01b031633148061052657506005546040516371776fe760e11b81523360048201526000916201000090046001600160a01b03169063e2eedfce90602401602060405180830381865afa1580156104ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610523919061188a565b14155b6105635760405162461bcd60e51b815260206004820152600e60248201526d1bdb9b1e55dbdc9b19105cdcd95d60921b604482015260640161044e565b61056d82826109a8565b5050565b61057a81610a93565b50565b6006805461058a90611822565b80601f01602080910402602001604051908101604052809291908181526020018280546105b690611822565b80156106035780601f106105d857610100808354040283529160200191610603565b820191906000526020600020905b8154815290600101906020018083116105e657829003601f168201915b505050505081565b61056d8282610a9d565b60606004805461037890611822565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106a95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161044e565b6106b68286868403610884565b506001949350505050565b6005546201000090046001600160a01b031633148061075157506005546040516371776fe760e11b81523360048201526000916201000090046001600160a01b03169063e2eedfce90602401602060405180830381865afa15801561072a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074e919061188a565b14155b61078e5760405162461bcd60e51b815260206004820152600e60248201526d1bdb9b1e55dbdc9b19105cdcd95d60921b604482015260640161044e565b61056d8282610aa8565b6005546201000090046001600160a01b031633148061082857506005546040516371776fe760e11b81523360048201526000916201000090046001600160a01b03169063e2eedfce90602401602060405180830381865afa158015610801573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610825919061188a565b14155b6108655760405162461bcd60e51b815260206004820152600e60248201526d1bdb9b1e55dbdc9b19105cdcd95d60921b604482015260640161044e565b610870838383610c02565b505050565b6001600160a01b03163b151590565b6001600160a01b0383166108e65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161044e565b6001600160a01b0382166109475760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161044e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0382166109fe5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161044e565b610a0a60008383610ddd565b8060026000828254610a1c9190611872565b90915550506001600160a01b03821660009081526020819052604081208054839290610a49908490611872565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b61057a3382610aa8565b61078e823383611649565b6001600160a01b038216610b085760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161044e565b610b1482600083610ddd565b6001600160a01b03821660009081526020819052604090205481811015610b885760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161044e565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610bb79084906118a3565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038316610c665760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161044e565b6001600160a01b038216610cc85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161044e565b610cd3838383610ddd565b6001600160a01b03831660009081526020819052604090205481811015610d4b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161044e565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610d82908490611872565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dce91815260200190565b60405180910390a35b50505050565b6001600160a01b038316158015610ea7575060408051808201825260048082526361726d7960e01b60209092019190915260055491516371776fe760e11b81526001600160a01b03858116928201929092527f1dfa95949f0b18e5ee916f85d0296148ce2f94b82b74404d6a5d6e64ed9b8c5f926201000090049091169063e2eedfce90602401602060405180830381865afa158015610e81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea5919061188a565b145b15611105576000826001600160a01b031663fe7f15ef6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610eec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1091906118ba565b6001600160a01b03166341c525536040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7191906118ba565b9050826001600160a01b0316816001600160a01b031663d54647936040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdf91906118ba565b6001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561101c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104091906118ba565b6001600160a01b03160361110357806001600160a01b0316632a9439456040518163ffffffff1660e01b8152600401602060405180830381865afa15801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b091906118ba565b6001600160a01b0316637c3257776040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156110ea57600080fd5b505af11580156110fe573d6000803e3d6000fd5b505050505b505b6001600160a01b0382161580156111cf575060408051808201825260048082526361726d7960e01b60209092019190915260055491516371776fe760e11b81526001600160a01b03868116928201929092527f1dfa95949f0b18e5ee916f85d0296148ce2f94b82b74404d6a5d6e64ed9b8c5f926201000090049091169063e2eedfce90602401602060405180830381865afa1580156111a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111cd919061188a565b145b1561142d576000836001600160a01b031663fe7f15ef6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611214573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123891906118ba565b6001600160a01b03166341c525536040518163ffffffff1660e01b8152600401602060405180830381865afa158015611275573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129991906118ba565b9050836001600160a01b0316816001600160a01b031663d54647936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130791906118ba565b6001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611344573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136891906118ba565b6001600160a01b03160361142b57806001600160a01b0316632a9439456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d891906118ba565b6001600160a01b0316637c3257776040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561141257600080fd5b505af1158015611426573d6000803e3d6000fd5b505050505b505b6040805180820182526009815268756e6974735f616d6d60b81b60209091015260055490516371776fe760e11b81526001600160a01b0385811660048301527fa8f44ddae39a7529b601d3f4f7f6c626f032805f7c86c31ff69f1d04823a374f92620100009004169063e2eedfce90602401602060405180830381865afa1580156114bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e0919061188a565b0361153957826001600160a01b0316637c3257776040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561152057600080fd5b505af1158015611534573d6000803e3d6000fd5b505050505b6040805180820182526009815268756e6974735f616d6d60b81b60209091015260055490516371776fe760e11b81526001600160a01b0384811660048301527fa8f44ddae39a7529b601d3f4f7f6c626f032805f7c86c31ff69f1d04823a374f92620100009004169063e2eedfce90602401602060405180830381865afa1580156115c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ec919061188a565b0361087057816001600160a01b0316637c3257776040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561162c57600080fd5b505af1158015611640573d6000803e3d6000fd5b50505050505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610dd757818110156116c85760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161044e565b610dd78484848403610884565b600060208083528351808285015260005b81811015611702578581018301518582016040015282016116e6565b81811115611714576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b038116811461057a57600080fd5b6000806040838503121561175257600080fd5b823561175d8161172a565b946020939093013593505050565b60008060006060848603121561178057600080fd5b833561178b8161172a565b9250602084013561179b8161172a565b929592945050506040919091013590565b6000602082840312156117be57600080fd5b5035919050565b6000602082840312156117d757600080fd5b81356117e28161172a565b9392505050565b600080604083850312156117fc57600080fd5b82356118078161172a565b915060208301356118178161172a565b809150509250929050565b600181811c9082168061183657607f821691505b60208210810361185657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118855761188561185c565b500190565b60006020828403121561189c57600080fd5b5051919050565b6000828210156118b5576118b561185c565b500390565b6000602082840312156118cc57600080fd5b81516117e28161172a56fea2646970667358221220cffac2ab44ed6b6841fdc723d5b24daa90d8ac76307c7296b1f2d185221079d964736f6c634300080d0033496e697469616c697a61626c653a20636f6e747261637420697320616c726561";

type UnitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Unit__factory extends ContractFactory {
  constructor(...args: UnitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    worldAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    _worldUnitName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Unit> {
    return super.deploy(
      worldAddress,
      _tokenName,
      _tokenSymbol,
      _worldUnitName,
      overrides || {}
    ) as Promise<Unit>;
  }
  override getDeployTransaction(
    worldAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    _worldUnitName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      worldAddress,
      _tokenName,
      _tokenSymbol,
      _worldUnitName,
      overrides || {}
    );
  }
  override attach(address: string): Unit {
    return super.attach(address) as Unit;
  }
  override connect(signer: Signer): Unit__factory {
    return super.connect(signer) as Unit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitInterface {
    return new utils.Interface(_abi) as UnitInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Unit {
    return new Contract(address, _abi, signerOrProvider) as Unit;
  }
}
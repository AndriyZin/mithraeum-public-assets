/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnitsAmm,
  UnitsAmmInterface,
} from "../../../../contracts/assets/unitsAmm/UnitsAmm";

const _abi = [
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
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "armyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unitsBought",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toolsSpent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentUnits",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentTools",
        type: "uint256",
      },
    ],
    name: "UnitsBought",
    type: "event",
  },
  {
    inputs: [],
    name: "applyState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetName",
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
    name: "assetType",
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
    name: "currentZone",
    outputs: [
      {
        internalType: "contract IZone",
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
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
    ],
    name: "getAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "toolsToSell",
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
        name: "toolsToSell",
        type: "uint256",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "trueToolsToSell",
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
        name: "_zoneAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_worldAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_unitsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toolsAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastApplyStateTime",
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
    name: "multiplier",
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
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxToolsToSell",
        type: "uint256",
      },
    ],
    name: "swapToolsForExactUnits",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "toolsPayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxToolsToSell",
        type: "uint256",
      },
    ],
    name: "swapToolsForExactUnitsByZone",
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
  {
    inputs: [],
    name: "tools",
    outputs: [
      {
        internalType: "contract IResource",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "units",
    outputs: [
      {
        internalType: "contract IUnit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unitsBalance",
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
        name: "delta",
        type: "uint256",
      },
    ],
    name: "unitsGain",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061209d806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80637c32577711610097578063c9230c5d11610066578063c9230c5d1461021e578063f3ef114e14610226578063f4c8f3f11461022f578063fbf593441461023757600080fd5b80637c325777146101c8578063976a8435146101d05780639b4faa80146101e3578063c1153aaa146101f657600080fd5b806337dde60a116100d357806337dde60a146101785780633fe3347a1461018b57806341c52553146101a05780635e9ab149146101b357600080fd5b80630f4e7fb2146101055780631b3ed7221461012b5780631dafa1741461013457806330b67baa1461015f575b600080fd5b610118610113366004611b65565b61024a565b6040519081526020015b60405180910390f35b61011860055481565b600454610147906001600160a01b031681565b6040516001600160a01b039091168152602001610122565b600054610147906201000090046001600160a01b031681565b610118610186366004611b96565b610501565b610193610517565b6040516101229190611c27565b600154610147906001600160a01b031681565b6101c66101c1366004611c3a565b6105cb565b005b6101c6610699565b600354610147906001600160a01b031681565b6101186101f1366004611b65565b610737565b610209610204366004611b65565b6107d9565b60408051928352602083019190915201610122565b61019361091d565b61011860025481565b61011861094e565b610118610245366004611c9e565b6109e6565b60008160000361025c57506000919050565b6001546040805163c59d484760e01b815281516000936001600160a01b03169263c59d484792600480820193918290030181865afa1580156102a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c69190611ce4565b50600480546040516370a0823160e01b815230928101929092529192506000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610316573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033a9190611d08565b6003546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ac9190611d08565b9050806000036103c157506000949350505050565b6000816103d684670de0b6b3a7640000611d37565b6103e09190611d56565b905060008060029054906101000a90046001600160a01b03166001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa158015610436573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045a9190611d78565b6001600160a01b031663781e0efe6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bb9190611d08565b600554620151806104cc8589611d37565b6104d69190611d56565b6104e09190611d37565b6104ea9190611d37565b90506104f68188611d37565b979650505050505050565b600061050f33858585610a48565b949350505050565b60607f6c85b93e587873fbe6712f3b438d42c2945689b262f7bd34b8ea4e3f832a89e6600201805461054890611d95565b80601f016020809104026020016040519081016040528092919081815260200182805461057490611d95565b80156105c15780601f10610596576101008083540402835291602001916105c1565b820191906000526020600020905b8154815290600101906020018083116105a457829003601f168201915b5050505050905090565b60006105d7600161133d565b905080156105ef576000805461ff0019166101001790555b6105f8856113ca565b600180546001600160a01b0380891673ffffffffffffffffffffffffffffffffffffffff19928316179092556005849055600380548784169083161790556004805492861692909116919091179055426002558015610691576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b60025442036106a457565b6000600254426106b49190611dcf565b426002556003549091506001600160a01b03166340c10f19306106d68461024a565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561071c57600080fd5b505af1158015610730573d6000803e3d6000fd5b5050505050565b600480546040516370a0823160e01b8152309281019290925260009182916001600160a01b0316906370a0823190602401602060405180830381865afa158015610785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a99190611d08565b9050826107b461094e565b6107be9190611dcf565b6107c88483611d37565b6107d29190611d56565b9392505050565b600480546040516370a0823160e01b81523092810192909252600091829182916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561082b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084f9190611d08565b9050600061085b61094e565b905073__$b96f6cc754b665f2373f69c32648f7914e$__63fb5608f86108818785611de6565b61088b8885611d37565b6108959190611d56565b6040518263ffffffff1660e01b81526004016108b391815260200190565b602060405180830381865af41580156108d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f49190611d08565b93506109008482611dcf565b61090a8584611d37565b6109149190611d56565b92505050915091565b60607f6c85b93e587873fbe6712f3b438d42c2945689b262f7bd34b8ea4e3f832a89e6600301805461054890611d95565b6000806002544261095f9190611dcf565b905061096a8161024a565b6003546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156109b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d69190611d08565b6109e09190611de6565b91505090565b6001546000906001600160a01b03163314610a335760405162461bcd60e51b81526020600482015260086024820152676f6e6c795a6f6e6560c01b60448201526064015b60405180910390fd5b610a3f85858585610a48565b95945050505050565b600480546040516370a0823160e01b8152309281019290925260009182916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aba9190611d08565b11610b075760405162461bcd60e51b815260206004820152601f60248201527f556e697473414d4d3a20546f6f6c732062616c616e6365206973207a65726f006044820152606401610a2a565b670de0b6b3a7640000610b1861094e565b1015610b785760405162461bcd60e51b815260206004820152602960248201527f556e697473414d4d3a20556e6974732062616c616e6365206973206c657373206044820152680e8d0c2dc4062ca62760bb1b6064820152608401610a2a565b670de0b6b3a7640000831015610bdb5760405162461bcd60e51b815260206004820152602260248201527f414d4d3a20496e73756666696369656e7420756e6974732062757920616d6f756044820152611b9d60f21b6064820152608401610a2a565b60405163ae41bb9b60e01b81526004810184905273__$b96f6cc754b665f2373f69c32648f7914e$__9063ae41bb9b90602401602060405180830381865af4158015610c2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4f9190611dfe565b610cb15760405162461bcd60e51b815260206004820152602d60248201527f414d4d3a20556e77686f6c6520616d6f756e74206f6620756e69747320746f2060448201526c189d5e481cdc1958da599a5959609a1b6064820152608401610a2a565b60008211610d155760405162461bcd60e51b815260206004820152602b60248201527f414d4d3a20496e73756666696369656e74206d6178696d756d20746f6f6c732060448201526a1cd95b1b08185b5bdd5b9d60aa1b6064820152608401610a2a565b600154604080516341c5255360e01b815290516001600160a01b03928316928716916341c525539160048083019260209291908290030181865afa158015610d61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d859190611d78565b6001600160a01b031614610dea5760405162461bcd60e51b815260206004820152602660248201527f736574746c656d656e7420646f65736e27742062656c6f6e6720746f2074686960448201526573207a6f6e6560d01b6064820152608401610a2a565b6000610df58561146c565b90506000610e02866115cb565b905084610e0f83836119d2565b1015610e4e5760405162461bcd60e51b815260206004820152600e60248201526d195e18d959591959081b1a5b5a5d60921b6044820152606401610a2a565b6000610e5986610737565b905084811115610ec35760405162461bcd60e51b815260206004820152602f60248201527f414d4d3a20746f6f6c7320746f2073656c6c206973206d6f7265207468616e2060448201526e1cdc1958da599a5959081b1a5b5a5d608a1b6064820152608401610a2a565b600480546040516370a0823160e01b81526001600160a01b038b8116938201939093528392909116906370a0823190602401602060405180830381865afa158015610f12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f369190611d08565b1015610f845760405162461bcd60e51b815260206004820152601860248201527f6e6f7420656e6f75676820746f6f6c7320746f2073656c6c00000000000000006044820152606401610a2a565b6000876001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe89190611d78565b9050806001600160a01b0316631d8557d76040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561102557600080fd5b505af1158015611039573d6000803e3d6000fd5b50505050600080826001600160a01b031663a74bd4f66040518163ffffffff1660e01b81526004016040805180830381865afa15801561107d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a19190611e38565b915091508067ffffffffffffffff166000146110ff5760405162461bcd60e51b815260206004820152601d60248201527f63616e2774206869726520756e697473207768696c65206d6f76696e670000006044820152606401610a2a565b6004805460405163f3ef0d5960e01b81526001600160a01b038e8116938201939093526024810187905285929091169063f3ef0d5990604401600060405180830381600087803b15801561115257600080fd5b505af1158015611166573d6000803e3d6000fd5b505060035460405163fbd6948f60e01b81523060048201526001600160a01b038581166024830152604482018f9052909116925063fbd6948f9150606401600060405180830381600087803b1580156111be57600080fd5b505af11580156111d2573d6000803e3d6000fd5b5050600154604051636e08f72160e01b81526001600160a01b038f81166004830152606060248301526005606483015264544f4f4c5360d81b6084830152604482018a90529091169250636e08f721915060a401600060405180830381600087803b15801561124057600080fd5b505af1158015611254573d6000803e3d6000fd5b505050507fc614369dd8caac9218314850373a47330627890dde28a1877f59dc652b26e66c8c828c8861128561094e565b600480546040516370a0823160e01b815230928101929092526001600160a01b0316906370a0823190602401602060405180830381865afa1580156112ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f29190611d08565b604080516001600160a01b039788168152969095166020870152938501929092526060840152608083015260a082015260c00160405180910390a150979a9950505050505050505050565b60008054610100900460ff1615611384578160ff1660011480156113605750303b155b61137c5760405162461bcd60e51b8152600401610a2a90611e6b565b506000919050565b60005460ff8084169116106113ab5760405162461bcd60e51b8152600401610a2a90611e6b565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166114355760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610a2a565b600080546001600160a01b03909216620100000275ffffffffffffffffffffffffffffffffffffffff000019909216919091179055565b600080829050806001600160a01b0316635c8872076040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156114ad57600080fd5b505af11580156114c1573d6000803e3d6000fd5b50506040517fff55dddf00000000000000000000000000000000000000000000000000000000815260206004820152600d60248201526c2327a92a24a324a1a0aa24a7a760991b6044820152600092506001600160a01b038416915063ff55dddf90606401602060405180830381865afa158015611543573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115679190611d78565b9050806001600160a01b0316637633a22c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115a7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050f9190611d08565b6000808290506000816001600160a01b031663f10e38af6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116359190611d78565b9050806001600160a01b0316631d8557d76040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561167257600080fd5b505af1158015611686573d6000803e3d6000fd5b50505050806001600160a01b0316633b81149d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ec9190611dfe565b6117385760405162461bcd60e51b815260206004820152601e60248201527f63616e2068697265206f6e6c79206f6e20686f6d6520706f736974696f6e00006044820152606401610a2a565b6000816001600160a01b0316632de7e9b06040518163ffffffff1660e01b8152600401602060405180830381865afa158015611778573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179c9190611d78565b905060006117a8611ae8565b6001600160a01b031663027aa9f56040518163ffffffff1660e01b8152600401600060405180830381865afa1580156117e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261180d9190810190611f00565b905060005b81518110156119c857600082828151811061182f5761182f612016565b6020908102919091010151600054604051631b80bac360e11b81529192506201000090046001600160a01b031690633701758690611871908490600401611c27565b602060405180830381865afa15801561188e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b29190611d78565b6040516370a0823160e01b81526001600160a01b03878116600483015291909116906370a0823190602401602060405180830381865afa1580156118fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191e9190611d08565b6119289088611de6565b96506001600160a01b038416156119b557604051632e828edf60e21b81526001600160a01b0385169063ba0a3b7c90611967908890859060040161202c565b602060405180830381865afa158015611984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a89190611d08565b6119b29088611de6565b96505b50806119c08161204e565b915050611812565b5050505050919050565b60008073__$b96f6cc754b665f2373f69c32648f7914e$__63fb5608f86119f7611ae8565b6001600160a01b0316635ca32c136040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a589190611d08565b611a629087611d56565b6040518263ffffffff1660e01b8152600401611a8091815260200190565b602060405180830381865af4158015611a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac19190611d08565b9050808310611ad4576000915050611ae2565b611ade8382611dcf565b9150505b92915050565b60008060029054906101000a90046001600160a01b03166001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b609190611d78565b905090565b600060208284031215611b7757600080fd5b5035919050565b6001600160a01b0381168114611b9357600080fd5b50565b600080600060608486031215611bab57600080fd5b8335611bb681611b7e565b95602085013595506040909401359392505050565b60005b83811015611be6578181015183820152602001611bce565b83811115611bf5576000848401525b50505050565b60008151808452611c13816020860160208601611bcb565b601f01601f19169290920160200192915050565b6020815260006107d26020830184611bfb565b600080600080600060a08688031215611c5257600080fd5b8535611c5d81611b7e565b94506020860135611c6d81611b7e565b93506040860135611c7d81611b7e565b92506060860135611c8d81611b7e565b949793965091946080013592915050565b60008060008060808587031215611cb457600080fd5b8435611cbf81611b7e565b93506020850135611ccf81611b7e565b93969395505050506040820135916060013590565b60008060408385031215611cf757600080fd5b505080516020909101519092909150565b600060208284031215611d1a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611d5157611d51611d21565b500290565b600082611d7357634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611d8a57600080fd5b81516107d281611b7e565b600181811c90821680611da957607f821691505b602082108103611dc957634e487b7160e01b600052602260045260246000fd5b50919050565b600082821015611de157611de1611d21565b500390565b60008219821115611df957611df9611d21565b500190565b600060208284031215611e1057600080fd5b815180151581146107d257600080fd5b805167ffffffffffffffff811681146113c557600080fd5b60008060408385031215611e4b57600080fd5b611e5483611e20565b9150611e6260208401611e20565b90509250929050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ef857611ef8611eb9565b604052919050565b60006020808385031215611f1357600080fd5b825167ffffffffffffffff80821115611f2b57600080fd5b8185019150601f8681840112611f4057600080fd5b825182811115611f5257611f52611eb9565b8060051b611f61868201611ecf565b918252848101860191868101908a841115611f7b57600080fd5b87870192505b8383101561200857825186811115611f995760008081fd5b8701603f81018c13611fab5760008081fd5b88810151604088821115611fc157611fc1611eb9565b611fd2828901601f19168c01611ecf565b8281528e82848601011115611fe75760008081fd5b611ff6838d8301848701611bcb565b85525050509187019190870190611f81565b9a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038316815260406020820152600061050f6040830184611bfb565b60006001820161206057612060611d21565b506001019056fea264697066735822122083780a5179ae7d2736eafe36b24e2691ef8403b45cab6255abdb8f1765f7dbce64736f6c634300080d0033";

type UnitsAmmConstructorParams =
  | [linkLibraryAddresses: UnitsAmmLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnitsAmmConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class UnitsAmm__factory extends ContractFactory {
  constructor(...args: UnitsAmmConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, UnitsAmm__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: UnitsAmmLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b96f6cc754b665f2373f69c32648f7914e\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/MathExtension.sol:MathExtension"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnitsAmm> {
    return super.deploy(overrides || {}) as Promise<UnitsAmm>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UnitsAmm {
    return super.attach(address) as UnitsAmm;
  }
  override connect(signer: Signer): UnitsAmm__factory {
    return super.connect(signer) as UnitsAmm__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitsAmmInterface {
    return new utils.Interface(_abi) as UnitsAmmInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnitsAmm {
    return new Contract(address, _abi, signerOrProvider) as UnitsAmm;
  }
}

export interface UnitsAmmLibraryAddresses {
  ["contracts/libraries/MathExtension.sol:MathExtension"]: string;
}
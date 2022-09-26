/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InviteFacet, InviteFacetInterface } from "../InviteFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "NewContent",
    type: "event",
  },
  {
    inputs: [],
    name: "content",
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
    name: "getAllowedExternalFunctions",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "res",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCallbackSelector",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContent",
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
    name: "getFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "res",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequiredSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "res",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "setContent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inviteFacet_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settlementAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "entryLimit",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "expiredAt",
            type: "uint64",
          },
          {
            internalType: "bytes[]",
            name: "callbacks",
            type: "bytes[]",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes[]",
            name: "replaceSignatures",
            type: "bytes[]",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
        ],
        internalType: "struct InviteFacetBasic.JoinData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "inviteFacet_join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "b",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    name: "bytesToBytes4",
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
        internalType: "bytes",
        name: "callback",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "replaceSignaturesUsed",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "signatures",
        type: "bytes[]",
      },
    ],
    name: "replaceCallback",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "bytesArrayToBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "pack",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052602e6080818152906200176160a039805162000029916000916020909101906200003e565b503480156200003757600080fd5b50620000ea565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000765760008555620000c1565b82601f106200009157805160ff1916838001178555620000c1565b82800160010185558215620000c1579182015b82811115620000c1578251825591602001919060010190620000a4565b50620000cf929150620000d3565b5090565b5b80821115620000cf5760008155600101620000d4565b61166780620000fa6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638a4d5a671161008c578063cbd85c7611610066578063cbd85c7614610195578063e7071964146101a8578063fd896f9d146101b0578063fe2f9e26146101b8576100cf565b80638a4d5a671461015a57806392aec2fc14610162578063c9830acc14610182576100cf565b806301e19399146100d45780631e7d9e84146100f25780633be8fd6a146100fa5780635425df591461010f57806359016c7914610124578063679010d014610139575b600080fd5b6100dc6101cb565b6040516100e9919061130b565b60405180910390f35b6100dc61021e565b61010d610108366004611204565b610255565b005b6101176102a3565b6040516100e99190611380565b61012c6102ac565b6040516100e99190611395565b61014c61014736600461112d565b610342565b6040516100e99291906113a8565b61012c610573565b610175610170366004611204565b610601565b6040516100e99190611359565b61012c6101903660046110b8565b610632565b6101176101a33660046111c1565b6107f2565b61010d610839565b6100dc610847565b61010d6101c6366004610fc6565b6108ad565b6040805160018082528183019092526060916020808301908036833701905050905063fe2f9e2660e01b8160008151811061020257fe5b6001600160e01b03199092166020928302919091019091015290565b60408051600180825281830190925260609160208083019080368337019050509050635c6171a360e01b8160008151811061020257fe5b8051610268906000906020840190610df9565b507fff74e91598aed6ae5d2fdcf8b24cd2c7be49a0808112a305069355b7160f23f9816040516102989190611395565b60405180910390a150565b61060f60f31b90565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103385780601f1061030d57610100808354040283529160200191610338565b820191906000526020600020905b81548152906001019060200180831161031b57829003601f168201915b5050505050905090565b606060006001600160a01b0380871690861682808060045b8c51811015610560578c51601160fb1b908e908390811061037757fe5b01602001516001600160f81b031916141561039e5760019093019260009250829150610410565b8c51609960f81b908e90839081106103b257fe5b01602001516001600160f81b03191614156103d95760009350600190920191839150610410565b8c51605560f81b908e90839081106103ed57fe5b01602001516001600160f81b031916141561041057600093508392506001909101905b8361ffff16601414156104735760005b60148110156104695786816020811061043557fe5b1a60f81b8e8260138503018151811061044a57fe5b60200101906001600160f81b031916908160001a905350600101610420565b5060009350610558565b8261ffff16601414156104d95760005b60148110156104cf578581600c016020811061049b57fe5b1a60f81b8e826013850301815181106104b057fe5b60200101906001600160f81b031916908160001a905350600101610483565b5060009250610558565b8161ffff16604114156105585760005b604181101561054c57898b815181106104fe57fe5b6020026020010151818151811061051157fe5b602001015160f81c60f81b8e8260408503018151811061052d57fe5b60200101906001600160f81b031916908160001a9053506001016104e9565b50600190990198600091505b60010161035a565b509a9b979a509698505050505050505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b505050505081565b6000816040516020016106149190611276565b6040516020818303038152906040528051906020012090505b919050565b6060600061063e610c31565b604080516000815260208101918290525191925061066191600184019190610df9565b5060005b835181101561075d5760005b84828151811061067d57fe5b602002602001015151811015610754578260010185838151811061069d57fe5b602002602001015182815181106106b057fe5b602001015160f81c60f81b90808054603f811680603e81146106ec57600283018455600183166106de578192505b600160028404019350610704565b600084815260209081902060ff198516905560419094555b5050506001900381546001161561072a5790600052602060002090602091828204019190065b815460ff601f929092036101000a9182021916600160f81b90930402919091179055600101610671565b50600101610665565b5060018181018054604080516020600295841615610100026000190190931694909404601f8101839004830285018301909152808452908301828280156107e55780601f106107ba576101008083540402835291602001916107e5565b820191906000526020600020905b8154815290600101906020018083116107c857829003601f168201915b5050505050915050919050565b60008060005b60048110156108315780600802858286018151811061081357fe5b01602001516001600160f81b031916901c91909117906001016107f8565b509392505050565b33301461084557600080fd5b565b604080516002808252606080830184529260208301908036833701905050905063e707196460e01b8160008151811061087c57fe5b6001600160e01b0319909216602092830291909101909101528051637f17cf1360e11b908290600190811061020257fe5b60008290506000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ed57600080fd5b505afa158015610901573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109259190610faa565b9050336001600160a01b038216146109585760405162461bcd60e51b815260040161094f90611412565b60405180910390fd5b604051632c3e6f0f60e11b81526000906001600160a01b0384169063587cde1e906109879030906004016112f7565b60606040518083038186803b15801561099f57600080fd5b505afa1580156109b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d791906110f3565b50509050806109f85760405162461bcd60e51b815260040161094f906113ca565b6000610a02610c31565b8551606087015160405192935090918391610a1c91611276565b90815260200160405180910390205410610a485760405162461bcd60e51b815260040161094f90611500565b846020015167ffffffffffffffff164210610a755760405162461bcd60e51b815260040161094f9061159a565b610a7e85610c55565b610a9a5760405162461bcd60e51b815260040161094f90611537565b6000610aa4610d11565b90506000805b876040015151811015610bfd57826005016000610adf8a604001518481518110610ad057fe5b602002602001015160006107f2565b6001600160e01b031916815260208101919091526040016000205460ff16610b195760405162461bcd60e51b815260040161094f90611492565b610b4188604001518281518110610b2c57fe5b6020026020010151338b858c60800151610342565b89604001518381518110610b5157fe5b6020026020010181945082905250506000306001600160a01b031689604001518381518110610b7c57fe5b6020026020010151604051610b919190611276565b6000604051808303816000865af19150503d8060008114610bce576040519150601f19603f3d011682016040523d82523d6000602084013e610bd3565b606091505b5050905080610bf45760405162461bcd60e51b815260040161094f9061145b565b50600101610aaa565b5060608701516040518491610c1191611276565b908152604051908190036020019020805460010190555050505050505050565b7f36d9939207e4142f447eaa18f9857447b01c1d19dc9d33a570c92d4b61a8778290565b600080610c9a610c688460400151610632565b8451602080870151604051610c7f94939201611292565b60405160208183030381529060405280519060200120610d35565b9050610ca4610d11565b60a08401516001600160a01b03166000908152600791909101602052604090205460ff16610ce45760405162461bcd60e51b815260040161094f906114c9565b8260a001516001600160a01b0316610d00828560600151610d48565b6001600160a01b0316149392505050565b7f03d8b6b59e3b525525651b66961f055b5ae461f7b6386b2bd64253d357ef392590565b60008160405160200161061491906112c6565b600080600080610d5785610db7565b92509250925060018684848460405160008152602001604052604051610d809493929190611362565b6020604051602081039080840390855afa158015610da2573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b60008060008351604114610ddd5760405162461bcd60e51b815260040161094f9061156e565b5050506020810151604082015160609092015160001a92909190565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282610e2f5760008555610e75565b82601f10610e4857805160ff1916838001178555610e75565b82800160010185558215610e75579182015b82811115610e75578251825591602001919060010190610e5a565b50610e81929150610e85565b5090565b5b80821115610e815760008155600101610e86565b600067ffffffffffffffff831115610eae57fe5b610ec1601f8401601f19166020016115c5565b9050828152838383011115610ed557600080fd5b828260208301376000602084830101529392505050565b803561062d81611619565b600082601f830112610f07578081fd5b8135602067ffffffffffffffff821115610f1d57fe5b610f2a81828402016115c5565b82815281810190858301855b85811015610f5f57610f4d898684358b0101610f6c565b84529284019290840190600101610f36565b5090979650505050505050565b600082601f830112610f7c578081fd5b610f8b83833560208501610e9a565b9392505050565b803567ffffffffffffffff8116811461062d57600080fd5b600060208284031215610fbb578081fd5b8151610f8b81611619565b60008060408385031215610fd8578081fd5b8235610fe381611619565b9150602083013567ffffffffffffffff80821115610fff578283fd5b9084019060c08287031215611012578283fd5b61101c60c06115c5565b8235815261102c60208401610f92565b6020820152604083013582811115611042578485fd5b61104e88828601610ef7565b604083015250606083013582811115611065578485fd5b61107188828601610f6c565b606083015250608083013582811115611088578485fd5b61109488828601610ef7565b6080830152506110a660a08401610eec565b60a08201528093505050509250929050565b6000602082840312156110c9578081fd5b813567ffffffffffffffff8111156110df578182fd5b6110eb84828501610ef7565b949350505050565b600080600060608486031215611107578081fd5b83518015158114611116578182fd5b602085015160409095015190969495509392505050565b600080600080600060a08688031215611144578081fd5b853567ffffffffffffffff8082111561115b578283fd5b61116789838a01610f6c565b96506020880135915061117982611619565b90945060408701359061118b82611619565b90935060608701359250608087013590808211156111a7578283fd5b506111b488828901610ef7565b9150509295509295909350565b600080604083850312156111d3578182fd5b823567ffffffffffffffff8111156111e9578283fd5b6111f585828601610f6c565b95602094909401359450505050565b600060208284031215611215578081fd5b813567ffffffffffffffff81111561122b578182fd5b8201601f8101841361123b578182fd5b6110eb84823560208401610e9a565b600081518084526112628160208601602086016115e9565b601f01601f19169290920160200192915050565b600082516112888184602087016115e9565b9190910192915050565b600084516112a48184602089016115e9565b919091019283525060c01b6001600160c01b0319166020820152602801919050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b8181101561134d5783516001600160e01b03191683529284019291840191600101611327565b50909695505050505050565b90815260200190565b93845260ff9290921660208401526040830152606082015260800190565b6001600160e01b031991909116815260200190565b600060208252610f8b602083018461124a565b6000604082526113bb604083018561124a565b90508260208301529392505050565b60208082526028908201527f736574746c656d656e742073686f756c6420626520756e6c6f636b656420666f604082015267391038363ab3b4b760c11b606082015260800190565b60208082526029908201527f7375626a6563747346616365745f6a6f696e3a206f6e6c7920736574746c656d60408201526832b73a1037bbb732b960b91b606082015260800190565b6020808252601c908201527f696e76616c6964207472616e73616374696f6e20726573706f6e736500000000604082015260600190565b60208082526017908201527f66756e6374696f6e206973206e6f7420616c6c6f776564000000000000000000604082015260600190565b6020808252601f908201527f7369676e6572206861736e277420656e6f756768207065726d697373696f6e00604082015260600190565b6020808252601b908201527f657863656564207369676e6174757265206a6f696e206c696d69740000000000604082015260600190565b60208082526019908201527f696e76616c696420766572696669636174696f6e206461746100000000000000604082015260600190565b6020808252601290820152710d2dcecc2d8d2c840e6d2ce40d8cadccee8d60731b604082015260600190565b6020808252601190820152701cda59db985d1d5c9948195e1c1a5c9959607a1b604082015260600190565b60405181810167ffffffffffffffff811182821017156115e157fe5b604052919050565b60005b838110156116045781810151838201526020016115ec565b83811115611613576000848401525b50505050565b6001600160a01b038116811461162e57600080fd5b5056fea2646970667358221220598b03cf18e7fb979462acda5607d05147a06e180347da2180f6b6393d7b062b64736f6c63430007060033516d647639734c6e6956434d6e6665627a4570334c576756614c4e354a3166636358347968587a634c7434437659";

export class InviteFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InviteFacet> {
    return super.deploy(overrides || {}) as Promise<InviteFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InviteFacet {
    return super.attach(address) as InviteFacet;
  }
  connect(signer: Signer): InviteFacet__factory {
    return super.connect(signer) as InviteFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InviteFacetInterface {
    return new utils.Interface(_abi) as InviteFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InviteFacet {
    return new Contract(address, _abi, signerOrProvider) as InviteFacet;
  }
}
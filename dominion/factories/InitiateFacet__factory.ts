/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InitiateFacet, InitiateFacetInterface } from "../InitiateFacet";

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
        internalType: "address",
        name: "_worldAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
    ],
    name: "initiateFacet_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_policyAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_inits",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "_calldata",
        type: "bytes[]",
      },
    ],
    name: "initiateFacet_addPolicies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_policyAddress",
        type: "address",
      },
    ],
    name: "initiateFacet_selfdestruct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061217a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635425df591161005b5780635425df59146100d357806359016c79146100e8578063dc49d914146100fd578063fd896f9d1461011057610088565b806301e193991461008d5780631e7d9e841461008d578063356bc78b146100ab578063476a4fa6146100c0575b600080fd5b610095610118565b6040516100a29190611b1d565b60405180910390f35b6100be6100b9366004611808565b61011d565b005b6100be6100ce3660046117e7565b6101b8565b6100db6102b6565b6040516100a29190611be2565b6100f06102bf565b6040516100a29190611bf7565b6100be61010b366004611854565b6102dd565b6100956104c3565b606090565b6000610127610578565b6006810180546001600160a01b0319166001600160a01b038616179055905060005b82518110156101a057600182600701600085848151811061016657fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101610149565b5060020180546001600160a01b031916331790555050565b604080516001808252818301909252600091816020015b6101d7611685565b8152602001906001900390816101cf579050506040805160608101909152600081529091506020810160028152602001836001600160a01b031663fd896f9d6040518163ffffffff1660e01b815260040160006040518083038186803b15801561024057600080fd5b505afa158015610254573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261027c9190810190611960565b8152508160008151811061028c57fe5b60200260200101819052506102b28160006040518060200160405280600081525061059c565b5050565b61060f60f31b90565b604080518082019091526004815263544f444f60e01b602082015290565b815183511480156102ef575080518251145b6103145760405162461bcd60e51b815260040161030b90611e1f565b60405180910390fd5b60005b83518110156104645783818151811061032c57fe5b60200260200101516001600160a01b031663fd896f9d6040518163ffffffff1660e01b815260040160006040518083038186803b15801561036c57600080fd5b505afa9250505080156103a157506040513d6000823e601f3d908101601f1916820160405261039e9190810190611960565b60015b6103bd5760405162461bcd60e51b815260040161030b90611d55565b508381815181106103ca57fe5b60200260200101516001600160a01b03166359016c796040518163ffffffff1660e01b815260040160006040518083038186803b15801561040a57600080fd5b505afa92505050801561043f57506040513d6000823e601f3d908101601f1916820160405261043c9190810190611a11565b60015b61045b5760405162461bcd60e51b815260040161030b90611d55565b50600101610317565b5060005b83518110156104bd576104b584828151811061048057fe5b602002602001015184838151811061049457fe5b60200260200101518484815181106104a857fe5b6020026020010151610724565b600101610468565b50505050565b6040805160038082526080820190925260609160208201838036833701905050905063356bc78b60e01b816000815181106104fa57fe5b6001600160e01b0319909216602092830291909101909101528051633712764560e21b908290600190811061052b57fe5b6001600160e01b03199092166020928302919091019091015280516323b527d360e11b908290600290811061055c57fe5b6001600160e01b03199092166020928302919091019091015290565b7f03d8b6b59e3b525525651b66961f055b5ae461f7b6386b2bd64253d357ef392590565b60005b83518110156106d95760008482815181106105b657fe5b6020026020010151602001519050600060028111156105d157fe5b8160028111156105dd57fe5b14156106205761061b8583815181106105f257fe5b60200260200101516000015186848151811061060a57fe5b602002602001015160400151610cf6565b6106d0565b600181600281111561062e57fe5b141561066c5761061b85838151811061064357fe5b60200260200101516000015186848151811061065b57fe5b602002602001015160400151610ef7565b600281600281111561067a57fe5b14156106b85761061b85838151811061068f57fe5b6020026020010151600001518684815181106106a757fe5b60200260200101516040015161110d565b60405162461bcd60e51b815260040161030b90611d8c565b5060010161059f565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161070d93929190611b30565b60405180910390a161071f82826111c1565b505050565b600061072e610578565b6001600160a01b03851660009081526001820160205260409020549091508015610860574282600001600183038154811061076557fe5b906000526020600020906003020160000160156101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060008260000160018303815481106107b057fe5b906000526020600020906003020160010160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060018260000160018303815481106107fb57fe5b906000526020600020906003020160000160146101000a81548160ff0219169083151502179055508282600001600183038154811061083657fe5b9060005260206000209060030201600201908051906020019061085a9291906116a4565b50610960565b6040805160a0810182526001600160a01b038781168252600160208084018281524267ffffffffffffffff908116968601968752600060608701818152608088018c81528b548088018d558c8452928690208951600390940201805495519a516001600160a01b0319909616939098169290921760ff60a01b1916600160a01b991515999099029890981767ffffffffffffffff60a81b1916600160a81b938316939093029290921785559551928401805467ffffffffffffffff191693909616929092179094555180519293919261093f92600285019201906116a4565b505082546001600160a01b0387166000908152600185016020526040902055505b604080516001808252818301909252600091816020015b61097f611685565b8152602001906001900390816109775790505060408051606081019091526001600160a01b03881681529091506020810160008152602001876001600160a01b031663fd896f9d6040518163ffffffff1660e01b815260040160006040518083038186803b1580156109f057600080fd5b505afa158015610a04573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a2c9190810190611960565b81525081600081518110610a3c57fe5b6020026020010181905250610a5281868661059c565b6000866001600160a01b0316635425df596040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8d57600080fd5b505afa158015610aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac591906119f7565b90506001600160e01b0319811661060f60f31b14610b3a57600384018054600181018255600082815260208082206008840401805460e087901c6004600790961686026101000a90810263ffffffff9091021990911617905592546001600160e01b0319851682529187019092526040909120555b6000876001600160a01b0316631e7d9e846040518163ffffffff1660e01b815260040160006040518083038186803b158015610b7557600080fd5b505afa158015610b89573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bb19190810190611960565b905060005b8151811015610c155760006001600160a01b0316610be6838381518110610bd957fe5b60200260200101516112e6565b6001600160a01b03161415610c0d5760405162461bcd60e51b815260040161030b90612019565b600101610bb6565b506000886001600160a01b03166301e193996040518163ffffffff1660e01b815260040160006040518083038186803b158015610c5157600080fd5b505afa158015610c65573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c8d9190810190611960565b905060005b8151811015610cea576001876005016000848481518110610caf57fe5b6020908102919091018101516001600160e01b0319168252810191909152604001600020805460ff1916911515919091179055600101610c92565b50505050505050505050565b6000815111610d175760405162461bcd60e51b815260040161030b90611cad565b6000610d2161132e565b90506001600160a01b038316610d495760405162461bcd60e51b815260040161030b90611dd3565b6001600160a01b038316600090815260018201602052604090205461ffff8116610deb57610d8f8460405180606001604052806024815260200161212160249139611352565b6002820180546001600160a01b038616600081815260018087016020908152604083208201805461ffff191661ffff90961695909517909455845490810185559381529190912090910180546001600160a01b03191690911790555b60005b8351811015610ef0576000848281518110610e0557fe5b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03168015610e555760405162461bcd60e51b815260040161030b90611f11565b506001600160a01b0386166000818152600186810160209081526040808420805480850182559085528285206008820401805463ffffffff60079093166004026101000a928302191660e089901c929092029190911790556001600160e01b0319909516835287905292902080546001600160a01b03191690911761ffff60a01b1916600160a01b61ffff8616021790559182019101610dee565b5050505050565b6000815111610f185760405162461bcd60e51b815260040161030b90611cad565b6000610f2261132e565b90506001600160a01b038316610f4a5760405162461bcd60e51b815260040161030b90611dd3565b6001600160a01b038316600090815260018201602052604090205461ffff8116610fec57610f908460405180606001604052806024815260200161212160249139611352565b6002820180546001600160a01b038616600081815260018087016020908152604083208201805461ffff191661ffff90961695909517909455845490810185559381529190912090910180546001600160a01b03191690911790555b60005b8351811015610ef057600084828151811061100657fe5b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b0390811690871681141561105c5760405162461bcd60e51b815260040161030b90611f66565b6110668183611373565b506001600160e01b03198116600081815260208681526040808320805461ffff60a01b1916600160a01b61ffff8a16021781556001600160a01b038b168085526001808b018552928520805480850182559086528486206008820401805463ffffffff60079093166004026101000a928302191660e09990991c91909102979097179096559390925286905281546001600160a01b03191690921790559182019101610fef565b600081511161112e5760405162461bcd60e51b815260040161030b90611cad565b600061113861132e565b90506001600160a01b038316156111615760405162461bcd60e51b815260040161030b90611fc3565b60005b82518110156104bd57600083828151811061117b57fe5b6020908102919091018101516001600160e01b031981166000908152918590526040909120549091506001600160a01b03166111b78183611373565b5050600101611164565b6001600160a01b0382166111f3578051156111ee5760405162461bcd60e51b815260040161030b90611c0a565b6102b2565b60008151116112145760405162461bcd60e51b815260040161030b90611e66565b6001600160a01b038216301461124657611246826040518060600160405280602881526020016120f960289139611352565b600080836001600160a01b0316836040516112619190611b01565b6000604051808303816000865af19150503d806000811461129e576040519150601f19603f3d011682016040523d82523d6000602084013e6112a3565b606091505b5091509150816104bd578051156112ce578060405162461bcd60e51b815260040161030b9190611bf7565b60405162461bcd60e51b815260040161030b90611c67565b6001600160e01b0319811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c60205260409020546001600160a01b03165b919050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b813b81816104bd5760405162461bcd60e51b815260040161030b9190611bf7565b600061137d61132e565b90506001600160a01b0383166113a55760405162461bcd60e51b815260040161030b90611cf8565b6001600160a01b0383163014156113ce5760405162461bcd60e51b815260040161030b90611ec3565b6001600160e01b03198216600090815260208281526040808320546001600160a01b03871684526001850190925290912054600160a01b90910461ffff1690600019018082146114ef576001600160a01b0385166000908152600184016020526040812080548390811061143e57fe5b600091825260208083206008830401546001600160a01b038a168452600188019091526040909220805460079092166004026101000a90920460e01b92508291908590811061148957fe5b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b031992909216825284905260409020805461ffff60a01b1916600160a01b61ffff8516021790555b6001600160a01b0385166000908152600184016020526040902080548061151257fe5b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b0319861682528490526040902080546001600160b01b031916905580610ef05760028301546001600160a01b03861660009081526001858101602052604090912001546000199091019061ffff168082146116265760008560020183815481106115b057fe5b6000918252602090912001546002870180546001600160a01b0390921692508291849081106115db57fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b0394851617905592909116815260018781019092526040902001805461ffff191661ffff83161790555b8460020180548061163357fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03891682526001878101909152604090912001805461ffff1916905550505050505050565b6040805160608082018352600080835260208301529181019190915290565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826116da5760008555611720565b82601f106116f357805160ff1916838001178555611720565b82800160010185558215611720579182015b82811115611720578251825591602001919060010190611705565b5061172c929150611730565b5090565b5b8082111561172c5760008155600101611731565b80356001600160a01b038116811461132957600080fd5b600082601f83011261176c578081fd5b8135602061178161177c8361208c565b612068565b828152818101908583018385028701840188101561179d578586fd5b855b858110156117c2576117b082611745565b8452928401929084019060010161179f565b5090979650505050505050565b80516001600160e01b03198116811461132957600080fd5b6000602082840312156117f8578081fd5b61180182611745565b9392505050565b6000806040838503121561181a578081fd5b61182383611745565b9150602083013567ffffffffffffffff81111561183e578182fd5b61184a8582860161175c565b9150509250929050565b600080600060608486031215611868578081fd5b833567ffffffffffffffff8082111561187f578283fd5b61188b8783880161175c565b94506020915081860135818111156118a1578384fd5b6118ad8882890161175c565b945050604080870135828111156118c2578485fd5b87019150601f820188136118d4578384fd5b81356118e261177c8261208c565b81815284810190848601875b8481101561194e57813587018d603f82011261190857898afd5b8881013561191861177c826120aa565b8181528f8983850101111561192b578b8cfd5b818984018c8301379081018a018b905285525092870192908701906001016118ee565b50508096505050505050509250925092565b60006020808385031215611972578182fd5b825167ffffffffffffffff811115611988578283fd5b8301601f81018513611998578283fd5b80516119a661177c8261208c565b81815283810190838501858402850186018910156119c2578687fd5b8694505b838510156119eb576119d7816117cf565b8352600194909401939185019185016119c6565b50979650505050505050565b600060208284031215611a08578081fd5b611801826117cf565b600060208284031215611a22578081fd5b815167ffffffffffffffff811115611a38578182fd5b8201601f81018413611a48578182fd5b8051611a5661177c826120aa565b818152856020838501011115611a6a578384fd5b611a7b8260208301602086016120cc565b95945050505050565b6001600160a01b03169052565b6000815180845260208085019450808401835b83811015611aca5781516001600160e01b03191687529582019590820190600101611aa4565b509495945050505050565b60008151808452611aed8160208601602086016120cc565b601f01601f19169290920160200192915050565b60008251611b138184602087016120cc565b9190910192915050565b6000602082526118016020830184611a91565b60006060808301818452808751808352608086019150602092506080838202870101838a01865b83811015611bb457888303607f19018552815180516001600160a01b031684528681015160038110611b8557fe5b84880152604090810151908401889052611ba188850182611a91565b9587019593505090850190600101611b57565b5050611bc28488018a611a84565b8681036040880152611bd48189611ad5565b9a9950505050505050505050565b6001600160e01b031991909116815260200190565b6000602082526118016020830184611ad5565b6020808252603c908201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860408201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606082015260800190565b60208082526026908201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656040820152651d995c9d195960d21b606082015260800190565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b60208082526037908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360408201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606082015260800190565b60208082526018908201527f696e76616c696420706f6c696379207369676e61747572650000000000000000604082015260600190565b60208082526027908201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756040820152663a20b1ba34b7b760c91b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b60208082526027908201527f4d616e6167657246616365742e616464506f6c69636965733a20696e76616c6960408201526619081a5b9c1d5d60ca1b606082015260800190565b6020808252603d908201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460408201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606082015260800190565b6020808252602e908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560408201526d3a30b1363290333ab731ba34b7b760911b606082015260800190565b60208082526035908201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6040820152746e207468617420616c72656164792065786973747360581b606082015260800190565b60208082526038908201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60408201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606082015260800190565b60208082526036908201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604082015275657373206d757374206265206164647265737328302960501b606082015260800190565b6020808252602f908201527f4c6962446f6d696e696f6e2e616464506f6c6963793a206d697373656420726560408201526e38bab4b932b21039b2b632b1ba37b960891b606082015260800190565b60405181810167ffffffffffffffff8111828210171561208457fe5b604052919050565b600067ffffffffffffffff8211156120a057fe5b5060209081020190565b600067ffffffffffffffff8211156120be57fe5b50601f01601f191660200190565b60005b838110156120e75781810151838201526020016120cf565b838111156104bd575050600091015256fe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a26469706673582212203d133c3695a0903dd50e7947b077fe9958855c493eb0a1ff094f10def1c32fd364736f6c63430007060033";

export class InitiateFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InitiateFacet> {
    return super.deploy(overrides || {}) as Promise<InitiateFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InitiateFacet {
    return super.attach(address) as InitiateFacet;
  }
  connect(signer: Signer): InitiateFacet__factory {
    return super.connect(signer) as InitiateFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitiateFacetInterface {
    return new utils.Interface(_abi) as InitiateFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitiateFacet {
    return new Contract(address, _abi, signerOrProvider) as InitiateFacet;
  }
}

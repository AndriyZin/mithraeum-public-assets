/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleDistributor,
  MerkleDistributorInterface,
} from "../../contracts/MerkleDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
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
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "isClaimed",
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
    name: "merkleRoot",
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
    name: "token",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161079d38038061079d83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a0516106ed6100b060003960008181606b015261021001526000818160c8015261030201526106ed6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632e7ba6ef146100515780632eb4a7ab146100665780639e34070f146100a0578063fc0c546a146100c3575b600080fd5b61006461005f366004610548565b61010f565b005b61008d7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100b36100ae3660046105fa565b61043f565b6040519015158152602001610097565b6100ea7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101188561043f565b156101905760405162461bcd60e51b815260206004820152602860248201527f4d65726b6c654469737472696275746f723a2044726f7020616c72656164792060448201527f636c61696d65642e00000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60408051602081018790526bffffffffffffffffffffffff19606087901b16918101919091526054810184905260009060740160405160208183030381529060405280519060200120905061023b8383808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152507f000000000000000000000000000000000000000000000000000000000000000092508591506104809050565b6102ad5760405162461bcd60e51b815260206004820152602160248201527f4d65726b6c654469737472696275746f723a20496e76616c69642070726f6f6660448201527f2e000000000000000000000000000000000000000000000000000000000000006064820152608401610187565b6102b686610496565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f9190610613565b6103e15760405162461bcd60e51b815260206004820152602360248201527f4d65726b6c654469737472696275746f723a205472616e73666572206661696c60448201527f65642e00000000000000000000000000000000000000000000000000000000006064820152608401610187565b6040805187815273ffffffffffffffffffffffffffffffffffffffff871660208201529081018590527f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed0269060600160405180910390a1505050505050565b60008061044e61010084610652565b9050600061045e61010085610666565b60009283526020839052604090922054600190921b9182169091149392505050565b60008261048d85846104d4565b14949350505050565b60006104a461010083610652565b905060006104b461010084610666565b6000928352602083905260409092208054600190931b9092179091555050565b600081815b84518110156105405760008582815181106104f6576104f661067a565b6020026020010151905080831161051c576000838152602082905260409020925061052d565b600081815260208490526040902092505b508061053881610690565b9150506104d9565b509392505050565b60008060008060006080868803121561056057600080fd5b85359450602086013573ffffffffffffffffffffffffffffffffffffffff8116811461058b57600080fd5b935060408601359250606086013567ffffffffffffffff808211156105af57600080fd5b818801915088601f8301126105c357600080fd5b8135818111156105d257600080fd5b8960208260051b85010111156105e757600080fd5b9699959850939650602001949392505050565b60006020828403121561060c57600080fd5b5035919050565b60006020828403121561062557600080fd5b8151801515811461063557600080fd5b9392505050565b634e487b7160e01b600052601260045260246000fd5b6000826106615761066161063c565b500490565b6000826106755761067561063c565b500690565b634e487b7160e01b600052603260045260246000fd5b6000600182016106b057634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220b12cd95d4a29f8b36c7d88f5f078ff213b1f66f86754b6ba03335ce046ed8e6864736f6c634300080d0033";

type MerkleDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleDistributor__factory extends ContractFactory {
  constructor(...args: MerkleDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleDistributor> {
    return super.deploy(
      token_,
      merkleRoot_,
      overrides || {}
    ) as Promise<MerkleDistributor>;
  }
  override getDeployTransaction(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, merkleRoot_, overrides || {});
  }
  override attach(address: string): MerkleDistributor {
    return super.attach(address) as MerkleDistributor;
  }
  override connect(signer: Signer): MerkleDistributor__factory {
    return super.connect(signer) as MerkleDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleDistributorInterface {
    return new utils.Interface(_abi) as MerkleDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleDistributor {
    return new Contract(address, _abi, signerOrProvider) as MerkleDistributor;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UserProxyFactory,
  UserProxyFactoryInterface,
} from "../UserProxyFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    name: "Created",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userProxies",
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
    inputs: [],
    name: "build",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
    name: "build",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107c6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638e1a55fc14610046578063b4e76d191461006a578063f3701da214610090575b600080fd5b61004e6100b6565b604080516001600160a01b039092168252519081900360200190f35b61004e6004803603602081101561008057600080fd5b50356001600160a01b03166100c6565b61004e600480360360208110156100a657600080fd5b50356001600160a01b03166100e1565b60006100c1336100e1565b905090565b6000602081905290815260409020546001600160a01b031681565b6001600160a01b0381811660009081526020819052604081205490911615610150576040805162461bcd60e51b815260206004820152601a60248201527f757365722070726f787920616c72656164792063726561746564000000000000604482015290519081900360640190fd5b60008260405161015f906101f9565b6001600160a01b03909116815260405190819003602001906000f08015801561018c573d6000803e3d6000fd5b506001600160a01b038481166000818152602081815260409182902080546001600160a01b031916948616948517905581519384529051939450909233927f454b0172f64812df0cd504c2bd7df7aab8ff328a54d946b4bd0fa7c527adf9cc92908290030190a392915050565b61058a806102078339019056fe608060405234801561001057600080fd5b5060405161058a38038061058a83398101604081905261002f9161007b565b600180546001600160a01b0319166001600160a01b03831617905560405133907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a2506100a9565b60006020828403121561008c578081fd5b81516001600160a01b03811681146100a2578182fd5b9392505050565b6104d2806100b86000396000f3fe60806040526004361061004e5760003560e01c806313af40351461005a57806377c152611461007c5780638da5cb5b1461009c578063d9972b96146100c7578063f9aea6e2146100f457610055565b3661005557005b600080fd5b34801561006657600080fd5b5061007a610075366004610329565b610107565b005b34801561008857600080fd5b5061007a610097366004610375565b610176565b3480156100a857600080fd5b506100b16101d4565b6040516100be9190610451565b60405180910390f35b3480156100d357600080fd5b506100e76100e2366004610343565b6101e3565b6040516100be9190610465565b61007a6101023660046103bf565b610246565b61011d336000356001600160e01b0319166101e3565b61012657600080fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b61018c336000356001600160e01b0319166101e3565b61019557600080fd5b6001600160a01b039092166000908152602081815260408083206001600160e01b0319909416835292905220805491151560ff19909216919091179055565b6001546001600160a01b031681565b60006001600160a01b03831630148061020957506001546001600160a01b038481169116145b8061023f57506001600160a01b0383166000908152602081815260408083206001600160e01b03198616845290915290205460ff165b9392505050565b61025c336000356001600160e01b0319166101e3565b61026557600080fd5b6000846001600160a01b0316848484604051610282929190610441565b60006040518083038185875af1925050503d80600081146102bf576040519150601f19603f3d011682016040523d82523d6000602084013e6102c4565b606091505b50509050806102ee5760405162461bcd60e51b81526004016102e590610470565b60405180910390fd5b5050505050565b80356001600160a01b038116811461030c57600080fd5b919050565b80356001600160e01b03198116811461030c57600080fd5b60006020828403121561033a578081fd5b61023f826102f5565b60008060408385031215610355578081fd5b61035e836102f5565b915061036c60208401610311565b90509250929050565b600080600060608486031215610389578081fd5b610392846102f5565b92506103a060208501610311565b9150604084013580151581146103b4578182fd5b809150509250925092565b600080600080606085870312156103d4578081fd5b6103dd856102f5565b935060208501359250604085013567ffffffffffffffff80821115610400578283fd5b818701915087601f830112610413578283fd5b813581811115610421578384fd5b886020828501011115610432578384fd5b95989497505060200194505050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6020808252601290820152711d1c985b9cd858dd1a5bdb8819985a5b195960721b60408201526060019056fea2646970667358221220975998cc0da75cb857218f45af1c2f261209f65882d0340514662a77531af17364736f6c63430007060033a26469706673582212209aa869a1f99ed48e5e2c24a88823d38019ad3692af5d3c8d4e63a3563daf1f0664736f6c63430007060033";

export class UserProxyFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserProxyFactory> {
    return super.deploy(overrides || {}) as Promise<UserProxyFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UserProxyFactory {
    return super.attach(address) as UserProxyFactory;
  }
  connect(signer: Signer): UserProxyFactory__factory {
    return super.connect(signer) as UserProxyFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserProxyFactoryInterface {
    return new utils.Interface(_abi) as UserProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as UserProxyFactory;
  }
}

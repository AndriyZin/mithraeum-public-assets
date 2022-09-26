/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WorldAsset,
  WorldAssetInterface,
} from "../../../contracts/assets/WorldAsset";

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
        name: "assetType",
        type: "string",
      },
      {
        internalType: "string",
        name: "assetName",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
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
  "0x608060405234801561001057600080fd5b5060405161052638038061052683398101604081905261002f91610233565b7f6c85b93e587873fbe6712f3b438d42c2945689b262f7bd34b8ea4e3f832a89e680546001600160a01b0319166001600160a01b03851617815560405161007c90849084906020016102b5565b60408051601f198184030181529190528051602091820120600183015583516100ad916002840191908601906100cd565b5081516100c390600383019060208501906100cd565b505050505061031e565b8280546100d9906102e4565b90600052602060002090601f0160209004810192826100fb5760008555610141565b82601f1061011457805160ff1916838001178555610141565b82800160010185558215610141579182015b82811115610141578251825591602001919060010190610126565b5061014d929150610151565b5090565b5b8082111561014d5760008155600101610152565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561019757818101518382015260200161017f565b838111156101a6576000848401525b50505050565b600082601f8301126101bd57600080fd5b81516001600160401b03808211156101d7576101d7610166565b604051601f8301601f19908116603f011681019082821181831017156101ff576101ff610166565b8160405283815286602085880101111561021857600080fd5b61022984602083016020890161017c565b9695505050505050565b60008060006060848603121561024857600080fd5b83516001600160a01b038116811461025f57600080fd5b60208501519093506001600160401b038082111561027c57600080fd5b610288878388016101ac565b9350604086015191508082111561029e57600080fd5b506102ab868287016101ac565b9150509250925092565b600083516102c781846020880161017c565b8351908301906102db81836020880161017c565b01949350505050565b600181811c908216806102f857607f821691505b60208210810361031857634e487b7160e01b600052602260045260246000fd5b50919050565b6101f98061032d6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635c60da1b1461005c575b6000610035610080565b905060405136600082376000803683855af43d806000843e818015610058578184f35b8184fd5b610064610080565b6040516001600160a01b03909116815260200160405180910390f35b7f6c85b93e587873fbe6712f3b438d42c2945689b262f7bd34b8ea4e3f832a89e6805460408051637b10399960e01b81529051600093926001600160a01b031691637b1039999160048083019260209291908290030181865afa1580156100eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010f919061019f565b6001600160a01b031663699324ae82600101546040518263ffffffff1660e01b815260040161014091815260200190565b602060405180830381865afa15801561015d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610181919061019f565b91505090565b6001600160a01b038116811461019c57600080fd5b50565b6000602082840312156101b157600080fd5b81516101bc81610187565b939250505056fea26469706673582212203c9121155a4be60d84d5029fbb41e00bffc0af0f86027bfaf8e3cc8743ec13da64736f6c634300080d0033";

type WorldAssetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WorldAssetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WorldAsset__factory extends ContractFactory {
  constructor(...args: WorldAssetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    worldAddress: string,
    assetType: string,
    assetName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WorldAsset> {
    return super.deploy(
      worldAddress,
      assetType,
      assetName,
      overrides || {}
    ) as Promise<WorldAsset>;
  }
  override getDeployTransaction(
    worldAddress: string,
    assetType: string,
    assetName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      worldAddress,
      assetType,
      assetName,
      overrides || {}
    );
  }
  override attach(address: string): WorldAsset {
    return super.attach(address) as WorldAsset;
  }
  override connect(signer: Signer): WorldAsset__factory {
    return super.connect(signer) as WorldAsset__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WorldAssetInterface {
    return new utils.Interface(_abi) as WorldAssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WorldAsset {
    return new Contract(address, _abi, signerOrProvider) as WorldAsset;
  }
}

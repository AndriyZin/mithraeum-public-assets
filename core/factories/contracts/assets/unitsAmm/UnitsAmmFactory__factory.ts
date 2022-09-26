/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnitsAmmFactory,
  UnitsAmmFactoryInterface,
} from "../../../../contracts/assets/unitsAmm/UnitsAmmFactory";

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
        name: "assetName",
        type: "string",
      },
      {
        internalType: "address",
        name: "zoneAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "unitsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "toolsAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "multiplier",
        type: "uint256",
      },
    ],
    name: "create",
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
    name: "createAndSet",
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
  "0x608060405234801561001057600080fd5b50610a73806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636edc660c1461003b578063df31e2351461006a575b600080fd5b61004e610049366004610377565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100783660046103ff565b610136565b6000806100ac8860405180604001604052806009815260200168756e6974735f616d6d60b81b81525089610136565b604051635e9ab14960e01b81526001600160a01b0388811660048301528a81166024830152878116604483015286811660648301526084820186905291925090821690635e9ab1499060a401600060405180830381600087803b15801561011257600080fd5b505af1158015610126573d6000803e3d6000fd5b50929a9950505050505050505050565b600083336001600160a01b03821614806101b957506040516371776fe760e11b81523360048201526000906001600160a01b0383169063e2eedfce90602401602060405180830381865afa158015610192573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b69190610473565b14155b6101fa5760405162461bcd60e51b815260206004820152600e60248201526d1bdb9b1e55dbdc9b19105cdcd95d60921b604482015260640160405180910390fd5b600085858560405161020b906102ab565b610217939291906104d9565b604051809103906000f080158015610233573d6000803e3d6000fd5b50855160208701206040516322f711a760e01b81526001600160a01b03808416600483015260248201929092529192508716906322f711a790604401600060405180830381600087803b15801561028957600080fd5b505af115801561029d573d6000803e3d6000fd5b509298975050505050505050565b6105268061051883390190565b80356001600160a01b03811681146102cf57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126102fb57600080fd5b813567ffffffffffffffff80821115610316576103166102d4565b604051601f8301601f19908116603f0116810190828211818310171561033e5761033e6102d4565b8160405283815286602085880101111561035757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c0878903121561039057600080fd5b610399876102b8565b9550602087013567ffffffffffffffff8111156103b557600080fd5b6103c189828a016102ea565b9550506103d0604088016102b8565b93506103de606088016102b8565b92506103ec608088016102b8565b915060a087013590509295509295509295565b60008060006060848603121561041457600080fd5b61041d846102b8565b9250602084013567ffffffffffffffff8082111561043a57600080fd5b610446878388016102ea565b9350604086013591508082111561045c57600080fd5b50610469868287016102ea565b9150509250925092565b60006020828403121561048557600080fd5b5051919050565b6000815180845260005b818110156104b257602081850181015186830182015201610496565b818111156104c4576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03841681526060602082015260006104fb606083018561048c565b828103604084015261050d818561048c565b969550505050505056fe608060405234801561001057600080fd5b5060405161052638038061052683398101604081905261002f91610233565b7f6c85b93e587873fbe6712f3b438d42c2945689b262f7bd34b8ea4e3f832a89e680546001600160a01b0319166001600160a01b03851617815560405161007c90849084906020016102b5565b60408051601f198184030181529190528051602091820120600183015583516100ad916002840191908601906100cd565b5081516100c390600383019060208501906100cd565b505050505061031e565b8280546100d9906102e4565b90600052602060002090601f0160209004810192826100fb5760008555610141565b82601f1061011457805160ff1916838001178555610141565b82800160010185558215610141579182015b82811115610141578251825591602001919060010190610126565b5061014d929150610151565b5090565b5b8082111561014d5760008155600101610152565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561019757818101518382015260200161017f565b838111156101a6576000848401525b50505050565b600082601f8301126101bd57600080fd5b81516001600160401b03808211156101d7576101d7610166565b604051601f8301601f19908116603f011681019082821181831017156101ff576101ff610166565b8160405283815286602085880101111561021857600080fd5b61022984602083016020890161017c565b9695505050505050565b60008060006060848603121561024857600080fd5b83516001600160a01b038116811461025f57600080fd5b60208501519093506001600160401b038082111561027c57600080fd5b610288878388016101ac565b9350604086015191508082111561029e57600080fd5b506102ab868287016101ac565b9150509250925092565b600083516102c781846020880161017c565b8351908301906102db81836020880161017c565b01949350505050565b600181811c908216806102f857607f821691505b60208210810361031857634e487b7160e01b600052602260045260246000fd5b50919050565b6101f98061032d6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635c60da1b1461005c575b6000610035610080565b905060405136600082376000803683855af43d806000843e818015610058578184f35b8184fd5b610064610080565b6040516001600160a01b03909116815260200160405180910390f35b7f6c85b93e587873fbe6712f3b438d42c2945689b262f7bd34b8ea4e3f832a89e6805460408051637b10399960e01b81529051600093926001600160a01b031691637b1039999160048083019260209291908290030181865afa1580156100eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010f919061019f565b6001600160a01b031663699324ae82600101546040518263ffffffff1660e01b815260040161014091815260200190565b602060405180830381865afa15801561015d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610181919061019f565b91505090565b6001600160a01b038116811461019c57600080fd5b50565b6000602082840312156101b157600080fd5b81516101bc81610187565b939250505056fea26469706673582212203c9121155a4be60d84d5029fbb41e00bffc0af0f86027bfaf8e3cc8743ec13da64736f6c634300080d0033a264697066735822122073e0372478870761965480c7a8a0ad1485b366abc97f3c0fb8b76e52c437602264736f6c634300080d0033";

type UnitsAmmFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnitsAmmFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnitsAmmFactory__factory extends ContractFactory {
  constructor(...args: UnitsAmmFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnitsAmmFactory> {
    return super.deploy(overrides || {}) as Promise<UnitsAmmFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UnitsAmmFactory {
    return super.attach(address) as UnitsAmmFactory;
  }
  override connect(signer: Signer): UnitsAmmFactory__factory {
    return super.connect(signer) as UnitsAmmFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitsAmmFactoryInterface {
    return new utils.Interface(_abi) as UnitsAmmFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnitsAmmFactory {
    return new Contract(address, _abi, signerOrProvider) as UnitsAmmFactory;
  }
}

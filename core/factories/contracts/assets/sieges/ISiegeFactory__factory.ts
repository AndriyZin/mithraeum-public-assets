/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISiegeFactory,
  ISiegeFactoryInterface,
} from "../../../../contracts/assets/sieges/ISiegeFactory";

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
        name: "settlementAddress",
        type: "address",
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
];

export class ISiegeFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ISiegeFactoryInterface {
    return new utils.Interface(_abi) as ISiegeFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISiegeFactory {
    return new Contract(address, _abi, signerOrProvider) as ISiegeFactory;
  }
}

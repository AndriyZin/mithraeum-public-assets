/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IContinentFactory,
  IContinentFactoryInterface,
} from "../../../../contracts/assets/continents/IContinentFactory";

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

export class IContinentFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IContinentFactoryInterface {
    return new utils.Interface(_abi) as IContinentFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IContinentFactory {
    return new Contract(address, _abi, signerOrProvider) as IContinentFactory;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IResourceFactory,
  IResourceFactoryInterface,
} from "../../../../contracts/assets/resources/IResourceFactory";

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
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "worldResourceName",
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

export class IResourceFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IResourceFactoryInterface {
    return new utils.Interface(_abi) as IResourceFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IResourceFactory {
    return new Contract(address, _abi, signerOrProvider) as IResourceFactory;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUnitFactory,
  IUnitFactoryInterface,
} from "../../../../contracts/assets/units/IUnitFactory";

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
        name: "worldUnitName",
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

export class IUnitFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IUnitFactoryInterface {
    return new utils.Interface(_abi) as IUnitFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUnitFactory {
    return new Contract(address, _abi, signerOrProvider) as IUnitFactory;
  }
}

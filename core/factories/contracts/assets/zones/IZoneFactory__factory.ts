/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IZoneFactory,
  IZoneFactoryInterface,
} from "../../../../contracts/assets/zones/IZoneFactory";

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
        name: "continentAddress",
        type: "address",
      },
      {
        internalType: "uint16[]",
        name: "coordinatesX",
        type: "uint16[]",
      },
      {
        internalType: "uint16[]",
        name: "coordinatesY",
        type: "uint16[]",
      },
      {
        internalType: "uint16[]",
        name: "tileTypes",
        type: "uint16[]",
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

export class IZoneFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IZoneFactoryInterface {
    return new utils.Interface(_abi) as IZoneFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IZoneFactory {
    return new Contract(address, _abi, signerOrProvider) as IZoneFactory;
  }
}

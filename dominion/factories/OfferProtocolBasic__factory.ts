/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  OfferProtocolBasic,
  OfferProtocolBasicInterface,
} from "../OfferProtocolBasic";

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
];

export class OfferProtocolBasic__factory {
  static readonly abi = _abi;
  static createInterface(): OfferProtocolBasicInterface {
    return new utils.Interface(_abi) as OfferProtocolBasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OfferProtocolBasic {
    return new Contract(address, _abi, signerOrProvider) as OfferProtocolBasic;
  }
}
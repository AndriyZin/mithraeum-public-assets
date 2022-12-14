/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  TestFacetBasic,
  TestFacetBasicInterface,
} from "../TestFacetBasic";

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
    name: "content",
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
    name: "test1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test2",
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
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "setContent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
];

export class TestFacetBasic__factory {
  static readonly abi = _abi;
  static createInterface(): TestFacetBasicInterface {
    return new utils.Interface(_abi) as TestFacetBasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestFacetBasic {
    return new Contract(address, _abi, signerOrProvider) as TestFacetBasic;
  }
}

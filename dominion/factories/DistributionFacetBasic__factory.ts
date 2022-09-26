/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  DistributionFacetBasic,
  DistributionFacetBasicInterface,
} from "../DistributionFacetBasic";

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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "distributionFacet_batchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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

export class DistributionFacetBasic__factory {
  static readonly abi = _abi;
  static createInterface(): DistributionFacetBasicInterface {
    return new utils.Interface(_abi) as DistributionFacetBasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DistributionFacetBasic {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DistributionFacetBasic;
  }
}
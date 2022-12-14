/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBuilding, IBuildingInterface } from "../IBuilding";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
    ],
    name: "getConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "resourceId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "perBlock",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isProducing",
            type: "bool",
          },
        ],
        internalType: "struct IBuilding.InitialResourceBlock[]",
        name: "initialResourceBlocks",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buildingTokenTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "resourceId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stealReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "resourceId",
        type: "uint256",
      },
    ],
    name: "getMaxReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "resourceId",
        type: "uint256",
      },
    ],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IBuilding__factory {
  static readonly abi = _abi;
  static createInterface(): IBuildingInterface {
    return new utils.Interface(_abi) as IBuildingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBuilding {
    return new Contract(address, _abi, signerOrProvider) as IBuilding;
  }
}

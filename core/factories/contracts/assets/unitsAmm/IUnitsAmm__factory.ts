/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUnitsAmm,
  IUnitsAmmInterface,
} from "../../../../contracts/assets/unitsAmm/IUnitsAmm";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "armyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unitsBought",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toolsSpent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentUnits",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentTools",
        type: "uint256",
      },
    ],
    name: "UnitsBought",
    type: "event",
  },
  {
    inputs: [],
    name: "applyState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentZone",
    outputs: [
      {
        internalType: "contract IZone",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_zoneAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_worldAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_unitsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toolsAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastApplyStateTime",
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
    inputs: [],
    name: "multiplier",
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
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxToolsToSell",
        type: "uint256",
      },
    ],
    name: "swapToolsForExactUnits",
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
        name: "toolsPayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "settlementAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "unitsToBuy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxToolsToSell",
        type: "uint256",
      },
    ],
    name: "swapToolsForExactUnitsByZone",
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
    inputs: [],
    name: "tools",
    outputs: [
      {
        internalType: "contract IResource",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "units",
    outputs: [
      {
        internalType: "contract IUnit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unitsBalance",
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

export class IUnitsAmm__factory {
  static readonly abi = _abi;
  static createInterface(): IUnitsAmmInterface {
    return new utils.Interface(_abi) as IUnitsAmmInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUnitsAmm {
    return new Contract(address, _abi, signerOrProvider) as IUnitsAmm;
  }
}

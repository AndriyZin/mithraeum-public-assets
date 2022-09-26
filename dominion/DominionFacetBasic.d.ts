/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface DominionFacetBasicInterface extends ethers.utils.Interface {
  functions: {
    "getContent()": FunctionFragment;
    "getPolicies(uint256,uint256)": FunctionFragment;
    "getPolicyByAddress(address)": FunctionFragment;
    "getPoliciesLength()": FunctionFragment;
    "getFacetByMethod(bytes4)": FunctionFragment;
    "canAddPolicy(address)": FunctionFragment;
    "callback()": FunctionFragment;
    "isAllowedExternalMethod(bytes4)": FunctionFragment;
    "getWorldAddress()": FunctionFragment;
    "getFunctionSelectors()": FunctionFragment;
    "getAllowedExternalFunctions()": FunctionFragment;
    "getCallbackSelector()": FunctionFragment;
    "getRequiredSelectors()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getContent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPolicies",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPolicyByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoliciesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFacetByMethod",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canAddPolicy",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "callback", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isAllowedExternalMethod",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWorldAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFunctionSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowedExternalFunctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCallbackSelector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequiredSelectors",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getContent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPolicies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPolicyByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoliciesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFacetByMethod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canAddPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callback", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedExternalMethod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWorldAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowedExternalFunctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCallbackSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredSelectors",
    data: BytesLike
  ): Result;

  events: {
    "NewContent(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewContent"): EventFragment;
}

export type NewContentEvent = TypedEvent<[string] & { content: string }>;

export class DominionFacetBasic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DominionFacetBasicInterface;

  functions: {
    getContent(overrides?: CallOverrides): Promise<[string]>;

    getPolicies(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, boolean, BigNumber, BigNumber, string] & {
          addr: string;
          isActive: boolean;
          addedAt: BigNumber;
          removedAt: BigNumber;
          initData: string;
        })[]
      ]
    >;

    getPolicyByAddress(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, boolean, BigNumber, BigNumber, string] & {
          addr: string;
          isActive: boolean;
          addedAt: BigNumber;
          removedAt: BigNumber;
          initData: string;
        }
      ] & {
        res: [string, boolean, BigNumber, BigNumber, string] & {
          addr: string;
          isActive: boolean;
          addedAt: BigNumber;
          removedAt: BigNumber;
          initData: string;
        };
      }
    >;

    getPoliciesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFacetByMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    canAddPolicy(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<[number] & { reason: number }>;

    callback(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAllowedExternalMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getWorldAddress(overrides?: CallOverrides): Promise<[string]>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getCallbackSelector(overrides?: CallOverrides): Promise<[string]>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;
  };

  getContent(overrides?: CallOverrides): Promise<string>;

  getPolicies(
    start: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([string, boolean, BigNumber, BigNumber, string] & {
      addr: string;
      isActive: boolean;
      addedAt: BigNumber;
      removedAt: BigNumber;
      initData: string;
    })[]
  >;

  getPolicyByAddress(
    _policyAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [string, boolean, BigNumber, BigNumber, string] & {
      addr: string;
      isActive: boolean;
      addedAt: BigNumber;
      removedAt: BigNumber;
      initData: string;
    }
  >;

  getPoliciesLength(overrides?: CallOverrides): Promise<BigNumber>;

  getFacetByMethod(
    _method: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  canAddPolicy(
    _policyAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  callback(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAllowedExternalMethod(
    _method: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getWorldAddress(overrides?: CallOverrides): Promise<string>;

  getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

  getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

  getCallbackSelector(overrides?: CallOverrides): Promise<string>;

  getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getContent(overrides?: CallOverrides): Promise<string>;

    getPolicies(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([string, boolean, BigNumber, BigNumber, string] & {
        addr: string;
        isActive: boolean;
        addedAt: BigNumber;
        removedAt: BigNumber;
        initData: string;
      })[]
    >;

    getPolicyByAddress(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [string, boolean, BigNumber, BigNumber, string] & {
        addr: string;
        isActive: boolean;
        addedAt: BigNumber;
        removedAt: BigNumber;
        initData: string;
      }
    >;

    getPoliciesLength(overrides?: CallOverrides): Promise<BigNumber>;

    getFacetByMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    canAddPolicy(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    callback(overrides?: CallOverrides): Promise<void>;

    isAllowedExternalMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getWorldAddress(overrides?: CallOverrides): Promise<string>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

    getCallbackSelector(overrides?: CallOverrides): Promise<string>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "NewContent(string)"(
      content?: null
    ): TypedEventFilter<[string], { content: string }>;

    NewContent(content?: null): TypedEventFilter<[string], { content: string }>;
  };

  estimateGas: {
    getContent(overrides?: CallOverrides): Promise<BigNumber>;

    getPolicies(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPolicyByAddress(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoliciesLength(overrides?: CallOverrides): Promise<BigNumber>;

    getFacetByMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canAddPolicy(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callback(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAllowedExternalMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWorldAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<BigNumber>;

    getCallbackSelector(overrides?: CallOverrides): Promise<BigNumber>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getContent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPolicies(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPolicyByAddress(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoliciesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFacetByMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canAddPolicy(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callback(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAllowedExternalMethod(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWorldAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCallbackSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

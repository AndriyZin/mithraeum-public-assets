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

interface InitiateFacetInterface extends ethers.utils.Interface {
  functions: {
    "getAllowedExternalFunctions()": FunctionFragment;
    "getCallbackSelector()": FunctionFragment;
    "getContent()": FunctionFragment;
    "getFunctionSelectors()": FunctionFragment;
    "getRequiredSelectors()": FunctionFragment;
    "initiateFacet_init(address,address[])": FunctionFragment;
    "initiateFacet_addPolicies(address[],address[],bytes[])": FunctionFragment;
    "initiateFacet_selfdestruct(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAllowedExternalFunctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCallbackSelector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFunctionSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequiredSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initiateFacet_init",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateFacet_addPolicies",
    values: [string[], string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateFacet_selfdestruct",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllowedExternalFunctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCallbackSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getContent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateFacet_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateFacet_addPolicies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateFacet_selfdestruct",
    data: BytesLike
  ): Result;

  events: {
    "NewContent(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewContent"): EventFragment;
}

export type NewContentEvent = TypedEvent<[string] & { content: string }>;

export class InitiateFacet extends BaseContract {
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

  interface: InitiateFacetInterface;

  functions: {
    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getCallbackSelector(overrides?: CallOverrides): Promise<[string]>;

    getContent(overrides?: CallOverrides): Promise<[string]>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    initiateFacet_init(
      _worldAddress: string,
      _owners: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateFacet_addPolicies(
      _policyAddresses: string[],
      _inits: string[],
      _calldata: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateFacet_selfdestruct(
      _policyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

  getCallbackSelector(overrides?: CallOverrides): Promise<string>;

  getContent(overrides?: CallOverrides): Promise<string>;

  getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

  getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

  initiateFacet_init(
    _worldAddress: string,
    _owners: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateFacet_addPolicies(
    _policyAddresses: string[],
    _inits: string[],
    _calldata: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateFacet_selfdestruct(
    _policyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

    getCallbackSelector(overrides?: CallOverrides): Promise<string>;

    getContent(overrides?: CallOverrides): Promise<string>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

    initiateFacet_init(
      _worldAddress: string,
      _owners: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    initiateFacet_addPolicies(
      _policyAddresses: string[],
      _inits: string[],
      _calldata: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    initiateFacet_selfdestruct(
      _policyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewContent(string)"(
      content?: null
    ): TypedEventFilter<[string], { content: string }>;

    NewContent(content?: null): TypedEventFilter<[string], { content: string }>;
  };

  estimateGas: {
    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<BigNumber>;

    getCallbackSelector(overrides?: CallOverrides): Promise<BigNumber>;

    getContent(overrides?: CallOverrides): Promise<BigNumber>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    initiateFacet_init(
      _worldAddress: string,
      _owners: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateFacet_addPolicies(
      _policyAddresses: string[],
      _inits: string[],
      _calldata: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateFacet_selfdestruct(
      _policyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCallbackSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initiateFacet_init(
      _worldAddress: string,
      _owners: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateFacet_addPolicies(
      _policyAddresses: string[],
      _inits: string[],
      _calldata: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateFacet_selfdestruct(
      _policyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

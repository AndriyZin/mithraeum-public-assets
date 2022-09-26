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

interface NonAggressionFacetBasicInterface extends ethers.utils.Interface {
  functions: {
    "content()": FunctionFragment;
    "nonAggressionFacet_init(uint256)": FunctionFragment;
    "nonAggressionFacet_punish(address,address,address,address,string,uint256)": FunctionFragment;
    "nonAggressionFacet_canPunish(address,address,address)": FunctionFragment;
    "getContent()": FunctionFragment;
    "setContent(string)": FunctionFragment;
    "getFunctionSelectors()": FunctionFragment;
    "getAllowedExternalFunctions()": FunctionFragment;
    "getRequiredSelectors()": FunctionFragment;
    "getCallbackSelector()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "content", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nonAggressionFacet_init",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nonAggressionFacet_punish",
    values: [string, string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nonAggressionFacet_canPunish",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getContent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setContent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getFunctionSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowedExternalFunctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequiredSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCallbackSelector",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "content", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nonAggressionFacet_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonAggressionFacet_punish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonAggressionFacet_canPunish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getContent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setContent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowedExternalFunctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCallbackSelector",
    data: BytesLike
  ): Result;

  events: {
    "NewContent(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewContent"): EventFragment;
}

export type NewContentEvent = TypedEvent<[string] & { content: string }>;

export class NonAggressionFacetBasic extends BaseContract {
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

  interface: NonAggressionFacetBasicInterface;

  functions: {
    content(overrides?: CallOverrides): Promise<[string]>;

    nonAggressionFacet_init(
      _punishPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonAggressionFacet_punish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      _receiver: string,
      _building: string,
      _resourceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonAggressionFacet_canPunish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getContent(overrides?: CallOverrides): Promise<[string]>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getCallbackSelector(overrides?: CallOverrides): Promise<[string]>;
  };

  content(overrides?: CallOverrides): Promise<string>;

  nonAggressionFacet_init(
    _punishPercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonAggressionFacet_punish(
    _battleAddress: string,
    _agressorArmyAddress: string,
    _victimArmy2Address: string,
    _receiver: string,
    _building: string,
    _resourceIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonAggressionFacet_canPunish(
    _battleAddress: string,
    _agressorArmyAddress: string,
    _victimArmy2Address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getContent(overrides?: CallOverrides): Promise<string>;

  setContent(
    _content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

  getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

  getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

  getCallbackSelector(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    content(overrides?: CallOverrides): Promise<string>;

    nonAggressionFacet_init(
      _punishPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nonAggressionFacet_punish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      _receiver: string,
      _building: string,
      _resourceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nonAggressionFacet_canPunish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getContent(overrides?: CallOverrides): Promise<string>;

    setContent(_content: string, overrides?: CallOverrides): Promise<void>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

    getCallbackSelector(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewContent(string)"(
      content?: null
    ): TypedEventFilter<[string], { content: string }>;

    NewContent(content?: null): TypedEventFilter<[string], { content: string }>;
  };

  estimateGas: {
    content(overrides?: CallOverrides): Promise<BigNumber>;

    nonAggressionFacet_init(
      _punishPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonAggressionFacet_punish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      _receiver: string,
      _building: string,
      _resourceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonAggressionFacet_canPunish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContent(overrides?: CallOverrides): Promise<BigNumber>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<BigNumber>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getCallbackSelector(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    content(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonAggressionFacet_init(
      _punishPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonAggressionFacet_punish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      _receiver: string,
      _building: string,
      _resourceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonAggressionFacet_canPunish(
      _battleAddress: string,
      _agressorArmyAddress: string,
      _victimArmy2Address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCallbackSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
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

interface TaxesFacetBasicInterface extends ethers.utils.Interface {
  functions: {
    "content()": FunctionFragment;
    "taxesFacet_init(address,uint64,uint256)": FunctionFragment;
    "taxesFacet_claimTax(address,string)": FunctionFragment;
    "taxesFacet_canPunish(address,string)": FunctionFragment;
    "taxesFacet_punish(address,string)": FunctionFragment;
    "taxesFacet_data()": FunctionFragment;
    "taxesFacet_newLayout(string[],uint256[])": FunctionFragment;
    "taxesFacet_applyLayoutTo(uint256,address,uint256,bytes)": FunctionFragment;
    "taxesFacet_getTaxLayoutsLength()": FunctionFragment;
    "taxesFacet_getLayouts(uint256,uint256)": FunctionFragment;
    "taxesFacet_disableLayout(uint256)": FunctionFragment;
    "taxesFacet_removeUserTax(address)": FunctionFragment;
    "getFunctionSelectors()": FunctionFragment;
    "getAllowedExternalFunctions()": FunctionFragment;
    "getCallbackSelector()": FunctionFragment;
    "getContent()": FunctionFragment;
    "setContent(string)": FunctionFragment;
    "getRequiredSelectors()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "content", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_init",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_claimTax",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_canPunish",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_punish",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_data",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_newLayout",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_applyLayoutTo",
    values: [BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_getTaxLayoutsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_getLayouts",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_disableLayout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taxesFacet_removeUserTax",
    values: [string]
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
    functionFragment: "getContent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setContent", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRequiredSelectors",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "content", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_claimTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_canPunish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_punish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_data",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_newLayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_applyLayoutTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_getTaxLayoutsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_getLayouts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_disableLayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxesFacet_removeUserTax",
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
  decodeFunctionResult(functionFragment: "getContent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setContent", data: BytesLike): Result;
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

export class TaxesFacetBasic extends BaseContract {
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

  interface: TaxesFacetBasicInterface;

  functions: {
    content(overrides?: CallOverrides): Promise<[string]>;

    taxesFacet_init(
      _taxReceiver: string,
      _punishCountdown: BigNumberish,
      _punishPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxesFacet_claimTax(
      _settlementAddress: string,
      _building: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxesFacet_canPunish(
      _settlementAddress: string,
      _building: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    taxesFacet_punish(
      _settlementAddress: string,
      _building: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxesFacet_data(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        _punishPercent: BigNumber;
        _taxReceiver: string;
        _punishCountdown: BigNumber;
      }
    >;

    taxesFacet_newLayout(
      _buildings: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxesFacet_applyLayoutTo(
      _layoutIndex: BigNumberish,
      _settlementAddress: string,
      _index: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxesFacet_getTaxLayoutsLength(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    taxesFacet_getLayouts(
      _start: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string[], BigNumber[], boolean] & {
          buildings: string[];
          tokenAmounts: BigNumber[];
          isActive: boolean;
        })[]
      ] & {
        res: ([string[], BigNumber[], boolean] & {
          buildings: string[];
          tokenAmounts: BigNumber[];
          isActive: boolean;
        })[];
      }
    >;

    taxesFacet_disableLayout(
      _layoutIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxesFacet_removeUserTax(
      _settlementAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getCallbackSelector(overrides?: CallOverrides): Promise<[string]>;

    getContent(overrides?: CallOverrides): Promise<[string]>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;
  };

  content(overrides?: CallOverrides): Promise<string>;

  taxesFacet_init(
    _taxReceiver: string,
    _punishCountdown: BigNumberish,
    _punishPercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxesFacet_claimTax(
    _settlementAddress: string,
    _building: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxesFacet_canPunish(
    _settlementAddress: string,
    _building: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  taxesFacet_punish(
    _settlementAddress: string,
    _building: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxesFacet_data(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      _punishPercent: BigNumber;
      _taxReceiver: string;
      _punishCountdown: BigNumber;
    }
  >;

  taxesFacet_newLayout(
    _buildings: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxesFacet_applyLayoutTo(
    _layoutIndex: BigNumberish,
    _settlementAddress: string,
    _index: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxesFacet_getTaxLayoutsLength(overrides?: CallOverrides): Promise<BigNumber>;

  taxesFacet_getLayouts(
    _start: BigNumberish,
    _end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([string[], BigNumber[], boolean] & {
      buildings: string[];
      tokenAmounts: BigNumber[];
      isActive: boolean;
    })[]
  >;

  taxesFacet_disableLayout(
    _layoutIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxesFacet_removeUserTax(
    _settlementAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

  getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

  getCallbackSelector(overrides?: CallOverrides): Promise<string>;

  getContent(overrides?: CallOverrides): Promise<string>;

  setContent(
    _content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    content(overrides?: CallOverrides): Promise<string>;

    taxesFacet_init(
      _taxReceiver: string,
      _punishCountdown: BigNumberish,
      _punishPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    taxesFacet_claimTax(
      _settlementAddress: string,
      _building: string,
      overrides?: CallOverrides
    ): Promise<void>;

    taxesFacet_canPunish(
      _settlementAddress: string,
      _building: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    taxesFacet_punish(
      _settlementAddress: string,
      _building: string,
      overrides?: CallOverrides
    ): Promise<void>;

    taxesFacet_data(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        _punishPercent: BigNumber;
        _taxReceiver: string;
        _punishCountdown: BigNumber;
      }
    >;

    taxesFacet_newLayout(
      _buildings: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    taxesFacet_applyLayoutTo(
      _layoutIndex: BigNumberish,
      _settlementAddress: string,
      _index: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    taxesFacet_getTaxLayoutsLength(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxesFacet_getLayouts(
      _start: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([string[], BigNumber[], boolean] & {
        buildings: string[];
        tokenAmounts: BigNumber[];
        isActive: boolean;
      })[]
    >;

    taxesFacet_disableLayout(
      _layoutIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    taxesFacet_removeUserTax(
      _settlementAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

    getCallbackSelector(overrides?: CallOverrides): Promise<string>;

    getContent(overrides?: CallOverrides): Promise<string>;

    setContent(_content: string, overrides?: CallOverrides): Promise<void>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "NewContent(string)"(
      content?: null
    ): TypedEventFilter<[string], { content: string }>;

    NewContent(content?: null): TypedEventFilter<[string], { content: string }>;
  };

  estimateGas: {
    content(overrides?: CallOverrides): Promise<BigNumber>;

    taxesFacet_init(
      _taxReceiver: string,
      _punishCountdown: BigNumberish,
      _punishPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxesFacet_claimTax(
      _settlementAddress: string,
      _building: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxesFacet_canPunish(
      _settlementAddress: string,
      _building: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxesFacet_punish(
      _settlementAddress: string,
      _building: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxesFacet_data(overrides?: CallOverrides): Promise<BigNumber>;

    taxesFacet_newLayout(
      _buildings: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxesFacet_applyLayoutTo(
      _layoutIndex: BigNumberish,
      _settlementAddress: string,
      _index: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxesFacet_getTaxLayoutsLength(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxesFacet_getLayouts(
      _start: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxesFacet_disableLayout(
      _layoutIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxesFacet_removeUserTax(
      _settlementAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<BigNumber>;

    getCallbackSelector(overrides?: CallOverrides): Promise<BigNumber>;

    getContent(overrides?: CallOverrides): Promise<BigNumber>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    content(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxesFacet_init(
      _taxReceiver: string,
      _punishCountdown: BigNumberish,
      _punishPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxesFacet_claimTax(
      _settlementAddress: string,
      _building: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxesFacet_canPunish(
      _settlementAddress: string,
      _building: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxesFacet_punish(
      _settlementAddress: string,
      _building: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxesFacet_data(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxesFacet_newLayout(
      _buildings: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxesFacet_applyLayoutTo(
      _layoutIndex: BigNumberish,
      _settlementAddress: string,
      _index: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxesFacet_getTaxLayoutsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxesFacet_getLayouts(
      _start: BigNumberish,
      _end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxesFacet_disableLayout(
      _layoutIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxesFacet_removeUserTax(
      _settlementAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllowedExternalFunctions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCallbackSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRequiredSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

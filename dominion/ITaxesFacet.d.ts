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

interface ITaxesFacetInterface extends ethers.utils.Interface {
  functions: {
    "taxesFacet_init(address,uint64,uint256)": FunctionFragment;
    "taxesFacet_claimTax(address,string)": FunctionFragment;
    "taxesFacet_canPunish(address,string)": FunctionFragment;
    "taxesFacet_punish(address,string)": FunctionFragment;
    "taxesFacet_data()": FunctionFragment;
  };

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

  events: {};
}

export class ITaxesFacet extends BaseContract {
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

  interface: ITaxesFacetInterface;

  functions: {
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
  };

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

  callStatic: {
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
  };

  filters: {};

  estimateGas: {
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
  };

  populateTransaction: {
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
  };
}

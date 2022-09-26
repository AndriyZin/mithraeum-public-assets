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

interface InviteFacetBasicInterface extends ethers.utils.Interface {
  functions: {
    "content()": FunctionFragment;
    "inviteFacet_init()": FunctionFragment;
    "inviteFacet_join(address,tuple)": FunctionFragment;
    "getFunctionSelectors()": FunctionFragment;
    "getRequiredSelectors()": FunctionFragment;
    "getAllowedExternalFunctions()": FunctionFragment;
    "getCallbackSelector()": FunctionFragment;
    "getContent()": FunctionFragment;
    "setContent(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "content", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inviteFacet_init",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inviteFacet_join",
    values: [
      string,
      {
        entryLimit: BigNumberish;
        expiredAt: BigNumberish;
        callbacks: BytesLike[];
        signature: BytesLike;
        replaceSignatures: BytesLike[];
        signer: string;
      }
    ]
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

  decodeFunctionResult(functionFragment: "content", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inviteFacet_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inviteFacet_join",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredSelectors",
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

  events: {
    "NewContent(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewContent"): EventFragment;
}

export type NewContentEvent = TypedEvent<[string] & { content: string }>;

export class InviteFacetBasic extends BaseContract {
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

  interface: InviteFacetBasicInterface;

  functions: {
    content(overrides?: CallOverrides): Promise<[string]>;

    inviteFacet_init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    inviteFacet_join(
      _settlementAddress: string,
      data: {
        entryLimit: BigNumberish;
        expiredAt: BigNumberish;
        callbacks: BytesLike[];
        signature: BytesLike;
        replaceSignatures: BytesLike[];
        signer: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<[string[]] & { res: string[] }>;

    getRequiredSelectors(
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
  };

  content(overrides?: CallOverrides): Promise<string>;

  inviteFacet_init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  inviteFacet_join(
    _settlementAddress: string,
    data: {
      entryLimit: BigNumberish;
      expiredAt: BigNumberish;
      callbacks: BytesLike[];
      signature: BytesLike;
      replaceSignatures: BytesLike[];
      signer: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

  getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

  getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

  getCallbackSelector(overrides?: CallOverrides): Promise<string>;

  getContent(overrides?: CallOverrides): Promise<string>;

  setContent(
    _content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    content(overrides?: CallOverrides): Promise<string>;

    inviteFacet_init(overrides?: CallOverrides): Promise<void>;

    inviteFacet_join(
      _settlementAddress: string,
      data: {
        entryLimit: BigNumberish;
        expiredAt: BigNumberish;
        callbacks: BytesLike[];
        signature: BytesLike;
        replaceSignatures: BytesLike[];
        signer: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<string[]>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<string[]>;

    getCallbackSelector(overrides?: CallOverrides): Promise<string>;

    getContent(overrides?: CallOverrides): Promise<string>;

    setContent(_content: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewContent(string)"(
      content?: null
    ): TypedEventFilter<[string], { content: string }>;

    NewContent(content?: null): TypedEventFilter<[string], { content: string }>;
  };

  estimateGas: {
    content(overrides?: CallOverrides): Promise<BigNumber>;

    inviteFacet_init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    inviteFacet_join(
      _settlementAddress: string,
      data: {
        entryLimit: BigNumberish;
        expiredAt: BigNumberish;
        callbacks: BytesLike[];
        signature: BytesLike;
        replaceSignatures: BytesLike[];
        signer: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getRequiredSelectors(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowedExternalFunctions(overrides?: CallOverrides): Promise<BigNumber>;

    getCallbackSelector(overrides?: CallOverrides): Promise<BigNumber>;

    getContent(overrides?: CallOverrides): Promise<BigNumber>;

    setContent(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    content(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inviteFacet_init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    inviteFacet_join(
      _settlementAddress: string,
      data: {
        entryLimit: BigNumberish;
        expiredAt: BigNumberish;
        callbacks: BytesLike[];
        signature: BytesLike;
        replaceSignatures: BytesLike[];
        signer: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFunctionSelectors(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequiredSelectors(
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
  };
}

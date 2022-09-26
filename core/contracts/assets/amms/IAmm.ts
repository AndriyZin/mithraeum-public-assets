/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IAmmInterface extends utils.Interface {
  functions: {
    "applyState()": FunctionFragment;
    "currentZone()": FunctionFragment;
    "init(address,address,address,address)": FunctionFragment;
    "lastApplyStateTime()": FunctionFragment;
    "prosperity()": FunctionFragment;
    "swapExactProsperityForWorkers(uint256,uint256)": FunctionFragment;
    "swapProsperityForExactWorkers(uint256,uint256)": FunctionFragment;
    "workers()": FunctionFragment;
    "workersBalance()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "applyState"
      | "currentZone"
      | "init"
      | "lastApplyStateTime"
      | "prosperity"
      | "swapExactProsperityForWorkers"
      | "swapProsperityForExactWorkers"
      | "workers"
      | "workersBalance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "applyState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentZone",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastApplyStateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prosperity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactProsperityForWorkers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapProsperityForExactWorkers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "workers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "workersBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "applyState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentZone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastApplyStateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prosperity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactProsperityForWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapProsperityForExactWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "workers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "workersBalance",
    data: BytesLike
  ): Result;

  events: {
    "WorkersBought(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WorkersBought"): EventFragment;
}

export interface WorkersBoughtEventObject {
  buyer: string;
  workersBought: BigNumber;
  prosperitySpent: BigNumber;
  currentWorkers: BigNumber;
  currentProsperity: BigNumber;
}
export type WorkersBoughtEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  WorkersBoughtEventObject
>;

export type WorkersBoughtEventFilter = TypedEventFilter<WorkersBoughtEvent>;

export interface IAmm extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAmmInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    applyState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentZone(overrides?: CallOverrides): Promise<[string]>;

    init(
      zoneAddress: string,
      worldAddress: string,
      workersAddress: string,
      prosperityAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastApplyStateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    prosperity(overrides?: CallOverrides): Promise<[string]>;

    swapExactProsperityForWorkers(
      prosperityToSell: BigNumberish,
      minWorkersReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapProsperityForExactWorkers(
      workersToBuy: BigNumberish,
      maxProsperityToSell: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    workers(overrides?: CallOverrides): Promise<[string]>;

    workersBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  applyState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentZone(overrides?: CallOverrides): Promise<string>;

  init(
    zoneAddress: string,
    worldAddress: string,
    workersAddress: string,
    prosperityAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastApplyStateTime(overrides?: CallOverrides): Promise<BigNumber>;

  prosperity(overrides?: CallOverrides): Promise<string>;

  swapExactProsperityForWorkers(
    prosperityToSell: BigNumberish,
    minWorkersReturn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapProsperityForExactWorkers(
    workersToBuy: BigNumberish,
    maxProsperityToSell: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  workers(overrides?: CallOverrides): Promise<string>;

  workersBalance(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    applyState(overrides?: CallOverrides): Promise<void>;

    currentZone(overrides?: CallOverrides): Promise<string>;

    init(
      zoneAddress: string,
      worldAddress: string,
      workersAddress: string,
      prosperityAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastApplyStateTime(overrides?: CallOverrides): Promise<BigNumber>;

    prosperity(overrides?: CallOverrides): Promise<string>;

    swapExactProsperityForWorkers(
      prosperityToSell: BigNumberish,
      minWorkersReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapProsperityForExactWorkers(
      workersToBuy: BigNumberish,
      maxProsperityToSell: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(overrides?: CallOverrides): Promise<string>;

    workersBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "WorkersBought(address,uint256,uint256,uint256,uint256)"(
      buyer?: null,
      workersBought?: null,
      prosperitySpent?: null,
      currentWorkers?: null,
      currentProsperity?: null
    ): WorkersBoughtEventFilter;
    WorkersBought(
      buyer?: null,
      workersBought?: null,
      prosperitySpent?: null,
      currentWorkers?: null,
      currentProsperity?: null
    ): WorkersBoughtEventFilter;
  };

  estimateGas: {
    applyState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentZone(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      zoneAddress: string,
      worldAddress: string,
      workersAddress: string,
      prosperityAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastApplyStateTime(overrides?: CallOverrides): Promise<BigNumber>;

    prosperity(overrides?: CallOverrides): Promise<BigNumber>;

    swapExactProsperityForWorkers(
      prosperityToSell: BigNumberish,
      minWorkersReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapProsperityForExactWorkers(
      workersToBuy: BigNumberish,
      maxProsperityToSell: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    workers(overrides?: CallOverrides): Promise<BigNumber>;

    workersBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    applyState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentZone(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      zoneAddress: string,
      worldAddress: string,
      workersAddress: string,
      prosperityAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastApplyStateTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prosperity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapExactProsperityForWorkers(
      prosperityToSell: BigNumberish,
      minWorkersReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapProsperityForExactWorkers(
      workersToBuy: BigNumberish,
      maxProsperityToSell: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    workers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    workersBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

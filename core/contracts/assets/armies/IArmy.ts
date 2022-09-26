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

export interface IArmyInterface extends utils.Interface {
  functions: {
    "battle()": FunctionFragment;
    "burnUnits(string[],uint256[])": FunctionFragment;
    "claimResources(address,uint256)": FunctionFragment;
    "currentPosition()": FunctionFragment;
    "currentSettlement()": FunctionFragment;
    "demilitarize(string[],uint256[])": FunctionFragment;
    "destinationPosition()": FunctionFragment;
    "getCurrentPosition()": FunctionFragment;
    "getMovementPath()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getTotalSiegeSupport()": FunctionFragment;
    "homePosition()": FunctionFragment;
    "initArmy(address,address)": FunctionFragment;
    "isHomePosition()": FunctionFragment;
    "joinBattle(address,bool)": FunctionFragment;
    "move(uint32[],uint256)": FunctionFragment;
    "movementPath(uint256)": FunctionFragment;
    "movementTiming()": FunctionFragment;
    "newBattle(address)": FunctionFragment;
    "setInBattle(address)": FunctionFragment;
    "setSiegeAddress(address)": FunctionFragment;
    "siege()": FunctionFragment;
    "startSiege(string[],uint256[])": FunctionFragment;
    "unitsOnSiege(uint256)": FunctionFragment;
    "updatePosition()": FunctionFragment;
    "updateState()": FunctionFragment;
    "withdrawUnitsFromSiege(string[],uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "battle"
      | "burnUnits"
      | "claimResources"
      | "currentPosition"
      | "currentSettlement"
      | "demilitarize"
      | "destinationPosition"
      | "getCurrentPosition"
      | "getMovementPath"
      | "getOwner"
      | "getTotalSiegeSupport"
      | "homePosition"
      | "initArmy"
      | "isHomePosition"
      | "joinBattle"
      | "move"
      | "movementPath"
      | "movementTiming"
      | "newBattle"
      | "setInBattle"
      | "setSiegeAddress"
      | "siege"
      | "startSiege"
      | "unitsOnSiege"
      | "updatePosition"
      | "updateState"
      | "withdrawUnitsFromSiege"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "battle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burnUnits",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimResources",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "demilitarize",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "destinationPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMovementPath",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTotalSiegeSupport",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "homePosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initArmy",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isHomePosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "joinBattle",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "move",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "movementPath",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "movementTiming",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "newBattle", values: [string]): string;
  encodeFunctionData(functionFragment: "setInBattle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSiegeAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "siege", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startSiege",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "unitsOnSiege",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnitsFromSiege",
    values: [string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "battle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnUnits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "demilitarize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destinationPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMovementPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSiegeSupport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "homePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initArmy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isHomePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinBattle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "movementPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "movementTiming",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newBattle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInBattle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSiegeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "siege", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startSiege", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unitsOnSiege",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnitsFromSiege",
    data: BytesLike
  ): Result;

  events: {
    "Disband()": EventFragment;
    "ExitedFromBattle(address)": EventFragment;
    "JoinedBattle(address,bool)": EventFragment;
    "Moving(uint256,uint32[])": EventFragment;
    "MovingTo(address,uint256,uint256,uint32[])": EventFragment;
    "NewBattle(address,address)": EventFragment;
    "UnitsChanged(string,uint256)": EventFragment;
    "UpdatePosition(address,uint64,uint16,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Disband"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExitedFromBattle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JoinedBattle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Moving"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MovingTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBattle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnitsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatePosition"): EventFragment;
}

export interface DisbandEventObject {}
export type DisbandEvent = TypedEvent<[], DisbandEventObject>;

export type DisbandEventFilter = TypedEventFilter<DisbandEvent>;

export interface ExitedFromBattleEventObject {
  battleAddress: string;
}
export type ExitedFromBattleEvent = TypedEvent<
  [string],
  ExitedFromBattleEventObject
>;

export type ExitedFromBattleEventFilter =
  TypedEventFilter<ExitedFromBattleEvent>;

export interface JoinedBattleEventObject {
  battleAddress: string;
  isSideA: boolean;
}
export type JoinedBattleEvent = TypedEvent<
  [string, boolean],
  JoinedBattleEventObject
>;

export type JoinedBattleEventFilter = TypedEventFilter<JoinedBattleEvent>;

export interface MovingEventObject {
  destTime: BigNumber;
  path: number[];
}
export type MovingEvent = TypedEvent<[BigNumber, number[]], MovingEventObject>;

export type MovingEventFilter = TypedEventFilter<MovingEvent>;

export interface MovingToEventObject {
  destinationSettlement: string;
  movementStartTime: BigNumber;
  movementFinishTime: BigNumber;
  path: number[];
}
export type MovingToEvent = TypedEvent<
  [string, BigNumber, BigNumber, number[]],
  MovingToEventObject
>;

export type MovingToEventFilter = TypedEventFilter<MovingToEvent>;

export interface NewBattleEventObject {
  battleAddress: string;
  targetArmyAddress: string;
}
export type NewBattleEvent = TypedEvent<[string, string], NewBattleEventObject>;

export type NewBattleEventFilter = TypedEventFilter<NewBattleEvent>;

export interface UnitsChangedEventObject {
  unitName: string;
  value: BigNumber;
}
export type UnitsChangedEvent = TypedEvent<
  [string, BigNumber],
  UnitsChangedEventObject
>;

export type UnitsChangedEventFilter = TypedEventFilter<UnitsChangedEvent>;

export interface UpdatePositionEventObject {
  settlementAddress: string;
  continentId: BigNumber;
  globalX: number;
  globalY: number;
}
export type UpdatePositionEvent = TypedEvent<
  [string, BigNumber, number, number],
  UpdatePositionEventObject
>;

export type UpdatePositionEventFilter = TypedEventFilter<UpdatePositionEvent>;

export interface IArmy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IArmyInterface;

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
    battle(overrides?: CallOverrides): Promise<[string]>;

    burnUnits(
      unitNames: string[],
      _unitCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimResources(
      buildingAddress: string,
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    currentSettlement(overrides?: CallOverrides): Promise<[string]>;

    demilitarize(
      unitNames: string[],
      unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destinationPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    getCurrentPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    getMovementPath(overrides?: CallOverrides): Promise<[number[]]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getTotalSiegeSupport(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalSiegePower: BigNumber }>;

    homePosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    initArmy(
      _worldAddress: string,
      _settlementAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isHomePosition(overrides?: CallOverrides): Promise<[boolean]>;

    joinBattle(
      _battleAddress: string,
      _isSideA: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    move(
      path: BigNumberish[],
      foodToSpendOnFeeding: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    movementPath(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    movementTiming(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { startTime: BigNumber; endTime: BigNumber }
    >;

    newBattle(
      _armyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInBattle(
      _battleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSiegeAddress(
      _siegeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    siege(overrides?: CallOverrides): Promise<[string]>;

    startSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unitsOnSiege(
      unitType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updatePosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawUnitsFromSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  battle(overrides?: CallOverrides): Promise<string>;

  burnUnits(
    unitNames: string[],
    _unitCount: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimResources(
    buildingAddress: string,
    _points: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentPosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      continent: BigNumber;
      globalX: number;
      globalY: number;
    }
  >;

  currentSettlement(overrides?: CallOverrides): Promise<string>;

  demilitarize(
    unitNames: string[],
    unitsCount: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destinationPosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      continent: BigNumber;
      globalX: number;
      globalY: number;
    }
  >;

  getCurrentPosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      continent: BigNumber;
      globalX: number;
      globalY: number;
    }
  >;

  getMovementPath(overrides?: CallOverrides): Promise<number[]>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getTotalSiegeSupport(overrides?: CallOverrides): Promise<BigNumber>;

  homePosition(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      continent: BigNumber;
      globalX: number;
      globalY: number;
    }
  >;

  initArmy(
    _worldAddress: string,
    _settlementAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isHomePosition(overrides?: CallOverrides): Promise<boolean>;

  joinBattle(
    _battleAddress: string,
    _isSideA: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  move(
    path: BigNumberish[],
    foodToSpendOnFeeding: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  movementPath(index: BigNumberish, overrides?: CallOverrides): Promise<number>;

  movementTiming(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { startTime: BigNumber; endTime: BigNumber }
  >;

  newBattle(
    _armyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInBattle(
    _battleAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSiegeAddress(
    _siegeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  siege(overrides?: CallOverrides): Promise<string>;

  startSiege(
    _unitNames: string[],
    _unitsCount: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unitsOnSiege(
    unitType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updatePosition(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawUnitsFromSiege(
    _unitNames: string[],
    _unitsCount: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    battle(overrides?: CallOverrides): Promise<string>;

    burnUnits(
      unitNames: string[],
      _unitCount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimResources(
      buildingAddress: string,
      _points: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    currentSettlement(overrides?: CallOverrides): Promise<string>;

    demilitarize(
      unitNames: string[],
      unitsCount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    destinationPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    getCurrentPosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    getMovementPath(overrides?: CallOverrides): Promise<number[]>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getTotalSiegeSupport(overrides?: CallOverrides): Promise<BigNumber>;

    homePosition(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        continent: BigNumber;
        globalX: number;
        globalY: number;
      }
    >;

    initArmy(
      _worldAddress: string,
      _settlementAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isHomePosition(overrides?: CallOverrides): Promise<boolean>;

    joinBattle(
      _battleAddress: string,
      _isSideA: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    move(
      path: BigNumberish[],
      foodToSpendOnFeeding: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    movementPath(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    movementTiming(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { startTime: BigNumber; endTime: BigNumber }
    >;

    newBattle(_armyAddress: string, overrides?: CallOverrides): Promise<void>;

    setInBattle(
      _battleAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSiegeAddress(
      _siegeAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    siege(overrides?: CallOverrides): Promise<string>;

    startSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    unitsOnSiege(
      unitType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updatePosition(overrides?: CallOverrides): Promise<void>;

    updateState(overrides?: CallOverrides): Promise<void>;

    withdrawUnitsFromSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Disband()"(): DisbandEventFilter;
    Disband(): DisbandEventFilter;

    "ExitedFromBattle(address)"(
      battleAddress?: null
    ): ExitedFromBattleEventFilter;
    ExitedFromBattle(battleAddress?: null): ExitedFromBattleEventFilter;

    "JoinedBattle(address,bool)"(
      battleAddress?: string | null,
      isSideA?: null
    ): JoinedBattleEventFilter;
    JoinedBattle(
      battleAddress?: string | null,
      isSideA?: null
    ): JoinedBattleEventFilter;

    "Moving(uint256,uint32[])"(
      destTime?: BigNumberish | null,
      path?: null
    ): MovingEventFilter;
    Moving(destTime?: BigNumberish | null, path?: null): MovingEventFilter;

    "MovingTo(address,uint256,uint256,uint32[])"(
      destinationSettlement?: string | null,
      movementStartTime?: BigNumberish | null,
      movementFinishTime?: BigNumberish | null,
      path?: null
    ): MovingToEventFilter;
    MovingTo(
      destinationSettlement?: string | null,
      movementStartTime?: BigNumberish | null,
      movementFinishTime?: BigNumberish | null,
      path?: null
    ): MovingToEventFilter;

    "NewBattle(address,address)"(
      battleAddress?: null,
      targetArmyAddress?: null
    ): NewBattleEventFilter;
    NewBattle(
      battleAddress?: null,
      targetArmyAddress?: null
    ): NewBattleEventFilter;

    "UnitsChanged(string,uint256)"(
      unitName?: null,
      value?: null
    ): UnitsChangedEventFilter;
    UnitsChanged(unitName?: null, value?: null): UnitsChangedEventFilter;

    "UpdatePosition(address,uint64,uint16,uint16)"(
      settlementAddress?: null,
      continentId?: null,
      globalX?: null,
      globalY?: null
    ): UpdatePositionEventFilter;
    UpdatePosition(
      settlementAddress?: null,
      continentId?: null,
      globalX?: null,
      globalY?: null
    ): UpdatePositionEventFilter;
  };

  estimateGas: {
    battle(overrides?: CallOverrides): Promise<BigNumber>;

    burnUnits(
      unitNames: string[],
      _unitCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimResources(
      buildingAddress: string,
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentPosition(overrides?: CallOverrides): Promise<BigNumber>;

    currentSettlement(overrides?: CallOverrides): Promise<BigNumber>;

    demilitarize(
      unitNames: string[],
      unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destinationPosition(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentPosition(overrides?: CallOverrides): Promise<BigNumber>;

    getMovementPath(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalSiegeSupport(overrides?: CallOverrides): Promise<BigNumber>;

    homePosition(overrides?: CallOverrides): Promise<BigNumber>;

    initArmy(
      _worldAddress: string,
      _settlementAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isHomePosition(overrides?: CallOverrides): Promise<BigNumber>;

    joinBattle(
      _battleAddress: string,
      _isSideA: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    move(
      path: BigNumberish[],
      foodToSpendOnFeeding: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    movementPath(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    movementTiming(overrides?: CallOverrides): Promise<BigNumber>;

    newBattle(
      _armyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInBattle(
      _battleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSiegeAddress(
      _siegeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    siege(overrides?: CallOverrides): Promise<BigNumber>;

    startSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unitsOnSiege(
      unitType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updatePosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawUnitsFromSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    battle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnUnits(
      unitNames: string[],
      _unitCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimResources(
      buildingAddress: string,
      _points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentSettlement(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    demilitarize(
      unitNames: string[],
      unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destinationPosition(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentPosition(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMovementPath(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalSiegeSupport(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    homePosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initArmy(
      _worldAddress: string,
      _settlementAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isHomePosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    joinBattle(
      _battleAddress: string,
      _isSideA: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    move(
      path: BigNumberish[],
      foodToSpendOnFeeding: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    movementPath(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    movementTiming(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newBattle(
      _armyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInBattle(
      _battleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSiegeAddress(
      _siegeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    siege(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unitsOnSiege(
      unitType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updatePosition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawUnitsFromSiege(
      _unitNames: string[],
      _unitsCount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
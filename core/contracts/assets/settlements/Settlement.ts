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

export interface SettlementInterface extends utils.Interface {
  functions: {
    "accumulatedCurrentProsperity(uint256)": FunctionFragment;
    "addDelegate(address)": FunctionFragment;
    "army()": FunctionFragment;
    "assetName()": FunctionFragment;
    "assetType()": FunctionFragment;
    "buildingMap(string)": FunctionFragment;
    "calculateCurrentHealthAndDamage(uint256)": FunctionFragment;
    "createNewArmy()": FunctionFragment;
    "createSiege()": FunctionFragment;
    "currentSettlementEpoch()": FunctionFragment;
    "currentZone()": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "extendProsperity(uint256)": FunctionFragment;
    "extraProsperity()": FunctionFragment;
    "getCurrentSiegePower()": FunctionFragment;
    "getSettlementOwner()": FunctionFragment;
    "governors(uint256,address)": FunctionFragment;
    "init(address,uint256,address)": FunctionFragment;
    "isRuler(address)": FunctionFragment;
    "massUpdate()": FunctionFragment;
    "newBuilding(string)": FunctionFragment;
    "ownerTokenId()": FunctionFragment;
    "removeDelegate(address)": FunctionFragment;
    "removeDelegates()": FunctionFragment;
    "siege()": FunctionFragment;
    "swapExactProsperityForWorkers(uint256,uint256)": FunctionFragment;
    "swapProsperityForExactWorkers(uint256,uint256)": FunctionFragment;
    "transferResources(string,address,uint256)": FunctionFragment;
    "transferWorkers(address,uint256)": FunctionFragment;
    "updateCurrentHealth()": FunctionFragment;
    "updateHealthByApplyState(uint256,bool)": FunctionFragment;
    "world()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accumulatedCurrentProsperity"
      | "addDelegate"
      | "army"
      | "assetName"
      | "assetType"
      | "buildingMap"
      | "calculateCurrentHealthAndDamage"
      | "createNewArmy"
      | "createSiege"
      | "currentSettlementEpoch"
      | "currentZone"
      | "delegates"
      | "extendProsperity"
      | "extraProsperity"
      | "getCurrentSiegePower"
      | "getSettlementOwner"
      | "governors"
      | "init"
      | "isRuler"
      | "massUpdate"
      | "newBuilding"
      | "ownerTokenId"
      | "removeDelegate"
      | "removeDelegates"
      | "siege"
      | "swapExactProsperityForWorkers"
      | "swapProsperityForExactWorkers"
      | "transferResources"
      | "transferWorkers"
      | "updateCurrentHealth"
      | "updateHealthByApplyState"
      | "world"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accumulatedCurrentProsperity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "addDelegate", values: [string]): string;
  encodeFunctionData(functionFragment: "army", values?: undefined): string;
  encodeFunctionData(functionFragment: "assetName", values?: undefined): string;
  encodeFunctionData(functionFragment: "assetType", values?: undefined): string;
  encodeFunctionData(functionFragment: "buildingMap", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateCurrentHealthAndDamage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewArmy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createSiege",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentSettlementEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentZone",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delegates", values: [string]): string;
  encodeFunctionData(
    functionFragment: "extendProsperity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "extraProsperity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentSiegePower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSettlementOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governors",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "isRuler", values: [string]): string;
  encodeFunctionData(
    functionFragment: "massUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "newBuilding", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ownerTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeDelegate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDelegates",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "siege", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapExactProsperityForWorkers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapProsperityForExactWorkers",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferResources",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferWorkers",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCurrentHealth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateHealthByApplyState",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "world", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accumulatedCurrentProsperity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "army", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assetName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assetType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buildingMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateCurrentHealthAndDamage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewArmy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSiege",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentSettlementEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentZone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "extendProsperity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraProsperity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentSiegePower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettlementOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isRuler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "massUpdate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newBuilding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDelegates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "siege", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactProsperityForWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapProsperityForExactWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCurrentHealth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateHealthByApplyState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "world", data: BytesLike): Result;

  events: {
    "DelegateChanged(address,uint8,uint256)": EventFragment;
    "GovernorChanged(uint256,address,bool)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NewArmy(address,uint64,uint16,uint16)": EventFragment;
    "NewBuilding(address,string)": EventFragment;
    "NewSettlementEpoch(uint256)": EventFragment;
    "SiegeCreated(address)": EventFragment;
    "WarriorsMinted(address,uint256,uint256)": EventFragment;
    "WorkersTransferred(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewArmy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBuilding"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSettlementEpoch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SiegeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WarriorsMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WorkersTransferred"): EventFragment;
}

export interface DelegateChangedEventObject {
  delegate: string;
  state: number;
  guaranteeTime: BigNumber;
}
export type DelegateChangedEvent = TypedEvent<
  [string, number, BigNumber],
  DelegateChangedEventObject
>;

export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;

export interface GovernorChangedEventObject {
  currentEpoch: BigNumber;
  governorAddress: string;
  status: boolean;
}
export type GovernorChangedEvent = TypedEvent<
  [BigNumber, string, boolean],
  GovernorChangedEventObject
>;

export type GovernorChangedEventFilter = TypedEventFilter<GovernorChangedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NewArmyEventObject {
  armyAddress: string;
  currentContinent: BigNumber;
  globalX: number;
  globalY: number;
}
export type NewArmyEvent = TypedEvent<
  [string, BigNumber, number, number],
  NewArmyEventObject
>;

export type NewArmyEventFilter = TypedEventFilter<NewArmyEvent>;

export interface NewBuildingEventObject {
  contractAddress: string;
  scriptName: string;
}
export type NewBuildingEvent = TypedEvent<
  [string, string],
  NewBuildingEventObject
>;

export type NewBuildingEventFilter = TypedEventFilter<NewBuildingEvent>;

export interface NewSettlementEpochEventObject {
  currentEpoch: BigNumber;
}
export type NewSettlementEpochEvent = TypedEvent<
  [BigNumber],
  NewSettlementEpochEventObject
>;

export type NewSettlementEpochEventFilter =
  TypedEventFilter<NewSettlementEpochEvent>;

export interface SiegeCreatedEventObject {
  siegeAddress: string;
}
export type SiegeCreatedEvent = TypedEvent<[string], SiegeCreatedEventObject>;

export type SiegeCreatedEventFilter = TypedEventFilter<SiegeCreatedEvent>;

export interface WarriorsMintedEventObject {
  armyAddress: string;
  unitType: BigNumber;
  warriorsAmountMinted: BigNumber;
}
export type WarriorsMintedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  WarriorsMintedEventObject
>;

export type WarriorsMintedEventFilter = TypedEventFilter<WarriorsMintedEvent>;

export interface WorkersTransferredEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type WorkersTransferredEvent = TypedEvent<
  [string, string, BigNumber],
  WorkersTransferredEventObject
>;

export type WorkersTransferredEventFilter =
  TypedEventFilter<WorkersTransferredEvent>;

export interface Settlement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SettlementInterface;

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
    accumulatedCurrentProsperity(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addDelegate(
      _governorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    army(overrides?: CallOverrides): Promise<[string]>;

    assetName(overrides?: CallOverrides): Promise<[string]>;

    assetType(overrides?: CallOverrides): Promise<[string]>;

    buildingMap(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    calculateCurrentHealthAndDamage(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { currentHealth: BigNumber; damage: BigNumber }
    >;

    createNewArmy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createSiege(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentSettlementEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentZone(overrides?: CallOverrides): Promise<[string]>;

    delegates(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
        active: boolean;
        signedAt: BigNumber;
        guaranteeTime: BigNumber;
        secondGuaranteeTime: BigNumber;
        version: BigNumber;
      }
    >;

    extendProsperity(
      prosperityAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    extraProsperity(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCurrentSiegePower(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSettlementOwner(overrides?: CallOverrides): Promise<[string]>;

    governors(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    init(
      worldAddress: string,
      createdWithOwnerTokenId: BigNumberish,
      zoneAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isRuler(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    massUpdate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    newBuilding(
      buildingName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeDelegate(
      _governorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeDelegates(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    siege(overrides?: CallOverrides): Promise<[string]>;

    swapExactProsperityForWorkers(
      _prosperityToSell: BigNumberish,
      _minWorkersReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapProsperityForExactWorkers(
      _workersToBuy: BigNumberish,
      _maxProsperityToSell: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferResources(
      _resourceName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferWorkers(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCurrentHealth(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateHealthByApplyState(
      _healthDiff: BigNumberish,
      _isProduced: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    world(overrides?: CallOverrides): Promise<[string]>;
  };

  accumulatedCurrentProsperity(
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addDelegate(
    _governorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  army(overrides?: CallOverrides): Promise<string>;

  assetName(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<string>;

  buildingMap(arg0: string, overrides?: CallOverrides): Promise<string>;

  calculateCurrentHealthAndDamage(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { currentHealth: BigNumber; damage: BigNumber }
  >;

  createNewArmy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createSiege(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentSettlementEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  currentZone(overrides?: CallOverrides): Promise<string>;

  delegates(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
      active: boolean;
      signedAt: BigNumber;
      guaranteeTime: BigNumber;
      secondGuaranteeTime: BigNumber;
      version: BigNumber;
    }
  >;

  extendProsperity(
    prosperityAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  extraProsperity(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentSiegePower(overrides?: CallOverrides): Promise<BigNumber>;

  getSettlementOwner(overrides?: CallOverrides): Promise<string>;

  governors(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  init(
    worldAddress: string,
    createdWithOwnerTokenId: BigNumberish,
    zoneAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isRuler(_address: string, overrides?: CallOverrides): Promise<boolean>;

  massUpdate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  newBuilding(
    buildingName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  removeDelegate(
    _governorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeDelegates(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  siege(overrides?: CallOverrides): Promise<string>;

  swapExactProsperityForWorkers(
    _prosperityToSell: BigNumberish,
    _minWorkersReturn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapProsperityForExactWorkers(
    _workersToBuy: BigNumberish,
    _maxProsperityToSell: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferResources(
    _resourceName: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferWorkers(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCurrentHealth(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateHealthByApplyState(
    _healthDiff: BigNumberish,
    _isProduced: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  world(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accumulatedCurrentProsperity(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addDelegate(
      _governorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    army(overrides?: CallOverrides): Promise<string>;

    assetName(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<string>;

    buildingMap(arg0: string, overrides?: CallOverrides): Promise<string>;

    calculateCurrentHealthAndDamage(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { currentHealth: BigNumber; damage: BigNumber }
    >;

    createNewArmy(overrides?: CallOverrides): Promise<void>;

    createSiege(overrides?: CallOverrides): Promise<void>;

    currentSettlementEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    currentZone(overrides?: CallOverrides): Promise<string>;

    delegates(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
        active: boolean;
        signedAt: BigNumber;
        guaranteeTime: BigNumber;
        secondGuaranteeTime: BigNumber;
        version: BigNumber;
      }
    >;

    extendProsperity(
      prosperityAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    extraProsperity(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentSiegePower(overrides?: CallOverrides): Promise<BigNumber>;

    getSettlementOwner(overrides?: CallOverrides): Promise<string>;

    governors(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    init(
      worldAddress: string,
      createdWithOwnerTokenId: BigNumberish,
      zoneAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isRuler(_address: string, overrides?: CallOverrides): Promise<boolean>;

    massUpdate(overrides?: CallOverrides): Promise<void>;

    newBuilding(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    ownerTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    removeDelegate(
      _governorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeDelegates(overrides?: CallOverrides): Promise<void>;

    siege(overrides?: CallOverrides): Promise<string>;

    swapExactProsperityForWorkers(
      _prosperityToSell: BigNumberish,
      _minWorkersReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapProsperityForExactWorkers(
      _workersToBuy: BigNumberish,
      _maxProsperityToSell: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferResources(
      _resourceName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferWorkers(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCurrentHealth(overrides?: CallOverrides): Promise<void>;

    updateHealthByApplyState(
      _healthDiff: BigNumberish,
      _isProduced: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    world(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DelegateChanged(address,uint8,uint256)"(
      delegate?: null,
      state?: null,
      guaranteeTime?: null
    ): DelegateChangedEventFilter;
    DelegateChanged(
      delegate?: null,
      state?: null,
      guaranteeTime?: null
    ): DelegateChangedEventFilter;

    "GovernorChanged(uint256,address,bool)"(
      currentEpoch?: BigNumberish | null,
      governorAddress?: string | null,
      status?: null
    ): GovernorChangedEventFilter;
    GovernorChanged(
      currentEpoch?: BigNumberish | null,
      governorAddress?: string | null,
      status?: null
    ): GovernorChangedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewArmy(address,uint64,uint16,uint16)"(
      armyAddress?: null,
      currentContinent?: null,
      globalX?: null,
      globalY?: null
    ): NewArmyEventFilter;
    NewArmy(
      armyAddress?: null,
      currentContinent?: null,
      globalX?: null,
      globalY?: null
    ): NewArmyEventFilter;

    "NewBuilding(address,string)"(
      contractAddress?: null,
      scriptName?: null
    ): NewBuildingEventFilter;
    NewBuilding(
      contractAddress?: null,
      scriptName?: null
    ): NewBuildingEventFilter;

    "NewSettlementEpoch(uint256)"(
      currentEpoch?: null
    ): NewSettlementEpochEventFilter;
    NewSettlementEpoch(currentEpoch?: null): NewSettlementEpochEventFilter;

    "SiegeCreated(address)"(
      siegeAddress?: string | null
    ): SiegeCreatedEventFilter;
    SiegeCreated(siegeAddress?: string | null): SiegeCreatedEventFilter;

    "WarriorsMinted(address,uint256,uint256)"(
      armyAddress?: string | null,
      unitType?: null,
      warriorsAmountMinted?: null
    ): WarriorsMintedEventFilter;
    WarriorsMinted(
      armyAddress?: string | null,
      unitType?: null,
      warriorsAmountMinted?: null
    ): WarriorsMintedEventFilter;

    "WorkersTransferred(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): WorkersTransferredEventFilter;
    WorkersTransferred(
      from?: string | null,
      to?: string | null,
      value?: null
    ): WorkersTransferredEventFilter;
  };

  estimateGas: {
    accumulatedCurrentProsperity(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addDelegate(
      _governorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    army(overrides?: CallOverrides): Promise<BigNumber>;

    assetName(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    buildingMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculateCurrentHealthAndDamage(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createNewArmy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createSiege(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentSettlementEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    currentZone(overrides?: CallOverrides): Promise<BigNumber>;

    delegates(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    extendProsperity(
      prosperityAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    extraProsperity(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentSiegePower(overrides?: CallOverrides): Promise<BigNumber>;

    getSettlementOwner(overrides?: CallOverrides): Promise<BigNumber>;

    governors(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      worldAddress: string,
      createdWithOwnerTokenId: BigNumberish,
      zoneAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isRuler(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    massUpdate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    newBuilding(
      buildingName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    removeDelegate(
      _governorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeDelegates(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    siege(overrides?: CallOverrides): Promise<BigNumber>;

    swapExactProsperityForWorkers(
      _prosperityToSell: BigNumberish,
      _minWorkersReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapProsperityForExactWorkers(
      _workersToBuy: BigNumberish,
      _maxProsperityToSell: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferResources(
      _resourceName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferWorkers(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCurrentHealth(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateHealthByApplyState(
      _healthDiff: BigNumberish,
      _isProduced: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    world(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accumulatedCurrentProsperity(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addDelegate(
      _governorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    army(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buildingMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateCurrentHealthAndDamage(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createNewArmy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createSiege(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentSettlementEpoch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentZone(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegates(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    extendProsperity(
      prosperityAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    extraProsperity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentSiegePower(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSettlementOwner(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governors(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      worldAddress: string,
      createdWithOwnerTokenId: BigNumberish,
      zoneAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isRuler(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    massUpdate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    newBuilding(
      buildingName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeDelegate(
      _governorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeDelegates(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    siege(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapExactProsperityForWorkers(
      _prosperityToSell: BigNumberish,
      _minWorkersReturn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapProsperityForExactWorkers(
      _workersToBuy: BigNumberish,
      _maxProsperityToSell: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferResources(
      _resourceName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferWorkers(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCurrentHealth(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateHealthByApplyState(
      _healthDiff: BigNumberish,
      _isProduced: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    world(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

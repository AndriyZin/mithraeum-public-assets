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

export declare namespace IRegistry {
  export type UnitStatsStruct = {
    weaponPowerStage1: BigNumberish;
    armourPowerStage1: BigNumberish;
    weaponPowerStage2: BigNumberish;
    armourPowerStage2: BigNumberish;
    siegePower: BigNumberish;
    siegeMaxSupply: BigNumberish;
    siegeSupport: BigNumberish;
  };

  export type UnitStatsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    weaponPowerStage1: BigNumber;
    armourPowerStage1: BigNumber;
    weaponPowerStage2: BigNumber;
    armourPowerStage2: BigNumber;
    siegePower: BigNumber;
    siegeMaxSupply: BigNumber;
    siegeSupport: BigNumber;
  };
}

export interface RegistryInterface extends utils.Interface {
  functions: {
    "copperInUpgradeLvl()": FunctionFragment;
    "factoryContracts(bytes32)": FunctionFragment;
    "getBaseBattleLobbyDuration()": FunctionFragment;
    "getBaseBattleOngoingDuration()": FunctionFragment;
    "getBaseTileMovingTime(uint256)": FunctionFragment;
    "getBuildingTokenTransferThresholdPercent()": FunctionFragment;
    "getBuildings()": FunctionFragment;
    "getDemilitarizationProsperityByUnit(string)": FunctionFragment;
    "getGlobalMultiplier()": FunctionFragment;
    "getMaxLiquidationCountdown()": FunctionFragment;
    "getMaxOccultistsPerZone()": FunctionFragment;
    "getMaxSettlementPerZone()": FunctionFragment;
    "getOccultistUnitName()": FunctionFragment;
    "getOccultistsNoDestructionDelay()": FunctionFragment;
    "getOccultistsPerZoneMultiplier()": FunctionFragment;
    "getOccultistsSummonDelay()": FunctionFragment;
    "getRepayPercent()": FunctionFragment;
    "getResourceDifficulty(string)": FunctionFragment;
    "getResourceWeight(string)": FunctionFragment;
    "getResources()": FunctionFragment;
    "getRobberyFee()": FunctionFragment;
    "getSiegePointsToResourceMultiplier(string)": FunctionFragment;
    "getSiegePowerToSiegePointsMultiplier()": FunctionFragment;
    "getToReservePercent()": FunctionFragment;
    "getToxicityByResource(string)": FunctionFragment;
    "getUnitAmmMultiplier(string)": FunctionFragment;
    "getUnitHiringFortificationHpMultiplier()": FunctionFragment;
    "getUnitMaxFoodToSpendOnMove(string)": FunctionFragment;
    "getUnits()": FunctionFragment;
    "getWorkerCapacityCoefficient(string)": FunctionFragment;
    "hasStartingTreasury(string)": FunctionFragment;
    "init()": FunctionFragment;
    "isFactoryContract(address)": FunctionFragment;
    "mightyCreator()": FunctionFragment;
    "noWoodInUpgradeLvl()": FunctionFragment;
    "offchainCallerPenalty(address)": FunctionFragment;
    "scriptContracts(bytes32)": FunctionFragment;
    "setFactoryContract(bytes32,address)": FunctionFragment;
    "setScriptContractName(string,string,address)": FunctionFragment;
    "setUnitStats(string,(uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "unitsStats(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "copperInUpgradeLvl"
      | "factoryContracts"
      | "getBaseBattleLobbyDuration"
      | "getBaseBattleOngoingDuration"
      | "getBaseTileMovingTime"
      | "getBuildingTokenTransferThresholdPercent"
      | "getBuildings"
      | "getDemilitarizationProsperityByUnit"
      | "getGlobalMultiplier"
      | "getMaxLiquidationCountdown"
      | "getMaxOccultistsPerZone"
      | "getMaxSettlementPerZone"
      | "getOccultistUnitName"
      | "getOccultistsNoDestructionDelay"
      | "getOccultistsPerZoneMultiplier"
      | "getOccultistsSummonDelay"
      | "getRepayPercent"
      | "getResourceDifficulty"
      | "getResourceWeight"
      | "getResources"
      | "getRobberyFee"
      | "getSiegePointsToResourceMultiplier"
      | "getSiegePowerToSiegePointsMultiplier"
      | "getToReservePercent"
      | "getToxicityByResource"
      | "getUnitAmmMultiplier"
      | "getUnitHiringFortificationHpMultiplier"
      | "getUnitMaxFoodToSpendOnMove"
      | "getUnits"
      | "getWorkerCapacityCoefficient"
      | "hasStartingTreasury"
      | "init"
      | "isFactoryContract"
      | "mightyCreator"
      | "noWoodInUpgradeLvl"
      | "offchainCallerPenalty"
      | "scriptContracts"
      | "setFactoryContract"
      | "setScriptContractName"
      | "setUnitStats"
      | "unitsStats"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "copperInUpgradeLvl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "factoryContracts",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseBattleLobbyDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseBattleOngoingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseTileMovingTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuildingTokenTransferThresholdPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBuildings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDemilitarizationProsperityByUnit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxLiquidationCountdown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxOccultistsPerZone",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxSettlementPerZone",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOccultistUnitName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOccultistsNoDestructionDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOccultistsPerZoneMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOccultistsSummonDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRepayPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getResourceDifficulty",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getResourceWeight",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getResources",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRobberyFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSiegePointsToResourceMultiplier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSiegePowerToSiegePointsMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getToReservePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getToxicityByResource",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitAmmMultiplier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitHiringFortificationHpMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnitMaxFoodToSpendOnMove",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getUnits", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getWorkerCapacityCoefficient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasStartingTreasury",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isFactoryContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mightyCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "noWoodInUpgradeLvl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offchainCallerPenalty",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "scriptContracts",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFactoryContract",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setScriptContractName",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnitStats",
    values: [string, IRegistry.UnitStatsStruct]
  ): string;
  encodeFunctionData(functionFragment: "unitsStats", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "copperInUpgradeLvl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "factoryContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBaseBattleLobbyDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBaseBattleOngoingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBaseTileMovingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuildingTokenTransferThresholdPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuildings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDemilitarizationProsperityByUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxLiquidationCountdown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxOccultistsPerZone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxSettlementPerZone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOccultistUnitName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOccultistsNoDestructionDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOccultistsPerZoneMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOccultistsSummonDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRepayPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResourceDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResourceWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRobberyFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSiegePointsToResourceMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSiegePowerToSiegePointsMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getToReservePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getToxicityByResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitAmmMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitHiringFortificationHpMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnitMaxFoodToSpendOnMove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUnits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWorkerCapacityCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasStartingTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFactoryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mightyCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "noWoodInUpgradeLvl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offchainCallerPenalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scriptContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFactoryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setScriptContractName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUnitStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unitsStats", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistryInterface;

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
    copperInUpgradeLvl(overrides?: CallOverrides): Promise<[BigNumber]>;

    factoryContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBaseBattleLobbyDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBaseBattleOngoingDuration(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBaseTileMovingTime(
      tileType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBuildingTokenTransferThresholdPercent(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBuildings(overrides?: CallOverrides): Promise<[string[]]>;

    getDemilitarizationProsperityByUnit(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGlobalMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxLiquidationCountdown(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxOccultistsPerZone(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxSettlementPerZone(overrides?: CallOverrides): Promise<[BigNumber]>;

    getOccultistUnitName(overrides?: CallOverrides): Promise<[string]>;

    getOccultistsNoDestructionDelay(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOccultistsPerZoneMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOccultistsSummonDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRepayPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    getResourceDifficulty(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getResourceWeight(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getResources(overrides?: CallOverrides): Promise<[string[]]>;

    getRobberyFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSiegePointsToResourceMultiplier(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSiegePowerToSiegePointsMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getToReservePercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    getToxicityByResource(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnitAmmMultiplier(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnitHiringFortificationHpMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnitMaxFoodToSpendOnMove(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnits(overrides?: CallOverrides): Promise<[string[]]>;

    getWorkerCapacityCoefficient(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasStartingTreasury(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isFactoryContract(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mightyCreator(overrides?: CallOverrides): Promise<[string]>;

    noWoodInUpgradeLvl(overrides?: CallOverrides): Promise<[BigNumber]>;

    offchainCallerPenalty(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    scriptContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setFactoryContract(
      id: BytesLike,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setScriptContractName(
      groupName: string,
      name: string,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUnitStats(
      unitName: string,
      _unitStats: IRegistry.UnitStatsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unitsStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        weaponPowerStage1: BigNumber;
        armourPowerStage1: BigNumber;
        weaponPowerStage2: BigNumber;
        armourPowerStage2: BigNumber;
        siegePower: BigNumber;
        siegeMaxSupply: BigNumber;
        siegeSupport: BigNumber;
      }
    >;
  };

  copperInUpgradeLvl(overrides?: CallOverrides): Promise<BigNumber>;

  factoryContracts(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  getBaseBattleLobbyDuration(overrides?: CallOverrides): Promise<BigNumber>;

  getBaseBattleOngoingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  getBaseTileMovingTime(
    tileType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBuildingTokenTransferThresholdPercent(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBuildings(overrides?: CallOverrides): Promise<string[]>;

  getDemilitarizationProsperityByUnit(
    unitName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGlobalMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxLiquidationCountdown(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxOccultistsPerZone(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxSettlementPerZone(overrides?: CallOverrides): Promise<BigNumber>;

  getOccultistUnitName(overrides?: CallOverrides): Promise<string>;

  getOccultistsNoDestructionDelay(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOccultistsPerZoneMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  getOccultistsSummonDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getRepayPercent(overrides?: CallOverrides): Promise<BigNumber>;

  getResourceDifficulty(
    resourceName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getResourceWeight(
    resourceName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getResources(overrides?: CallOverrides): Promise<string[]>;

  getRobberyFee(overrides?: CallOverrides): Promise<BigNumber>;

  getSiegePointsToResourceMultiplier(
    resourceName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSiegePowerToSiegePointsMultiplier(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getToReservePercent(overrides?: CallOverrides): Promise<BigNumber>;

  getToxicityByResource(
    resourceName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnitAmmMultiplier(
    unitName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnitHiringFortificationHpMultiplier(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnitMaxFoodToSpendOnMove(
    unitName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnits(overrides?: CallOverrides): Promise<string[]>;

  getWorkerCapacityCoefficient(
    buildingName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasStartingTreasury(
    buildingName: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isFactoryContract(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  mightyCreator(overrides?: CallOverrides): Promise<string>;

  noWoodInUpgradeLvl(overrides?: CallOverrides): Promise<BigNumber>;

  offchainCallerPenalty(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  scriptContracts(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  setFactoryContract(
    id: BytesLike,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setScriptContractName(
    groupName: string,
    name: string,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUnitStats(
    unitName: string,
    _unitStats: IRegistry.UnitStatsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unitsStats(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      weaponPowerStage1: BigNumber;
      armourPowerStage1: BigNumber;
      weaponPowerStage2: BigNumber;
      armourPowerStage2: BigNumber;
      siegePower: BigNumber;
      siegeMaxSupply: BigNumber;
      siegeSupport: BigNumber;
    }
  >;

  callStatic: {
    copperInUpgradeLvl(overrides?: CallOverrides): Promise<BigNumber>;

    factoryContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getBaseBattleLobbyDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getBaseBattleOngoingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getBaseTileMovingTime(
      tileType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuildingTokenTransferThresholdPercent(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuildings(overrides?: CallOverrides): Promise<string[]>;

    getDemilitarizationProsperityByUnit(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGlobalMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxLiquidationCountdown(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxOccultistsPerZone(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxSettlementPerZone(overrides?: CallOverrides): Promise<BigNumber>;

    getOccultistUnitName(overrides?: CallOverrides): Promise<string>;

    getOccultistsNoDestructionDelay(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOccultistsPerZoneMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOccultistsSummonDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getRepayPercent(overrides?: CallOverrides): Promise<BigNumber>;

    getResourceDifficulty(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getResourceWeight(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getResources(overrides?: CallOverrides): Promise<string[]>;

    getRobberyFee(overrides?: CallOverrides): Promise<BigNumber>;

    getSiegePointsToResourceMultiplier(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSiegePowerToSiegePointsMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToReservePercent(overrides?: CallOverrides): Promise<BigNumber>;

    getToxicityByResource(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnitAmmMultiplier(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnitHiringFortificationHpMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnitMaxFoodToSpendOnMove(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnits(overrides?: CallOverrides): Promise<string[]>;

    getWorkerCapacityCoefficient(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasStartingTreasury(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    init(overrides?: CallOverrides): Promise<void>;

    isFactoryContract(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mightyCreator(overrides?: CallOverrides): Promise<string>;

    noWoodInUpgradeLvl(overrides?: CallOverrides): Promise<BigNumber>;

    offchainCallerPenalty(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    scriptContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setFactoryContract(
      id: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setScriptContractName(
      groupName: string,
      name: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUnitStats(
      unitName: string,
      _unitStats: IRegistry.UnitStatsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    unitsStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        weaponPowerStage1: BigNumber;
        armourPowerStage1: BigNumber;
        weaponPowerStage2: BigNumber;
        armourPowerStage2: BigNumber;
        siegePower: BigNumber;
        siegeMaxSupply: BigNumber;
        siegeSupport: BigNumber;
      }
    >;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    copperInUpgradeLvl(overrides?: CallOverrides): Promise<BigNumber>;

    factoryContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBaseBattleLobbyDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getBaseBattleOngoingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getBaseTileMovingTime(
      tileType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuildingTokenTransferThresholdPercent(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuildings(overrides?: CallOverrides): Promise<BigNumber>;

    getDemilitarizationProsperityByUnit(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGlobalMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxLiquidationCountdown(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxOccultistsPerZone(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxSettlementPerZone(overrides?: CallOverrides): Promise<BigNumber>;

    getOccultistUnitName(overrides?: CallOverrides): Promise<BigNumber>;

    getOccultistsNoDestructionDelay(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOccultistsPerZoneMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOccultistsSummonDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getRepayPercent(overrides?: CallOverrides): Promise<BigNumber>;

    getResourceDifficulty(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getResourceWeight(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getResources(overrides?: CallOverrides): Promise<BigNumber>;

    getRobberyFee(overrides?: CallOverrides): Promise<BigNumber>;

    getSiegePointsToResourceMultiplier(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSiegePowerToSiegePointsMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToReservePercent(overrides?: CallOverrides): Promise<BigNumber>;

    getToxicityByResource(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnitAmmMultiplier(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnitHiringFortificationHpMultiplier(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnitMaxFoodToSpendOnMove(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnits(overrides?: CallOverrides): Promise<BigNumber>;

    getWorkerCapacityCoefficient(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasStartingTreasury(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isFactoryContract(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mightyCreator(overrides?: CallOverrides): Promise<BigNumber>;

    noWoodInUpgradeLvl(overrides?: CallOverrides): Promise<BigNumber>;

    offchainCallerPenalty(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    scriptContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFactoryContract(
      id: BytesLike,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setScriptContractName(
      groupName: string,
      name: string,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUnitStats(
      unitName: string,
      _unitStats: IRegistry.UnitStatsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unitsStats(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    copperInUpgradeLvl(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factoryContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBaseBattleLobbyDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBaseBattleOngoingDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBaseTileMovingTime(
      tileType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBuildingTokenTransferThresholdPercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBuildings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDemilitarizationProsperityByUnit(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGlobalMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxLiquidationCountdown(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxOccultistsPerZone(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxSettlementPerZone(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOccultistUnitName(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOccultistsNoDestructionDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOccultistsPerZoneMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOccultistsSummonDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRepayPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getResourceDifficulty(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getResourceWeight(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getResources(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRobberyFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSiegePointsToResourceMultiplier(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSiegePowerToSiegePointsMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToReservePercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToxicityByResource(
      resourceName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnitAmmMultiplier(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnitHiringFortificationHpMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnitMaxFoodToSpendOnMove(
      unitName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWorkerCapacityCoefficient(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasStartingTreasury(
      buildingName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isFactoryContract(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mightyCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    noWoodInUpgradeLvl(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offchainCallerPenalty(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    scriptContracts(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFactoryContract(
      id: BytesLike,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setScriptContractName(
      groupName: string,
      name: string,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUnitStats(
      unitName: string,
      _unitStats: IRegistry.UnitStatsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unitsStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

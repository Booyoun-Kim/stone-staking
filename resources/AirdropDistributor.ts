/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type AirdropInfoStruct = {
  amount0: BigNumberish;
  amount1: BigNumberish;
  startTime: BigNumberish;
};

export type AirdropInfoStructOutput = [BigNumber, BigNumber, BigNumber] & {
  amount0: BigNumber;
  amount1: BigNumber;
  startTime: BigNumber;
};

export interface AirdropDistributorInterface extends utils.Interface {
  functions: {
    "PERIOD()": FunctionFragment;
    "airdrop(address)": FunctionFragment;
    "airdropAll()": FunctionFragment;
    "airdropList(address[])": FunctionFragment;
    "airdropPool(uint256)": FunctionFragment;
    "airdropPoolLength()": FunctionFragment;
    "airdropSnapshot(address,uint256)": FunctionFragment;
    "airdropSnapshotLength(address)": FunctionFragment;
    "depositKlay(address)": FunctionFragment;
    "depositToken(address,address,uint128)": FunctionFragment;
    "depositedAirdrop(address)": FunctionFragment;
    "epochStartTime()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "masterDeployer()": FunctionFragment;
    "nextEpochStartTime()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
  encodeFunctionData(functionFragment: "airdrop", values: [string]): string;
  encodeFunctionData(
    functionFragment: "airdropAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "airdropList",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropPoolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "airdropSnapshot",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropSnapshotLength",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "depositKlay", values: [string]): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositedAirdrop",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "epochStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "masterDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextEpochStartTime",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "airdropAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "airdropList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropPoolLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropSnapshotLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositKlay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositedAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "masterDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochStartTime",
    data: BytesLike
  ): Result;

  events: {
    "Airdrop(address,address,address,uint128,uint128,uint256,uint256)": EventFragment;
    "Deposit(address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Airdrop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
}

export type AirdropEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    pool: string;
    token0: string;
    token1: string;
    amount0: BigNumber;
    amount1: BigNumber;
    startTime: BigNumber;
    period: BigNumber;
  }
>;

export type AirdropEventFilter = TypedEventFilter<AirdropEvent>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, string],
  { pool: string; token: string; amount: BigNumber; depositor: string }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface AirdropDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AirdropDistributorInterface;

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
    PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    airdrop(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    airdropAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    airdropList(
      pools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    airdropPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    airdropPoolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    airdropSnapshot(
      pool: string,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [AirdropInfoStructOutput] & { snapshot: AirdropInfoStructOutput }
    >;

    airdropSnapshotLength(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { length: BigNumber }>;

    depositKlay(
      pool: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositToken(
      pool: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositedAirdrop(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[AirdropInfoStructOutput]>;

    epochStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _masterDeployer: string,
      _WKLAY: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    masterDeployer(overrides?: CallOverrides): Promise<[string]>;

    nextEpochStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  airdrop(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  airdropAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  airdropList(
    pools: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  airdropPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  airdropPoolLength(overrides?: CallOverrides): Promise<BigNumber>;

  airdropSnapshot(
    pool: string,
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<AirdropInfoStructOutput>;

  airdropSnapshotLength(
    pool: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositKlay(
    pool: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositToken(
    pool: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositedAirdrop(
    pool: string,
    overrides?: CallOverrides
  ): Promise<AirdropInfoStructOutput>;

  epochStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _masterDeployer: string,
    _WKLAY: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  masterDeployer(overrides?: CallOverrides): Promise<string>;

  nextEpochStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    airdrop(pool: string, overrides?: CallOverrides): Promise<void>;

    airdropAll(overrides?: CallOverrides): Promise<void>;

    airdropList(pools: string[], overrides?: CallOverrides): Promise<void>;

    airdropPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    airdropPoolLength(overrides?: CallOverrides): Promise<BigNumber>;

    airdropSnapshot(
      pool: string,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<AirdropInfoStructOutput>;

    airdropSnapshotLength(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositKlay(pool: string, overrides?: CallOverrides): Promise<void>;

    depositToken(
      pool: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositedAirdrop(
      pool: string,
      overrides?: CallOverrides
    ): Promise<AirdropInfoStructOutput>;

    epochStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _masterDeployer: string,
      _WKLAY: string,
      overrides?: CallOverrides
    ): Promise<void>;

    masterDeployer(overrides?: CallOverrides): Promise<string>;

    nextEpochStartTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Airdrop(address,address,address,uint128,uint128,uint256,uint256)"(
      pool?: string | null,
      token0?: null,
      token1?: null,
      amount0?: null,
      amount1?: null,
      startTime?: null,
      period?: null
    ): AirdropEventFilter;
    Airdrop(
      pool?: string | null,
      token0?: null,
      token1?: null,
      amount0?: null,
      amount1?: null,
      startTime?: null,
      period?: null
    ): AirdropEventFilter;

    "Deposit(address,address,uint256,address)"(
      pool?: string | null,
      token?: null,
      amount?: null,
      depositor?: null
    ): DepositEventFilter;
    Deposit(
      pool?: string | null,
      token?: null,
      amount?: null,
      depositor?: null
    ): DepositEventFilter;
  };

  estimateGas: {
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    airdrop(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    airdropAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    airdropList(
      pools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    airdropPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    airdropPoolLength(overrides?: CallOverrides): Promise<BigNumber>;

    airdropSnapshot(
      pool: string,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    airdropSnapshotLength(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositKlay(
      pool: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositToken(
      pool: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositedAirdrop(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _masterDeployer: string,
      _WKLAY: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    masterDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochStartTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    airdrop(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    airdropAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    airdropList(
      pools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    airdropPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    airdropPoolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    airdropSnapshot(
      pool: string,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    airdropSnapshotLength(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositKlay(
      pool: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositToken(
      pool: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositedAirdrop(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _masterDeployer: string,
      _WKLAY: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    masterDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextEpochStartTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
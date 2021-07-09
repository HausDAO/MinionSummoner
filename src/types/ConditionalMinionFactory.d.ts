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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ConditionalMinionFactoryInterface extends ethers.utils.Interface {
  functions: {
    "minionList(uint256)": FunctionFragment;
    "minions(address)": FunctionFragment;
    "summonMinion(address,string)": FunctionFragment;
    "template()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "minionList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minions", values: [string]): string;
  encodeFunctionData(
    functionFragment: "summonMinion",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "template", values?: undefined): string;

  decodeFunctionResult(functionFragment: "minionList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "summonMinion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "template", data: BytesLike): Result;

  events: {
    "SummonMinion(address,address,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SummonMinion"): EventFragment;
}

export class ConditionalMinionFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ConditionalMinionFactoryInterface;

  functions: {
    minionList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "minionList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    minions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      moloch: string;
      details: string;
      0: string;
      1: string;
    }>;

    "minions(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      moloch: string;
      details: string;
      0: string;
      1: string;
    }>;

    summonMinion(
      moloch: string,
      details: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "summonMinion(address,string)"(
      moloch: string,
      details: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    template(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "template()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  minionList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "minionList(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  minions(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    moloch: string;
    details: string;
    0: string;
    1: string;
  }>;

  "minions(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    moloch: string;
    details: string;
    0: string;
    1: string;
  }>;

  summonMinion(
    moloch: string,
    details: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "summonMinion(address,string)"(
    moloch: string,
    details: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  template(overrides?: CallOverrides): Promise<string>;

  "template()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    minionList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "minionList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    minions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      moloch: string;
      details: string;
      0: string;
      1: string;
    }>;

    "minions(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      moloch: string;
      details: string;
      0: string;
      1: string;
    }>;

    summonMinion(
      moloch: string,
      details: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "summonMinion(address,string)"(
      moloch: string,
      details: string,
      overrides?: CallOverrides
    ): Promise<string>;

    template(overrides?: CallOverrides): Promise<string>;

    "template()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    SummonMinion(
      minion: string | null,
      moloch: string | null,
      details: null,
      minionType: null
    ): EventFilter;
  };

  estimateGas: {
    minionList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "minionList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "minions(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    summonMinion(
      moloch: string,
      details: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "summonMinion(address,string)"(
      moloch: string,
      details: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    template(overrides?: CallOverrides): Promise<BigNumber>;

    "template()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    minionList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minionList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minions(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    summonMinion(
      moloch: string,
      details: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "summonMinion(address,string)"(
      moloch: string,
      details: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    template(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "template()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

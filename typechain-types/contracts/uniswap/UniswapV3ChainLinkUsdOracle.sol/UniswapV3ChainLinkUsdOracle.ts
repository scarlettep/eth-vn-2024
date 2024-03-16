/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface UniswapV3ChainLinkUsdOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "doInitialize"
      | "getLatestPrice"
      | "getNFTAmounts"
      | "getTWAPQuoteNft"
      | "getTokenQuotePrice"
      | "governance"
      | "nonfungiblePositionManager"
      | "setGovernance"
      | "setTokenRefFeed"
      | "tokenRefFeed"
      | "uniswapV3Factory"
      | "usdDefaultDecimals"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "GovernanceTransferred" | "SetTokenRefFeedEvent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "doInitialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTAmounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTWAPQuoteNft",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenQuotePrice",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonfungiblePositionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenRefFeed",
    values: [AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenRefFeed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3Factory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdDefaultDecimals",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "doInitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTWAPQuoteNft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenQuotePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nonfungiblePositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenRefFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenRefFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3Factory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdDefaultDecimals",
    data: BytesLike
  ): Result;
}

export namespace GovernanceTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetTokenRefFeedEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    _tokens: AddressLike[],
    _feedAddr: AddressLike[]
  ];
  export type OutputTuple = [
    sender: string,
    _tokens: string[],
    _feedAddr: string[]
  ];
  export interface OutputObject {
    sender: string;
    _tokens: string[];
    _feedAddr: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UniswapV3ChainLinkUsdOracle extends BaseContract {
  connect(runner?: ContractRunner | null): UniswapV3ChainLinkUsdOracle;
  waitForDeployment(): Promise<this>;

  interface: UniswapV3ChainLinkUsdOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  doInitialize: TypedContractMethod<
    [_nonfungiblePositionManager: AddressLike],
    [void],
    "nonpayable"
  >;

  getLatestPrice: TypedContractMethod<
    [_token: AddressLike],
    [[bigint, bigint] & { _answer: bigint; _decimals: bigint }],
    "view"
  >;

  getNFTAmounts: TypedContractMethod<
    [_tokenId: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        _token0: string;
        _token1: string;
        _fee: bigint;
        _amount0: bigint;
        _amount1: bigint;
      }
    ],
    "view"
  >;

  getTWAPQuoteNft: TypedContractMethod<
    [_tokenId: BigNumberish, _quoteToken: AddressLike],
    [[bigint, bigint] & { _quoteAmount: bigint; _gasEstimate: bigint }],
    "view"
  >;

  getTokenQuotePrice: TypedContractMethod<
    [_token: AddressLike, _quoteToken: AddressLike],
    [[bigint, bigint] & { _quotePrice: bigint; _gasEstimate: bigint }],
    "view"
  >;

  governance: TypedContractMethod<[], [string], "view">;

  nonfungiblePositionManager: TypedContractMethod<[], [string], "view">;

  setGovernance: TypedContractMethod<
    [_governance: AddressLike],
    [void],
    "nonpayable"
  >;

  setTokenRefFeed: TypedContractMethod<
    [_tokens: AddressLike[], _feedAddr: AddressLike[]],
    [void],
    "nonpayable"
  >;

  tokenRefFeed: TypedContractMethod<
    [arg0: AddressLike],
    [[string, bigint] & { priceFeed: string; decimals: bigint }],
    "view"
  >;

  uniswapV3Factory: TypedContractMethod<[], [string], "view">;

  usdDefaultDecimals: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "doInitialize"
  ): TypedContractMethod<
    [_nonfungiblePositionManager: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getLatestPrice"
  ): TypedContractMethod<
    [_token: AddressLike],
    [[bigint, bigint] & { _answer: bigint; _decimals: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNFTAmounts"
  ): TypedContractMethod<
    [_tokenId: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        _token0: string;
        _token1: string;
        _fee: bigint;
        _amount0: bigint;
        _amount1: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTWAPQuoteNft"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _quoteToken: AddressLike],
    [[bigint, bigint] & { _quoteAmount: bigint; _gasEstimate: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenQuotePrice"
  ): TypedContractMethod<
    [_token: AddressLike, _quoteToken: AddressLike],
    [[bigint, bigint] & { _quotePrice: bigint; _gasEstimate: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "governance"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonfungiblePositionManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setGovernance"
  ): TypedContractMethod<[_governance: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTokenRefFeed"
  ): TypedContractMethod<
    [_tokens: AddressLike[], _feedAddr: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tokenRefFeed"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[string, bigint] & { priceFeed: string; decimals: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "uniswapV3Factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "usdDefaultDecimals"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "GovernanceTransferred"
  ): TypedContractEvent<
    GovernanceTransferredEvent.InputTuple,
    GovernanceTransferredEvent.OutputTuple,
    GovernanceTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SetTokenRefFeedEvent"
  ): TypedContractEvent<
    SetTokenRefFeedEventEvent.InputTuple,
    SetTokenRefFeedEventEvent.OutputTuple,
    SetTokenRefFeedEventEvent.OutputObject
  >;

  filters: {
    "GovernanceTransferred(address,address)": TypedContractEvent<
      GovernanceTransferredEvent.InputTuple,
      GovernanceTransferredEvent.OutputTuple,
      GovernanceTransferredEvent.OutputObject
    >;
    GovernanceTransferred: TypedContractEvent<
      GovernanceTransferredEvent.InputTuple,
      GovernanceTransferredEvent.OutputTuple,
      GovernanceTransferredEvent.OutputObject
    >;

    "SetTokenRefFeedEvent(address,address[],address[])": TypedContractEvent<
      SetTokenRefFeedEventEvent.InputTuple,
      SetTokenRefFeedEventEvent.OutputTuple,
      SetTokenRefFeedEventEvent.OutputObject
    >;
    SetTokenRefFeedEvent: TypedContractEvent<
      SetTokenRefFeedEventEvent.InputTuple,
      SetTokenRefFeedEventEvent.OutputTuple,
      SetTokenRefFeedEventEvent.OutputObject
    >;
  };
}
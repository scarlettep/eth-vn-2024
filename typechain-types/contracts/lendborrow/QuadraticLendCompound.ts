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
} from "../../common";

export interface QuadraticLendCompoundInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addPool"
      | "authContractAccessMap"
      | "borrowCompound"
      | "doAfterLpTransfer"
      | "doInitialize"
      | "funder"
      | "funderClaim"
      | "funderPoolInterest"
      | "getLendPoolIdsOfOwner"
      | "getPoolLength"
      | "interestPlatformRate"
      | "lendPoolInfo"
      | "lendUserInfos"
      | "loanTransferToken"
      | "maxBorrowRate"
      | "pendingRedeemInterests"
      | "repayTransferToken"
      | "setAuthContractAccess"
      | "setFunder"
      | "setInterestPlatformRate"
      | "setMaxBorrowRate"
      | "settlementRepayTransferToken"
      | "spTokenOfPid"
      | "tokenOfPid"
      | "transferToAuctionUpBorrow"
      | "userLend"
      | "userRedeem"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddPoolEvent"
      | "DoAfterLpTransferEvent"
      | "FunderClaimEvent"
      | "Initialized"
      | "LoanTransferTokenEvent"
      | "PausePoolEvent"
      | "RepayTransferTokenEvent"
      | "SetAuthContractAccessEvent"
      | "SetFunderEvent"
      | "SetInterestPlatformRateEvent"
      | "SetMaxBorrowRateEvent"
      | "SettlementRepayTransferTokenEvent"
      | "TransferToAuctionUpBorrowEvent"
      | "UserLend"
      | "UserRedeem"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addPool",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "authContractAccessMap",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowCompound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "doAfterLpTransfer",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "doInitialize",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "funder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "funderClaim",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "funderPoolInterest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendPoolIdsOfOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestPlatformRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendPoolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lendUserInfos",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "loanTransferToken",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxBorrowRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRedeemInterests",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "repayTransferToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthContractAccess",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setFunder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestPlatformRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxBorrowRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementRepayTransferToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "spTokenOfPid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfPid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToAuctionUpBorrow",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userLend",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userRedeem",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authContractAccessMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowCompound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doAfterLpTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doInitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "funder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "funderClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "funderPoolInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendPoolIdsOfOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestPlatformRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendPoolInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendUserInfos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loanTransferToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRedeemInterests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayTransferToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthContractAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFunder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInterestPlatformRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementRepayTransferToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spTokenOfPid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenOfPid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferToAuctionUpBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userLend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userRedeem", data: BytesLike): Result;
}

export namespace AddPoolEventEvent {
  export type InputTuple = [
    user: AddressLike,
    token: AddressLike,
    allocpoint: BigNumberish,
    withUpdate: boolean
  ];
  export type OutputTuple = [
    user: string,
    token: string,
    allocpoint: bigint,
    withUpdate: boolean
  ];
  export interface OutputObject {
    user: string;
    token: string;
    allocpoint: bigint;
    withUpdate: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DoAfterLpTransferEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    recipient: AddressLike,
    spToken: AddressLike,
    amount: BigNumberish,
    interests: BigNumberish,
    platFormInterests: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    recipient: string,
    spToken: string,
    amount: bigint,
    interests: bigint,
    platFormInterests: bigint
  ];
  export interface OutputObject {
    sender: string;
    recipient: string;
    spToken: string;
    amount: bigint;
    interests: bigint;
    platFormInterests: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FunderClaimEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LoanTransferTokenEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    toUser: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    toUser: string,
    pid: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    sender: string;
    toUser: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausePoolEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    pid: BigNumberish,
    flag: boolean
  ];
  export type OutputTuple = [sender: string, pid: bigint, flag: boolean];
  export interface OutputObject {
    sender: string;
    pid: bigint;
    flag: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RepayTransferTokenEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetAuthContractAccessEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    contractAddr: AddressLike,
    flag: boolean
  ];
  export type OutputTuple = [
    sender: string,
    contractAddr: string,
    flag: boolean
  ];
  export interface OutputObject {
    sender: string;
    contractAddr: string;
    flag: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetFunderEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    beforeVal: AddressLike,
    afterVal: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    beforeVal: string,
    afterVal: string
  ];
  export interface OutputObject {
    sender: string;
    beforeVal: string;
    afterVal: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetInterestPlatformRateEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    beforeValue: BigNumberish,
    afterValue: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    beforeValue: bigint,
    afterValue: bigint
  ];
  export interface OutputObject {
    sender: string;
    beforeValue: bigint;
    afterValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetMaxBorrowRateEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    beforeRate: BigNumberish,
    afterRate: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    beforeRate: bigint,
    afterRate: bigint
  ];
  export interface OutputObject {
    sender: string;
    beforeRate: bigint;
    afterRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SettlementRepayTransferTokenEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferToAuctionUpBorrowEventEvent {
  export type InputTuple = [
    sender: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserLendEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserRedeemEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish,
    interests: BigNumberish,
    platFormInterests: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    pid: bigint,
    amount: bigint,
    interests: bigint,
    platFormInterests: bigint
  ];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
    interests: bigint;
    platFormInterests: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface QuadraticLendCompound extends BaseContract {
  connect(runner?: ContractRunner | null): QuadraticLendCompound;
  waitForDeployment(): Promise<this>;

  interface: QuadraticLendCompoundInterface;

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

  addPool: TypedContractMethod<
    [_token: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  authContractAccessMap: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  borrowCompound: TypedContractMethod<[], [string], "view">;

  doAfterLpTransfer: TypedContractMethod<
    [
      spToken: AddressLike,
      sender: AddressLike,
      recipient: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  doInitialize: TypedContractMethod<
    [
      _borrowCompound: AddressLike,
      _maxBorrowRate: BigNumberish,
      _interestPlatformRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  funder: TypedContractMethod<[], [string], "view">;

  funderClaim: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  funderPoolInterest: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  getLendPoolIdsOfOwner: TypedContractMethod<
    [owner: AddressLike],
    [bigint[]],
    "view"
  >;

  getPoolLength: TypedContractMethod<[], [bigint], "view">;

  interestPlatformRate: TypedContractMethod<[], [bigint], "view">;

  lendPoolInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        token: string;
        spToken: string;
        curSupply: bigint;
        curBorrow: bigint;
        totalRecvInterests: bigint;
      }
    ],
    "view"
  >;

  lendUserInfos: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        lastLendInterestShare: bigint;
        unRecvInterests: bigint;
        currTotalLend: bigint;
        userDli: bigint;
      }
    ],
    "view"
  >;

  loanTransferToken: TypedContractMethod<
    [pid: BigNumberish, toUser: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  maxBorrowRate: TypedContractMethod<[], [bigint], "view">;

  pendingRedeemInterests: TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [[bigint, bigint] & { _lendInterests: bigint; _platFormInterests: bigint }],
    "view"
  >;

  repayTransferToken: TypedContractMethod<
    [pid: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setAuthContractAccess: TypedContractMethod<
    [_contractAddr: AddressLike, _flag: boolean],
    [void],
    "nonpayable"
  >;

  setFunder: TypedContractMethod<[_funder: AddressLike], [void], "nonpayable">;

  setInterestPlatformRate: TypedContractMethod<
    [_interestPlatformRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxBorrowRate: TypedContractMethod<
    [_maxBorrowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  settlementRepayTransferToken: TypedContractMethod<
    [pid: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  spTokenOfPid: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  tokenOfPid: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  transferToAuctionUpBorrow: TypedContractMethod<
    [pid: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  userLend: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  userRedeem: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addPool"
  ): TypedContractMethod<
    [_token: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "authContractAccessMap"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "borrowCompound"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "doAfterLpTransfer"
  ): TypedContractMethod<
    [
      spToken: AddressLike,
      sender: AddressLike,
      recipient: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "doInitialize"
  ): TypedContractMethod<
    [
      _borrowCompound: AddressLike,
      _maxBorrowRate: BigNumberish,
      _interestPlatformRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "funder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "funderClaim"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "funderPoolInterest"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLendPoolIdsOfOwner"
  ): TypedContractMethod<[owner: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getPoolLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "interestPlatformRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lendPoolInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        token: string;
        spToken: string;
        curSupply: bigint;
        curBorrow: bigint;
        totalRecvInterests: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "lendUserInfos"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        lastLendInterestShare: bigint;
        unRecvInterests: bigint;
        currTotalLend: bigint;
        userDli: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "loanTransferToken"
  ): TypedContractMethod<
    [pid: BigNumberish, toUser: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "maxBorrowRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingRedeemInterests"
  ): TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [[bigint, bigint] & { _lendInterests: bigint; _platFormInterests: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "repayTransferToken"
  ): TypedContractMethod<
    [pid: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAuthContractAccess"
  ): TypedContractMethod<
    [_contractAddr: AddressLike, _flag: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFunder"
  ): TypedContractMethod<[_funder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setInterestPlatformRate"
  ): TypedContractMethod<
    [_interestPlatformRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMaxBorrowRate"
  ): TypedContractMethod<[_maxBorrowRate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "settlementRepayTransferToken"
  ): TypedContractMethod<
    [pid: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "spTokenOfPid"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokenOfPid"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferToAuctionUpBorrow"
  ): TypedContractMethod<
    [pid: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "userLend"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "userRedeem"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "AddPoolEvent"
  ): TypedContractEvent<
    AddPoolEventEvent.InputTuple,
    AddPoolEventEvent.OutputTuple,
    AddPoolEventEvent.OutputObject
  >;
  getEvent(
    key: "DoAfterLpTransferEvent"
  ): TypedContractEvent<
    DoAfterLpTransferEventEvent.InputTuple,
    DoAfterLpTransferEventEvent.OutputTuple,
    DoAfterLpTransferEventEvent.OutputObject
  >;
  getEvent(
    key: "FunderClaimEvent"
  ): TypedContractEvent<
    FunderClaimEventEvent.InputTuple,
    FunderClaimEventEvent.OutputTuple,
    FunderClaimEventEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "LoanTransferTokenEvent"
  ): TypedContractEvent<
    LoanTransferTokenEventEvent.InputTuple,
    LoanTransferTokenEventEvent.OutputTuple,
    LoanTransferTokenEventEvent.OutputObject
  >;
  getEvent(
    key: "PausePoolEvent"
  ): TypedContractEvent<
    PausePoolEventEvent.InputTuple,
    PausePoolEventEvent.OutputTuple,
    PausePoolEventEvent.OutputObject
  >;
  getEvent(
    key: "RepayTransferTokenEvent"
  ): TypedContractEvent<
    RepayTransferTokenEventEvent.InputTuple,
    RepayTransferTokenEventEvent.OutputTuple,
    RepayTransferTokenEventEvent.OutputObject
  >;
  getEvent(
    key: "SetAuthContractAccessEvent"
  ): TypedContractEvent<
    SetAuthContractAccessEventEvent.InputTuple,
    SetAuthContractAccessEventEvent.OutputTuple,
    SetAuthContractAccessEventEvent.OutputObject
  >;
  getEvent(
    key: "SetFunderEvent"
  ): TypedContractEvent<
    SetFunderEventEvent.InputTuple,
    SetFunderEventEvent.OutputTuple,
    SetFunderEventEvent.OutputObject
  >;
  getEvent(
    key: "SetInterestPlatformRateEvent"
  ): TypedContractEvent<
    SetInterestPlatformRateEventEvent.InputTuple,
    SetInterestPlatformRateEventEvent.OutputTuple,
    SetInterestPlatformRateEventEvent.OutputObject
  >;
  getEvent(
    key: "SetMaxBorrowRateEvent"
  ): TypedContractEvent<
    SetMaxBorrowRateEventEvent.InputTuple,
    SetMaxBorrowRateEventEvent.OutputTuple,
    SetMaxBorrowRateEventEvent.OutputObject
  >;
  getEvent(
    key: "SettlementRepayTransferTokenEvent"
  ): TypedContractEvent<
    SettlementRepayTransferTokenEventEvent.InputTuple,
    SettlementRepayTransferTokenEventEvent.OutputTuple,
    SettlementRepayTransferTokenEventEvent.OutputObject
  >;
  getEvent(
    key: "TransferToAuctionUpBorrowEvent"
  ): TypedContractEvent<
    TransferToAuctionUpBorrowEventEvent.InputTuple,
    TransferToAuctionUpBorrowEventEvent.OutputTuple,
    TransferToAuctionUpBorrowEventEvent.OutputObject
  >;
  getEvent(
    key: "UserLend"
  ): TypedContractEvent<
    UserLendEvent.InputTuple,
    UserLendEvent.OutputTuple,
    UserLendEvent.OutputObject
  >;
  getEvent(
    key: "UserRedeem"
  ): TypedContractEvent<
    UserRedeemEvent.InputTuple,
    UserRedeemEvent.OutputTuple,
    UserRedeemEvent.OutputObject
  >;

  filters: {
    "AddPoolEvent(address,address,uint256,bool)": TypedContractEvent<
      AddPoolEventEvent.InputTuple,
      AddPoolEventEvent.OutputTuple,
      AddPoolEventEvent.OutputObject
    >;
    AddPoolEvent: TypedContractEvent<
      AddPoolEventEvent.InputTuple,
      AddPoolEventEvent.OutputTuple,
      AddPoolEventEvent.OutputObject
    >;

    "DoAfterLpTransferEvent(address,address,address,uint256,uint256,uint256)": TypedContractEvent<
      DoAfterLpTransferEventEvent.InputTuple,
      DoAfterLpTransferEventEvent.OutputTuple,
      DoAfterLpTransferEventEvent.OutputObject
    >;
    DoAfterLpTransferEvent: TypedContractEvent<
      DoAfterLpTransferEventEvent.InputTuple,
      DoAfterLpTransferEventEvent.OutputTuple,
      DoAfterLpTransferEventEvent.OutputObject
    >;

    "FunderClaimEvent(address,uint256,uint256)": TypedContractEvent<
      FunderClaimEventEvent.InputTuple,
      FunderClaimEventEvent.OutputTuple,
      FunderClaimEventEvent.OutputObject
    >;
    FunderClaimEvent: TypedContractEvent<
      FunderClaimEventEvent.InputTuple,
      FunderClaimEventEvent.OutputTuple,
      FunderClaimEventEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "LoanTransferTokenEvent(address,address,uint256,uint256)": TypedContractEvent<
      LoanTransferTokenEventEvent.InputTuple,
      LoanTransferTokenEventEvent.OutputTuple,
      LoanTransferTokenEventEvent.OutputObject
    >;
    LoanTransferTokenEvent: TypedContractEvent<
      LoanTransferTokenEventEvent.InputTuple,
      LoanTransferTokenEventEvent.OutputTuple,
      LoanTransferTokenEventEvent.OutputObject
    >;

    "PausePoolEvent(address,uint256,bool)": TypedContractEvent<
      PausePoolEventEvent.InputTuple,
      PausePoolEventEvent.OutputTuple,
      PausePoolEventEvent.OutputObject
    >;
    PausePoolEvent: TypedContractEvent<
      PausePoolEventEvent.InputTuple,
      PausePoolEventEvent.OutputTuple,
      PausePoolEventEvent.OutputObject
    >;

    "RepayTransferTokenEvent(address,uint256,uint256)": TypedContractEvent<
      RepayTransferTokenEventEvent.InputTuple,
      RepayTransferTokenEventEvent.OutputTuple,
      RepayTransferTokenEventEvent.OutputObject
    >;
    RepayTransferTokenEvent: TypedContractEvent<
      RepayTransferTokenEventEvent.InputTuple,
      RepayTransferTokenEventEvent.OutputTuple,
      RepayTransferTokenEventEvent.OutputObject
    >;

    "SetAuthContractAccessEvent(address,address,bool)": TypedContractEvent<
      SetAuthContractAccessEventEvent.InputTuple,
      SetAuthContractAccessEventEvent.OutputTuple,
      SetAuthContractAccessEventEvent.OutputObject
    >;
    SetAuthContractAccessEvent: TypedContractEvent<
      SetAuthContractAccessEventEvent.InputTuple,
      SetAuthContractAccessEventEvent.OutputTuple,
      SetAuthContractAccessEventEvent.OutputObject
    >;

    "SetFunderEvent(address,address,address)": TypedContractEvent<
      SetFunderEventEvent.InputTuple,
      SetFunderEventEvent.OutputTuple,
      SetFunderEventEvent.OutputObject
    >;
    SetFunderEvent: TypedContractEvent<
      SetFunderEventEvent.InputTuple,
      SetFunderEventEvent.OutputTuple,
      SetFunderEventEvent.OutputObject
    >;

    "SetInterestPlatformRateEvent(address,uint256,uint256)": TypedContractEvent<
      SetInterestPlatformRateEventEvent.InputTuple,
      SetInterestPlatformRateEventEvent.OutputTuple,
      SetInterestPlatformRateEventEvent.OutputObject
    >;
    SetInterestPlatformRateEvent: TypedContractEvent<
      SetInterestPlatformRateEventEvent.InputTuple,
      SetInterestPlatformRateEventEvent.OutputTuple,
      SetInterestPlatformRateEventEvent.OutputObject
    >;

    "SetMaxBorrowRateEvent(address,uint256,uint256)": TypedContractEvent<
      SetMaxBorrowRateEventEvent.InputTuple,
      SetMaxBorrowRateEventEvent.OutputTuple,
      SetMaxBorrowRateEventEvent.OutputObject
    >;
    SetMaxBorrowRateEvent: TypedContractEvent<
      SetMaxBorrowRateEventEvent.InputTuple,
      SetMaxBorrowRateEventEvent.OutputTuple,
      SetMaxBorrowRateEventEvent.OutputObject
    >;

    "SettlementRepayTransferTokenEvent(address,uint256,uint256)": TypedContractEvent<
      SettlementRepayTransferTokenEventEvent.InputTuple,
      SettlementRepayTransferTokenEventEvent.OutputTuple,
      SettlementRepayTransferTokenEventEvent.OutputObject
    >;
    SettlementRepayTransferTokenEvent: TypedContractEvent<
      SettlementRepayTransferTokenEventEvent.InputTuple,
      SettlementRepayTransferTokenEventEvent.OutputTuple,
      SettlementRepayTransferTokenEventEvent.OutputObject
    >;

    "TransferToAuctionUpBorrowEvent(address,uint256,uint256)": TypedContractEvent<
      TransferToAuctionUpBorrowEventEvent.InputTuple,
      TransferToAuctionUpBorrowEventEvent.OutputTuple,
      TransferToAuctionUpBorrowEventEvent.OutputObject
    >;
    TransferToAuctionUpBorrowEvent: TypedContractEvent<
      TransferToAuctionUpBorrowEventEvent.InputTuple,
      TransferToAuctionUpBorrowEventEvent.OutputTuple,
      TransferToAuctionUpBorrowEventEvent.OutputObject
    >;

    "UserLend(address,uint256,uint256)": TypedContractEvent<
      UserLendEvent.InputTuple,
      UserLendEvent.OutputTuple,
      UserLendEvent.OutputObject
    >;
    UserLend: TypedContractEvent<
      UserLendEvent.InputTuple,
      UserLendEvent.OutputTuple,
      UserLendEvent.OutputObject
    >;

    "UserRedeem(address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      UserRedeemEvent.InputTuple,
      UserRedeemEvent.OutputTuple,
      UserRedeemEvent.OutputObject
    >;
    UserRedeem: TypedContractEvent<
      UserRedeemEvent.InputTuple,
      UserRedeemEvent.OutputTuple,
      UserRedeemEvent.OutputObject
    >;
  };
}
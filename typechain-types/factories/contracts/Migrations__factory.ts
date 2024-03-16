/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Migrations,
  MigrationsInterface,
} from "../../contracts/Migrations";

const _abi = [
  {
    inputs: [],
    name: "last_completed_migration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "completed",
        type: "uint256",
      },
    ],
    name: "setCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600080546001600160a01b0319163317905534801561002257600080fd5b5061016f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610062578063fdacd5761461008d575b600080fd5b61004f60015481565b6040519081526020015b60405180910390f35b600054610075906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6100a061009b366004610121565b6100a2565b005b6000546001600160a01b0316331461011c5760405162461bcd60e51b815260206004820152603360248201527f546869732066756e6374696f6e206973207265737472696374656420746f207460448201527234329031b7b73a3930b1ba13b99037bbb732b960691b606482015260840160405180910390fd5b600155565b600060208284031215610132578081fd5b503591905056fea2646970667358221220cfa71404841fee17a58be1a828a55b248a279ce9d38dfabc04eeb5440f765d0764736f6c63430008020033";

type MigrationsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigrationsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Migrations__factory extends ContractFactory {
  constructor(...args: MigrationsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Migrations & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Migrations__factory {
    return super.connect(runner) as Migrations__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigrationsInterface {
    return new Interface(_abi) as MigrationsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Migrations {
    return new Contract(address, _abi, runner) as unknown as Migrations;
  }
}

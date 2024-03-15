export enum Environment {
  LOCAL,
  WALLET_EXTENSION,
}

export interface NetworkConfig {
  networkName: string;
  chainID: number;
  rpcURL: string;
}

export interface UniswapV3LP {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
}

export interface AppConfig {
  env: Environment;
  rpc: {
    local: string;
    mainnet: string;
  };
  wallet: {
    address: string;
    privateKey: string;
  };
  lendingBorrowContract: {
    address: string;
  };
  lineaNetworkConfig: Record<Environment, NetworkConfig>;
  uniswapV3LP: UniswapV3LP[];
}

export const CurrentConfig: AppConfig = {
  env: Environment.WALLET_EXTENSION,
  rpc: {
    local: "http://localhost:8545",
    mainnet: "",
  },
  wallet: {
    address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    privateKey:
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  },
  lendingBorrowContract: {
    address: "",
  },
  lineaNetworkConfig: {
    [Environment.LOCAL]: {
      networkName: "Linea Testnet",
      chainID: 59140,
      rpcURL: "https://linea-goerli.blockpi.network/v1/rpc/public",
    },
    [Environment.WALLET_EXTENSION]: {
      networkName: "Linea Testnet",
      chainID: 59140,
      rpcURL: "https://linea-goerli.blockpi.network/v1/rpc/public",
    },
  },
  uniswapV3LP: [
    {
      address: "0x63AF6F0DD26C8ECe6b057c6224762dC7da0B6B04",
      name: "SyncSwap USDT/USDC Classic LP",
      symbol: "USDT/USDC cSLP",
      decimals: 18,
    },
  ],
};

export function getCurrentNetworkConfig(): NetworkConfig {
  return CurrentConfig.lineaNetworkConfig[CurrentConfig.env];
}

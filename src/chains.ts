export enum ChainId {
  // Add other chain-id here
  MODE = 919,
}

export const SUPPORTED_CHAINS = [
  // Add other chain-name here
  ChainId.MODE
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Add the native-currency here
  ETHER = 'ETH',
}

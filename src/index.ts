import { type Network, type RpcProvider } from './types'

import * as allNetworks from './networks'
import * as allProviders from './providers'

export * from './networks'
export * from './providers'
export type { BlockExplorer, Contract, NativeCurrency, Network, RpcNode, RpcProvider } from './types'
export * from './utils'
export type {
    BlockExplorerAuth,
    BlockExplorerFilter,
    ContractFilter,
    NativeCurrencyFilter,
    NetworkFilter,
    RpcNodeFilter,
    RpcProviderAuth,
    RpcProviderFilter,
} from './utils/types'

export const networks: Network[] = []
export const providers: RpcProvider[] = []

let n: keyof typeof allNetworks
for (n in allNetworks) networks.push(allNetworks[n])

let p: keyof typeof allProviders
for (p in allProviders) providers.push(allProviders[p])

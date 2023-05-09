import { type Network, type RpcProvider } from './types'

import * as allNetworks from './networks'
import * as allProviders from './providers'

export * from './networks'
export * from './providers'
export type { Network, RpcProvider } from './types'
export type { NetworkFilter } from './utils/types'

export const networks: Network[] = []

let k: keyof typeof allNetworks
for (k in allNetworks) networks.push(allNetworks[k])

export const providers: RpcProvider[] = Object.values(allProviders)

import * as n from './src/networks'
import * as p from './src/providers'

export const networks = Object.values(n)
export const providers = Object.values(p)

export type { Network, RpcEndpointsFilter, RpcNodeProvider } from './src/interfaces'

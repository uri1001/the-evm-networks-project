import * as n from './networks'
import * as p from './providers'

export const networks = Object.values(n)
export const providers = Object.values(p)

export type { Network, RpcEndpointsFilter, RpcNodeProvider } from './types/types'

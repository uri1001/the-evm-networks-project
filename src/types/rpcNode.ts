import type RpcNodeProvider from './rpcNodeProvider'

interface RpcNode {
    http: readonly string[]
    wss?: readonly string[]
    provider: RpcNodeProvider
    authenticated: boolean
}

export default RpcNode

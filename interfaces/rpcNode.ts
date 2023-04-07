import type RpcNodeProvider from './rpcNodeProvider'

interface RpcNode {
    http: readonly string[]
    wss?: readonly string[]
    provider: RpcNodeProvider
    authenticated: boolean
    authenticatedHttp?: readonly string[]
    authenticatedWss?: readonly string[]
}

export default RpcNode

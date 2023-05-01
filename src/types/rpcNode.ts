import type RpcProvider from './rpcProvider'

interface RpcNode {
    rpcNode: string
    http: readonly string[]
    wss?: readonly string[]
    provider: RpcProvider
    authenticated: boolean
}

export default RpcNode

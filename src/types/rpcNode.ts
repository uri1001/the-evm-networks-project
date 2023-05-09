import { type EndpointType } from '../enums'
import type RpcProvider from './rpcProvider'

interface RpcNode {
    rpcNode: string
    type: EndpointType
    http: readonly string[]
    wss?: readonly string[]
    provider: RpcProvider
}

export default RpcNode

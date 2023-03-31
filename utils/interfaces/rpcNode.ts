import { RpcDataPrivacyType } from '../enums'

import RpcNodeProvider from './rpcNodeProvider'

interface RpcNode {
    http: readonly string[]
    wss?: readonly string[]
    provider: RpcNodeProvider
    dataPrivacy: RpcDataPrivacyType
}

export default RpcNode

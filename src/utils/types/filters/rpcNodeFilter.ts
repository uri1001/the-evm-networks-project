import { type EndpointType } from '../../../enums'

import type RpcProviderFilter from './rpcProviderFilter'

export const rpcNodeFilterParams: Array<'rpcNode' | 'type' | 'http' | 'wss' | 'provider'> = [
    'rpcNode',
    'type',
    'http',
    'wss',
    'provider',
]

const endpointTypeParams: Array<'public' | 'authenticated' | 'local' | 'null'> = [
    'public',
    'authenticated',
    'local',
    'null',
]

//
// RPC Node Filter
//

interface RpcNodeFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof rpcNodeFilterParams // paramters included are checked by OR logic (by default checked by AND)
    rpcNode?: string[] // - validateString()
    type?: EndpointType[] | typeof endpointTypeParams // - validateEndpointType()
    http?: boolean // - validateHttpEndpoints()
    wss?: boolean // - validateWssEndpoints()
    provider?: RpcProviderFilter // - validateProvider()
}

export default RpcNodeFilter

import type RpcProviderFilter from './RpcProviderFilter'

export const rpcNodeFilterParams: Array<'rpcNode' | 'http' | 'wss' | 'provider' | 'authenticated'> =
    ['rpcNode', 'http', 'wss', 'provider', 'authenticated']

//
// RPC Node Filter
//

interface RpcNodeFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof rpcNodeFilterParams // paramters included are checked by OR logic (by default checked by AND)
    rpcNode?: string[] // - validateString()
    http?: boolean // - validateHttpEndpoints()
    wss?: boolean // - validateWssEndpoints()
    provider?: RpcProviderFilter // - validateProvider()
    authenticated?: boolean // - validateBoolean()
}

export default RpcNodeFilter

import { type Network, type RpcNode } from '../../../types'
import { type RpcNodeFilter, type RpcProviderAuth } from '../../types'

import { EndpointAuth, EndpointType } from '../../../enums'

import { validateRpcNode } from '../validations'

import { formatRpcProviderAuthEndpoints } from '../format'

const extractRpcEndpoints = (
    endpointsFilter: RpcNodeFilter | undefined,
    authConfig: RpcProviderAuth | undefined,
    network: Network,
): string[] => {
    let endpoints: string[] = []

    for (const n in network.rpcNodes) {
        const node: RpcNode = network.rpcNodes[n]
        if (validateRpcNode(node, endpointsFilter, 'endpoints')) {
            // Get Auth Key
            let key: string | EndpointAuth = EndpointAuth.Key
            if (authConfig != null)
                if (node.provider.provider in authConfig) {
                    if ('key' in authConfig[node.provider.provider])
                        key = authConfig[node.provider.provider].key
                    if (network.network in authConfig[node.provider.provider])
                        key = authConfig[node.provider.provider][network.network]
                }
            // Process Endpoints
            let httpEndpoints: string[] = []
            for (let k = 0; k < node.http.length; k++) httpEndpoints.push(node.http[k])

            let wssEndpoints: string[] = []
            const wss = node.wss
            if (wss != null) {
                for (let k = 0; k < wss.length; k++) wssEndpoints.push(wss[k])
            }

            // Format Authenticated Endpoints
            if (node.type === EndpointType.Authenticated && authConfig != null) {
                httpEndpoints = formatRpcProviderAuthEndpoints(httpEndpoints, key)
                wssEndpoints = formatRpcProviderAuthEndpoints(wssEndpoints, key)
            }

            // Extract Endpoints Filtering by HTTP & WSS
            if (endpointsFilter == null) {
                endpoints = endpoints.concat(httpEndpoints)
                endpoints = endpoints.concat(wssEndpoints)
            } else {
                if (endpointsFilter.http === true || endpointsFilter.http == null)
                    endpoints = endpoints.concat(httpEndpoints)
                if (endpointsFilter.wss === true || endpointsFilter.wss == null)
                    endpoints = endpoints.concat(wssEndpoints)
            }
        }
    }

    return endpoints
}

export default extractRpcEndpoints

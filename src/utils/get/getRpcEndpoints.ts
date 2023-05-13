import { networks as allNetworks } from '../..'

import { type Network } from '../../types'
import { type NetworkFilter, type RpcNodeFilter, type RpcProviderAuth } from '../types'

import { EndpointAuth } from '../../enums'

import { extractRpcEndpoints, filterNetworks } from '../tools'

export interface GetRpcEndpointsArgs {
    endpointsFilter?: RpcNodeFilter
    authConfig?: RpcProviderAuth
    authStrict?: boolean
    networks?: Network[]
    networkFilter?: NetworkFilter
}

const getRpcEndpoints = (args: GetRpcEndpointsArgs): string[] => {
    let { endpointsFilter, authConfig, authStrict, networks, networkFilter } = args

    // Check Missing Auth Config if Auth is in Strict Mode
    if ((authStrict ?? false) && authConfig == null)
        throw new Error('auth strict mode: missing rpc endpoints auth config')

    // Filter Networks
    if (networks == null) {
        if (networkFilter != null) {
            networks = filterNetworks(allNetworks, networkFilter)
        } else {
            networks = allNetworks
        }
    } else {
        if (networkFilter != null) networks = filterNetworks(networks, networkFilter)
    }

    // Extract Endpoints
    let endpoints: string[] = []

    for (let i = 0; i < networks.length; i++) {
        endpoints = endpoints.concat(extractRpcEndpoints(endpointsFilter, authConfig, networks[i]))
    }

    // Check & Remove Duplicated Endpoints
    for (let i = endpoints.length - 1; i >= 0; i--) {
        if (
            endpoints.indexOf(endpoints[i]) !== i ||
            ((authStrict ?? false) && endpoints[i].includes(EndpointAuth.Key))
        ) {
            endpoints[i] = endpoints[endpoints.length - 1]
            endpoints.pop()
        }
    }

    return endpoints
}

export default getRpcEndpoints

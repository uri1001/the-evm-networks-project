import { networks as allNetworks } from '../..'

import { type Network } from '../../types'
import { type BlockExplorerFilter, type NetworkFilter } from '../types'

import { extractBrowserEndpoints, filterNetworks } from '../tools'

export interface GetBrowserEndpointsArgs {
    type?: 'none' | 'address' | 'tx' | 'block' | 'token'
    typeArg?: string
    endpointsFilter?: BlockExplorerFilter
    networks?: Network[]
    networkFilter?: NetworkFilter
}

const getBrowserEndpoints = (args: GetBrowserEndpointsArgs): string[] => {
    let { type, typeArg, endpointsFilter, networks, networkFilter } = args

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
        endpoints = endpoints.concat(
            extractBrowserEndpoints(type, typeArg, endpointsFilter, networks[i]),
        )
    }

    // Check & Remove Duplicated Endpoints
    for (let i = endpoints.length - 1; i >= 0; i--) {
        if (endpoints.indexOf(endpoints[i]) !== i) {
            endpoints[i] = endpoints[endpoints.length - 1]
            endpoints.pop()
        }
    }

    return endpoints
}

export default getBrowserEndpoints

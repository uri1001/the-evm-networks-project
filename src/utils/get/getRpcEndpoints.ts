import { networks as allNetworks } from '../..'

import { type Network } from '../../types'
import { type NetworkFilter, type RpcNodeFilter, type RpcProviderAuth } from '../types'

import { EndpointAuth, EndpointType } from '../../enums'

import { extractRpcEndpoints, filterNetworks } from '../tools'
import { validateEndpointType } from '../tools/validations/core'

interface GetRpcEndpointsArgs {
    filter?: RpcNodeFilter
    authConfig?: RpcProviderAuth
    networks?: Network[]
    networkFilter?: NetworkFilter
}

const getRpcEndpoints = (args: GetRpcEndpointsArgs): string[] => {
    let { filter, authConfig, networks, networkFilter } = args

    // Check Missing Auth Config
    if (filter != null) {
        const v = validateEndpointType(EndpointType.Authenticated, filter.type)
        if (v && authConfig == null) throw new Error('missing rpc endpoints auth config')
    }

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
        endpoints = endpoints.concat(extractRpcEndpoints(networks[i], filter, authConfig))
    }

    // Check & Remove Duplicated Endpoints & Auth Endpoints With No Key
    for (let i = endpoints.length - 1; i >= 0; i--) {
        if (endpoints.indexOf(endpoints[i]) !== i || endpoints[i].includes(EndpointAuth.Key)) {
            endpoints[i] = endpoints[endpoints.length - 1]
            endpoints.pop()
        }
    }

    return endpoints
}

export default getRpcEndpoints

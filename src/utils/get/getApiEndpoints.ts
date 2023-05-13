import { networks as allNetworks } from '../..'

import { type Network } from '../../types'
import { type BlockExplorerAuth, type BlockExplorerFilter, type NetworkFilter } from '../types'

import { EndpointAuth } from '../../enums'

import { extractApiEndpoints, filterNetworks } from '../tools'

export interface GetApiEndpointsArgs {
    action?: 'none' | 'getsourcecode' | 'getabi' | 'ethprice' | 'ethsupply'
    actionArg?: string
    endpointsFilter?: BlockExplorerFilter
    authConfig?: BlockExplorerAuth
    authStrict?: boolean
    networks?: Network[]
    networkFilter?: NetworkFilter
}

const getApiEndpoints = (args: GetApiEndpointsArgs): string[] => {
    let { action, actionArg, endpointsFilter, authConfig, authStrict, networks, networkFilter } =
        args

    // Check Missing Auth Config if Auth is in Strict Mode
    if ((authStrict ?? false) && authConfig == null)
        throw new Error('auth strict mode: missing api endpoints auth config')

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
            extractApiEndpoints(action, actionArg, endpointsFilter, authConfig, networks[i]),
        )
    }

    // Check & Remove Duplicated Endpoints & Auth Endpoints With No Key in Strict Mode
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

export default getApiEndpoints

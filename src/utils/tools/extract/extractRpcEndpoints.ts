import { validateRpcNode } from '../validations'

import { EndpointType } from '../../../enums'
import { type Network } from '../../../types'
import { type RpcNodeFilter, type RpcProviderAuth } from '../../types'
import formatNodeAuthEndpoints from '../format/formatNodeAuthEndpoints'
import { validateNumber, validateString } from '../validations/core'

const extractRpcEndpoints = (
    network: Network,
    endpointsFilter: RpcNodeFilter | undefined,
    authConfig: RpcProviderAuth | undefined,
): string[] => {
    let endpoints: string[] = []

    console.log(network.network)
    console.log(authConfig)
    console.log('YEAHW')
    const filteredAuthConfig: RpcProviderAuth = []

    // Filters Auth Config Given Targeted Network
    if (authConfig != null) {
        for (let i = 0; i < authConfig.length; i++) {
            const authNetwork = authConfig[i].network
            if (authNetwork == null) {
                filteredAuthConfig.push(authConfig[i])
            } else {
                let valid = false
                if (validateNumber(network.id, [authNetwork])) valid = true
                if (typeof authNetwork === 'string') {
                    if (validateString(network.network, [authNetwork])) valid = true
                }
                console.log(authConfig[i])
                console.log(valid)
                console.log(network.network)
                if (valid) filteredAuthConfig.push(authConfig[i])
            }
        }
    }

    console.log(network.network)
    console.log(filteredAuthConfig)
    console.log('fffff')

    const rpcNodes = Object.values(network.rpcNodes)

    for (let i = 0; i < rpcNodes.length; i++) {
        if (validateRpcNode(rpcNodes[i], endpointsFilter)) {
            let httpEndpoints: string[] = []
            for (let k = 0; k < rpcNodes[i].http.length; k++) httpEndpoints.push(rpcNodes[i].http[k])

            let wssEndpoints: string[] = []
            const wss = rpcNodes[i].wss
            if (wss != null) {
                for (let k = 0; k < wss.length; k++) wssEndpoints.push(wss[k])
            }

            // Format Authenticated Endpoints
            if (rpcNodes[i].type === EndpointType.Authenticated && filteredAuthConfig != null) {
                for (let k = 0; k < filteredAuthConfig.length; k++) {
                    if (
                        validateString(rpcNodes[i].provider.provider, [
                            filteredAuthConfig[k].provider,
                        ])
                    ) {
                        httpEndpoints = formatNodeAuthEndpoints(
                            httpEndpoints,
                            filteredAuthConfig[k].key,
                        )
                        wssEndpoints = formatNodeAuthEndpoints(
                            wssEndpoints,
                            filteredAuthConfig[k].key,
                        )
                    }
                }
            }

            // Extract HTTP & WSS Endpoints
            if (endpointsFilter == null) {
                endpoints = endpoints.concat(httpEndpoints)
                endpoints = endpoints.concat(wssEndpoints)
            } else {
                if (endpointsFilter.http === false && endpointsFilter.wss === false) {
                    if (endpointsFilter.filterType === 'exclude') {
                        endpoints = endpoints.concat(httpEndpoints)
                        endpoints = endpoints.concat(wssEndpoints)
                    }
                } else if (endpointsFilter.http === false) {
                    if (endpointsFilter.filterType !== 'exclude') {
                        endpoints = endpoints.concat(wssEndpoints)
                    } else {
                        endpoints = endpoints.concat(httpEndpoints)
                    }
                } else if (endpointsFilter.wss === false) {
                    if (endpointsFilter.filterType !== 'exclude') {
                        endpoints = endpoints.concat(httpEndpoints)
                    } else {
                        endpoints = endpoints.concat(wssEndpoints)
                    }
                } else {
                    if (endpointsFilter.filterType !== 'exclude') {
                        endpoints = endpoints.concat(httpEndpoints)
                        endpoints = endpoints.concat(wssEndpoints)
                    }
                }
            }
        }
    }

    return endpoints
}

export default extractRpcEndpoints

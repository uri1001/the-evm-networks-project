import { BlockExplorerType, EndpointAuth } from '../../../enums'
import { type BlockExplorer, type Network } from '../../../types'
import { type BlockExplorerAuth, type BlockExplorerFilter } from '../../types'

import { validateBlockExplorer } from '../validations'

const extractApiEndpoints = (
    action: 'none' | 'getsourcecode' | 'getabi' | 'ethprice' | 'ethsupply' | undefined,
    actionArg: string | undefined,
    endpointsFilter: BlockExplorerFilter | undefined,
    authConfig: BlockExplorerAuth | undefined,
    network: Network,
): string[] => {
    const endpoints: string[] = []

    if (network.blockExplorers != null) {
        for (const b in network.blockExplorers) {
            const blockExplorer: BlockExplorer = network.blockExplorers[b]
            if (
                blockExplorer.type === BlockExplorerType.Blockscout ||
                blockExplorer.type === BlockExplorerType.Etherscan
            ) {
                if (blockExplorer.apiUrl != null && blockExplorer.apiUrl !== '') {
                    if (validateBlockExplorer(blockExplorer, endpointsFilter)) {
                        // Get Auth Key
                        let key: string | EndpointAuth = EndpointAuth.Key

                        if (authConfig != null)
                            if (network.network in authConfig)
                                if (blockExplorer.blockExplorer in authConfig[network.network])
                                    key = authConfig[network.network][blockExplorer.blockExplorer]

                        // Format Endpoint
                        if (action != null && action !== 'none') {
                            let endpoint: string = ''
                            if (action === 'getsourcecode' || action === 'getabi') {
                                if (actionArg == null) {
                                    throw new Error('api endpoints: undefined argument')
                                } else {
                                    endpoint = `${blockExplorer.apiUrl}?module=contract&action=${action}&address=${actionArg}&apikey=${key}`
                                }
                            }
                            if (action === 'ethprice' || action === 'ethsupply')
                                endpoint = `${blockExplorer.apiUrl}?module=stats&action=${action}&apikey=${key}`

                            endpoints.push(endpoint)
                        } else {
                            endpoints.push(blockExplorer.apiUrl)
                        }
                    }
                }
            }
        }
    }

    return endpoints
}

export default extractApiEndpoints

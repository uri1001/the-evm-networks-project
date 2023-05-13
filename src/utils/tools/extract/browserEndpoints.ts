import { BlockExplorerStandard } from '../../../enums'
import { type Network } from '../../../types'
import { type BlockExplorerFilter } from '../../types'

import { validateBlockExplorer } from '../validations'

const extractBrowserEndpoints = (
    type: 'none' | 'address' | 'tx' | 'block' | 'token' | undefined,
    typeArg: string | undefined,
    endpointsFilter: BlockExplorerFilter | undefined,
    network: Network,
): string[] => {
    const endpoints: string[] = []

    if (network.blockExplorers != null) {
        for (const b in network.blockExplorers) {
            const blockExplorer = network.blockExplorers[b]
            if (
                blockExplorer.standard === BlockExplorerStandard.EIP3091 &&
                blockExplorer.browserUrl !== ''
            ) {
                if (validateBlockExplorer(blockExplorer, endpointsFilter)) {
                    // Format Endpoint
                    if (type != null && type !== 'none') {
                        if (typeArg == null) throw new Error('browser endpoints: undefined argument')

                        endpoints.push(`${blockExplorer.browserUrl}/${type}/${typeArg}`)
                    } else {
                        endpoints.push(blockExplorer.browserUrl)
                    }
                }
            }
        }
    }

    return endpoints
}

export default extractBrowserEndpoints

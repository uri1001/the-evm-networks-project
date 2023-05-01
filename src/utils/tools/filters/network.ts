import { type Network } from '../../../types'
import { type NetworkFilter } from '../../types'

import { validateNetwork } from '../validations'

const filterNetworks = (networks: Network[], filter: NetworkFilter | undefined): Network[] => {
    if (filter != null) {
        const n: Network[] = []

        for (let i = 0; i < networks.length; i++)
            if (validateNetwork(networks[i], filter)) n.push(networks[i])

        return n
    }

    return networks
}

export default filterNetworks

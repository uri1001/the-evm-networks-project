import { networks } from '../..'

import { type Network } from '../../types'
import { filterNetworks } from '../tools'

import { type NetworkFilter } from '../types'

const getNetworks = (filter?: NetworkFilter): Network[] => {
    const n: Network[] = []
    let k: keyof typeof networks

    // eslint-disable-next-line @typescript-eslint/no-for-in-array
    for (k in networks) n.push(networks[k])

    return filterNetworks(n, filter)
}

export default getNetworks

import { networks } from '../..'

import { type Network } from '../../types'
import { filterNetworks } from '../tools'

import { type NetworkFilter } from '../types'

const getNetworks = (filter?: NetworkFilter): Network[] => {
    return filterNetworks(networks, filter)
}

export default getNetworks

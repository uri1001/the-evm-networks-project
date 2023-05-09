import { providers } from '../..'

import { type RpcProvider } from '../../types'
import { filterRpcProviders } from '../tools'

import { type RpcProviderFilter } from '../types'

const getRpcProviders = (filter?: RpcProviderFilter): RpcProvider[] => {
    return filterRpcProviders(providers, filter)
}

export default getRpcProviders

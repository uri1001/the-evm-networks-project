import { providers } from '../..'

import { type RpcProvider } from '../../types'
import { filterRpcProviders } from '../tools'

import { type RpcProviderFilter } from '../types'

const getRpcProviders = (filter?: RpcProviderFilter): RpcProvider[] => {
    const p: RpcProvider[] = []
    let k: keyof typeof providers

    // eslint-disable-next-line @typescript-eslint/no-for-in-array
    for (k in providers) p.push(providers[k])

    return filterRpcProviders(p, filter)
}

export default getRpcProviders

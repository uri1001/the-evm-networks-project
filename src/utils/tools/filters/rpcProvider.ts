import { type RpcProvider } from '../../../types'
import { type RpcProviderFilter } from '../../types'

import { validateRpcProvider } from '../validations'

const filterRpcProviders = (
    providers: RpcProvider[],
    filter: RpcProviderFilter | undefined,
): RpcProvider[] => {
    if (filter != null) {
        const p: RpcProvider[] = []

        for (let i = 0; i < providers.length; i++)
            if (validateRpcProvider(providers[i], filter)) p.push(providers[i])

        return p
    }

    return providers
}

export default filterRpcProviders

import * as providers from '../providers'

import { type RpcNodeProvider } from '../types/types'

const getAllProviders = (): RpcNodeProvider[] => {
    return Object.values(providers)
}

export default getAllProviders

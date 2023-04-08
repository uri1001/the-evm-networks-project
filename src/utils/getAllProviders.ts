import * as providers from '../providers'

import { type RpcNodeProvider } from '../interfaces'

const getAllProviders = (): RpcNodeProvider[] => {
    return Object.values(providers)
}

export default getAllProviders

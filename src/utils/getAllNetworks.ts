import * as networks from '../networks'

import { type Network } from '../types/types'

const getAllNetworks = (): Network[] => {
    return Object.values(networks)
}

export default getAllNetworks

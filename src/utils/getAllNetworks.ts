import * as networks from '../networks'

import { type Network } from '../interfaces'

const getAllNetworks = (): Network[] => {
    return Object.values(networks)
}

export default getAllNetworks

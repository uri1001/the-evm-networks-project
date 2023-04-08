import * as networks from '../networks'

import { type Network } from '../interfaces'

// ID can be network ID as number or string or network name as string
const getNetwork = (id: number | string): Network | undefined => {
    const n = Object.values(networks)

    if (isNaN(+id)) {
        id = String(id)
        for (let i = 0; i < n.length; i++) {
            if (
                n[i].name.toLowerCase() === id.toLowerCase() ||
                n[i].network.toLowerCase() === id.toLowerCase()
            )
                return n[i]
        }
    } else {
        for (let i = 0; i < n.length; i++) {
            if (n[i].id === Number(id)) return n[i]
        }
    }
    return undefined
}

export default getNetwork

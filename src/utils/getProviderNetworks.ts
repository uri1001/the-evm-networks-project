import * as networks from '../networks'

import type RpcNode from '../types/rpcNode'
import { type Network } from '../types/types'

const getProviderNetworks = (name: string): Network[] => {
    const n: Network[] = Object.values(networks)

    const nets: Network[] = []

    for (let i = 0; i < n.length; i++) {
        const r: RpcNode[] = Object.values(n[i].rpcNodes)
        for (let k = 0; k < r.length; k++) {
            if (
                r[k].provider.name.toLowerCase() === name.toLowerCase() ||
                r[k].provider.provider.toLowerCase() === name.toLowerCase()
            ) {
                nets.push(n[i])
                break
            }
        }
    }
    return nets
}
export default getProviderNetworks

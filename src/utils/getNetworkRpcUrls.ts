import * as networks from '../networks'

import type RpcNode from '../types/rpcNode'
import { type RpcEndpointsFilter } from '../types/types'

// ID can be network ID as number or string or network name as string
const getNetworkRpcUrls = (id: number | string, filter?: RpcEndpointsFilter): string[] => {
    console.log(filter)

    const n = Object.values(networks)

    const urls: string[] = []

    if (isNaN(+id)) {
        id = String(id)
        for (let i = 0; i < n.length; i++) {
            if (
                n[i].name.toLowerCase() === id.toLowerCase() ||
                n[i].network.toLowerCase() === id.toLowerCase()
            ) {
                const r: RpcNode[] = Object.values(n[i].rpcNodes)
                for (let k = 0; k < r.length; k++) {
                    for (let z = 0; z < r[k].http.length; z++) {
                        urls.push(r[k].http[z])
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < n.length; i++) {
            if (n[i].id === Number(id)) {
                const r: RpcNode[] = Object.values(n[i].rpcNodes)
                for (let k = 0; k < r.length; k++) {
                    for (let z = 0; z < r[k].http.length; z++) {
                        urls.push(r[k].http[z])
                    }
                }
            }
        }
    }

    return urls
}

export default getNetworkRpcUrls

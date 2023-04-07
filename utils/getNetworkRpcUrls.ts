import { type RpcEndpointsFilter } from '../interfaces'

// ID can be network ID as number or string or network name as string
const getNetworkRpcUrls = (id: number | string, filter: RpcEndpointsFilter): void => {
    if (isNaN(+id)) {
        // NETWORK SHOULD BE CHECKED BY NETWORK NAME
    } else {
        // NETWORK SHOULD BE CHECKED BY NETWORK ID
    }
}

export default getNetworkRpcUrls

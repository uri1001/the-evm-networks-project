import { networks as allNetworks } from '../..'

import { type Network, type RpcNode } from '../../types'
import { type NetworkFilter, type RpcNodeFilter, type RpcProviderAuth } from '../types'

import { filterNetworks } from '../tools'

// RETURNS AN ARRAY OF ENDPOINTS, IN THE CASE OF AUTH, WITH THE PRIVATE KEY SET
const getRpcEndpoints = (
    networks?: Network[],
    filter?: RpcNodeFilter, // FILTERS HTTP/WSS , AUTH , PROVIDER... type?: 'all' | 'http' | 'wss', auth?: 'all' | 'auth' | 'no-auth',
    authConfig?: RpcProviderAuth,
    networkFilter?: NetworkFilter, // FILTERS NETWORKS
): string[] => {
    const n: Network[] = []
    let k: keyof typeof networks

    if (auth === 'auth' && authConfig == null) throw new Error('missing rpc endpoints auth config')

    // eslint-disable-next-line @typescript-eslint/no-for-in-array
    for (k in networks) n.push(networks[k])

    const nFiltered: Network[] = filterNetworks(n, networkFilter)

    const rpcNodes: RpcNode[] = extractRpcNodes(nFiltered)

    console.log(allNetworks)
    // SI TYPE ES HTTP
    //
    // ITERAR RPC NODES AGAFANT ENDPOINTS HTTP
    //
    // FER CHECK AUTH
    // SI ES AUTH -> MIRAR SI TENIM LES KEYS A CONFIG I POSARLES & AFEGIR A ARRAY ENDPOINTS, OTHERWISE REJECT
    // SI NO ES AUTH ->
    // SI ALL
    //
    // RETORNAR ARRAY AMB ENDPOINTS
    //

    // RETURNS EMPTY ARRAY IF NO ENDPOINT FOUND
    // DOES NOT ADD AUTH ENDPOINT TO RETURN ARRAY IF KEY IS MISSING

    if (auth === 'auth') return formatRpcEndpoints(endpoints, authConfig)
}

export default getRpcEndpoints

import { type Network } from '../../../types'
import { type BlockExplorerAuth, type BlockExplorerFilter } from '../../types'

const extractBrowserEndpoints = (
    _network: Network,
    _filter: BlockExplorerFilter | undefined,
    _authConfig: BlockExplorerAuth | undefined,
): string[] => {
    return []
}

export default extractBrowserEndpoints

// AQUI TENIM LES NETWORKS QUE VOLEM A NETWORKS
// 1. ITERAR AQUESTES NETWORKS
// --- A CADA NETWORK ITERAR RPC NODES
// -
// ------ A CADA RPC NODE COMPROBAR SI PASSA EL FILTER
// -------- SI PASA EL FILTER
// --------------- SI FILTER AGAFA AUTH POSAR LES PRIVATE KEYS AL SEU LLOC -> SI NO HI HA PRIVATE KEY PER AQUELL ENDPOINT IGNORAR ENDPOINT
// --------------- ANAR AFEGINT ENDPOINTS A UN RETURN ARRAY
// -------- RETORNAR ELS ENDPOINTS QUE HAN PASSAT FILTRE
//
// RETORNAR EMPTY STRING SI NO HI HA MATCH
//
// return extractRpcEndpoints(network, filter, authConfig)

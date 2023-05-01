import type BlockExplorerFilter from './blockExplorerFilter'
import type ContractFilter from './contractFilter'
import type nativeCurrencyFilter from './nativeCurrencyFilter'
import type RpcNodeFilter from './rpcNodeFilter'

export const networkFilterParams: Array<
    | 'id'
    | 'name'
    | 'network'
    | 'nativeCurrency'
    | 'rpcNodes'
    | 'blockExplorers'
    | 'contracts'
    | 'testnet'
    | 'mainnetId'
> = [
    'id',
    'name',
    'network',
    'nativeCurrency',
    'rpcNodes',
    'blockExplorers',
    'contracts',
    'testnet',
    'mainnetId',
]

//
// Network Filter
//

interface NetworkFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof networkFilterParams // paramters included are checked by OR logic (by default checked by AND)
    id?: Array<number | string> // - validateNumber()
    name?: string[] // - validateString()
    network?: string[] // - validateString()
    nativeCurrency?: nativeCurrencyFilter // - validateNativeCurrency()
    rpcNodes?: RpcNodeFilter // - validateRpcNode()
    blockExplorers?: BlockExplorerFilter // - validateBlockExplorer()
    contracts?: ContractFilter // - validateContracts()
    testnet?: boolean // - validateBoolean()
    mainnetId?: Array<number | string> // - validateNumber()
}

export default NetworkFilter

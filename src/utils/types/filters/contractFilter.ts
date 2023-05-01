const contractFilterParams: Array<'name' | 'contract' | 'address' | 'deployBlock' | 'deployTxHash'> =
    ['contract', 'address', 'deployBlock', 'deployTxHash']

//
// Contract Filter
//

interface ContractFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof contractFilterParams // paramters included are checked by OR logic (by default checked by AND)
    name?: string[] // - validateString()
    contract?: string[] // - validateString()
    address?: string[] // - validateString()
    deployBlock?: number[] // - validateNumber()
    deployTxHash?: string[] // - validateString()
}

export default ContractFilter

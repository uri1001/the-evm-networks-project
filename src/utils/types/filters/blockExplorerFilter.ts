import { type BlockExplorerStandard, type BlockExplorerType } from '../../../enums'

const blockExplorerFilterParams: Array<
    'name' | 'blockExplorer' | 'type' | 'standard' | 'browserUrl' | 'apiUrl' | 'docsUrl'
> = ['name', 'blockExplorer', 'type', 'standard', 'browserUrl', 'apiUrl', 'docsUrl']

const blockExplorerTypeParams: Array<
    'blockscout' | 'etherscan' | 'independent' | 'subscan' | 'null'
> = ['blockscout', 'etherscan', 'independent', 'subscan', 'null']

const blockExplorerStandardParams: Array<'eip3091' | 'none' | 'null'> = ['eip3091', 'none', 'null']

//
// Block Explorer Filter
//

interface BlockExplorerFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof blockExplorerFilterParams // paramters included are checked by OR logic (by default checked by AND)
    name?: string[] // - validateString()
    blockExplorer?: string[] // - validateString()
    type?: BlockExplorerType[] | typeof blockExplorerTypeParams // - validate BlockExplorerType()
    standard?: BlockExplorerStandard[] | typeof blockExplorerStandardParams // - validateBlockExplorerStandard()
    browserUrl?: boolean // - validateHttpEndpoints()
    apiUrl?: boolean // - validateHttpEndpoints()
    docsUrl?: boolean // - validateHttpEndpoints()
}

export default BlockExplorerFilter

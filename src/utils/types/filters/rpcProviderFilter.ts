import { type ProviderPrivacyLevel } from '../../../enums'

const RpcProviderFilterParams: Array<'name' | 'provider' | 'privacyLevel'> = [
    'name',
    'provider',
    'privacyLevel',
]

const providerPrivacyLevelParams: Array<
    'privacy' | 'partial privacy' | 'no privacy' | 'no info' | 'null'
> = ['privacy', 'partial privacy', 'no privacy', 'no info', 'null']

//
// RPC Provider Filter
//

interface RpcProviderFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof RpcProviderFilterParams // paramters included are checked by OR logic (by default checked by AND)
    name?: string[] // - validateString()
    provider?: string[] // - validateString()
    privacyLevel?: ProviderPrivacyLevel[] | typeof providerPrivacyLevelParams // - validatePrivacyLevel()
}

export default RpcProviderFilter

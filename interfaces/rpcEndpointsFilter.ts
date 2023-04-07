import { type ProviderPrivacyLevel } from '../enums'

interface RpcEndpointsFilter {
    urls: 'http' | 'wss' | 'disabled'
    authenticated: boolean | 'disabled'
    privacy: ProviderPrivacyLevel | 'disabled'
    provider: string | 'disabled'
}

export default RpcEndpointsFilter

import { type ProviderPrivacyLevel } from '../enums'

interface RpcNodeProvider {
    provider: string
    url: string
    privacyLevel: ProviderPrivacyLevel
    privacyPolicy: readonly string[]
}

export default RpcNodeProvider

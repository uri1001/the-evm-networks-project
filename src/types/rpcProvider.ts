import { type ProviderPrivacyLevel } from '../enums'

interface RpcProvider {
    name: string
    provider: string
    url: string
    privacyLevel: ProviderPrivacyLevel
    privacyPolicy: readonly string[]
}

export default RpcProvider

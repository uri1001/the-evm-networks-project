import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const goChainProvider = {
    provider: 'Go Chain',
    url: 'https://gochain.io/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

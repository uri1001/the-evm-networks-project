import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const goChainProvider = {
    name: 'Go Chain',
    provider: 'goChainProvider',
    url: 'https://gochain.io/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider

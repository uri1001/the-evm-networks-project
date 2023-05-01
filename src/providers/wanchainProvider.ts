import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const wanchainProvider = {
    name: 'Wanchain Foundation',
    provider: 'wanchainProvider',
    url: 'https://www.wanchain.org',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider

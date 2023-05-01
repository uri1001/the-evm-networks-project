import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const confluxProvider = {
    name: 'Conflux Network',
    provider: 'confluxProvider',
    url: 'https://confluxnetwork.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://confluxnetwork.org/en/policy'],
} as const satisfies RpcProvider

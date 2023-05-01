import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const auroraProvider = {
    name: 'Aurora',
    provider: 'auroraProvider',
    url: 'https://aurora.dev/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://aurora.dev/privacy/'],
} as const satisfies RpcProvider

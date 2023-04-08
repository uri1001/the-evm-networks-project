import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const auroraProvider = {
    name: 'Aurora',
    provider: 'auroraProvider',
    url: 'https://aurora.dev/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://aurora.dev/privacy/'],
} as const satisfies RpcNodeProvider

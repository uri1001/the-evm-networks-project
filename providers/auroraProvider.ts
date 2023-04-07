import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const auroraProvider = {
    provider: 'Aurora',
    url: 'https://aurora.dev/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://aurora.dev/privacy/'],
} as const satisfies RpcNodeProvider

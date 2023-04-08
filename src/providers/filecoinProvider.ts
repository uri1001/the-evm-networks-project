import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const filecoinProvider = {
    name: 'Protocol Labs',
    provider: 'filecoinProvider',
    url: 'https://protocol.ai/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://protocol.ai/legal/#privacy-policy/'],
} as const satisfies RpcNodeProvider

import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const filecoinProvider = {
    name: 'Protocol Labs',
    provider: 'filecoinProvider',
    url: 'https://protocol.ai/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://protocol.ai/legal/#privacy-policy/'],
} as const satisfies RpcProvider

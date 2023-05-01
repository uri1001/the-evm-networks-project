import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const blast = {
    name: 'Blast API - Bware Labs',
    provider: 'blast',
    url: 'https://blastapi.io',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blastapi.io/privacy-policy'],
} as const satisfies RpcProvider

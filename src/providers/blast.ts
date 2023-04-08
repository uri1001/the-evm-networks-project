import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const blast = {
    name: 'Blast API',
    provider: 'blast',
    url: 'https://blastapi.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blastapi.io/privacy-policy/'],
} as const satisfies RpcNodeProvider

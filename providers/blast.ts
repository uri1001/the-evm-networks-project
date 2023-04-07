import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const blast = {
    provider: 'Blast API',
    url: 'https://blastapi.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blastapi.io/privacy-policy/'],
} as const satisfies RpcNodeProvider

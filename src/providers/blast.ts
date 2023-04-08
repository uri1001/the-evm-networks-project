import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const blast = {
    name: 'Blast API',
    provider: 'blast',
    url: 'https://blastapi.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blastapi.io/privacy-policy/'],
} as const satisfies RpcNodeProvider

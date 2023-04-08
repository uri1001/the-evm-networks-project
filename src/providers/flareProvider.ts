import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const flareProvider = {
    name: 'Flare Network',
    provider: 'flareProvider',
    url: 'https://flare.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://flare.network/privacy-policy/'],
} as const satisfies RpcNodeProvider

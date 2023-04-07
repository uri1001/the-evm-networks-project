import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const flareProvider = {
    provider: 'Flare Network',
    url: 'https://flare.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://flare.network/privacy-policy/'],
} as const satisfies RpcNodeProvider

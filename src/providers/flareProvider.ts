import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const flareProvider = {
    name: 'Flare Network',
    provider: 'flareProvider',
    url: 'https://flare.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://flare.network/privacy-policy/'],
} as const satisfies RpcProvider

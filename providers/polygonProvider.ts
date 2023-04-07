import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const polygonProvider = {
    provider: 'Polygon Labs',
    url: 'https://polygon.technology/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://polygon.technology/privacy-policy/'],
} as const satisfies RpcNodeProvider

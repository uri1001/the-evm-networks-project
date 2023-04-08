import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const polygonProvider = {
    name: 'Polygon Labs',
    provider: 'polygonProvider',
    url: 'https://polygon.technology/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://polygon.technology/privacy-policy/'],
} as const satisfies RpcNodeProvider

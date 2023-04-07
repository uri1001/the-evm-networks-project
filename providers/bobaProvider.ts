import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const bobaProvider = {
    provider: 'Boba',
    url: 'https://boba.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://forum.boba.network/privacy/'],
} as const satisfies RpcNodeProvider

import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const bobaProvider = {
    name: 'Boba',
    provider: 'bobaProvider',
    url: 'https://boba.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://forum.boba.network/privacy/'],
} as const satisfies RpcProvider

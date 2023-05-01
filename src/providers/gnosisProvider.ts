import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const gnosisProvider = {
    name: 'Gnosis Chain',
    provider: 'gnosisProvider',
    url: 'https://www.gnosis.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.gnosis.io/privacy-policy/'],
} as const satisfies RpcProvider

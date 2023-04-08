import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const gnosisProvider = {
    name: 'Gnosis Chain',
    provider: 'gnosisProvider',
    url: 'https://www.gnosis.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.gnosis.io/privacy-policy/'],
} as const satisfies RpcNodeProvider

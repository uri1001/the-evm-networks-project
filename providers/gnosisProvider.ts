import { type RpcNodeProvider } from '../utils/interfaces'

export const gnosisProvider = {
    provider: 'Gnosis Chain',
    url: 'https://www.gnosis.io/',
    privacyPolicy: ['https://www.gnosis.io/privacy-policy/'],
} as const satisfies RpcNodeProvider

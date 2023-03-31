import { type RpcNodeProvider } from '../utils/interfaces'

export const avalancheProvider = {
    provider: 'Avalanche',
    url: 'https://www.avax.network/',
    privacyPolicy: ['https://www.avax.com/privacy-policy/'],
} as const satisfies RpcNodeProvider

import { type RpcNodeProvider } from '../utils/interfaces'

export const arbitrumProvider = {
    provider: 'Arbitrum',
    url: 'https://arbitrum.io/',
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

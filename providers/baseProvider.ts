import { type RpcNodeProvider } from '../utils/interfaces'

export const baseProvider = {
    provider: 'Base',
    url: 'https://base.org/',
    privacyPolicy: ['https://www.coinbase.com/legal/privacy/'],
} as const satisfies RpcNodeProvider

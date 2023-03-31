import { type RpcNodeProvider } from '../utils/interfaces'

export const binance = {
    provider: 'Binance',
    url: 'https://www.binance.com/',
    privacyPolicy: ['https://www.bnbchain.org/en/privacy-policy/'],
} as const satisfies RpcNodeProvider

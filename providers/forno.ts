import { type RpcNodeProvider } from '../utils/interfaces'

export const forno = {
    provider: 'Forno',
    url: 'https://clabs.co/',
    privacyPolicy: ['https://clabs.co/privacy/'],
} as const satisfies RpcNodeProvider

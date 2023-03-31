import { type RpcNodeProvider } from '../utils/interfaces'

export const localhostProvider = {
    provider: 'localhost',
    url: 'http://127.0.0.1:8545',
    privacyPolicy: ['localhost'],
} as const satisfies RpcNodeProvider

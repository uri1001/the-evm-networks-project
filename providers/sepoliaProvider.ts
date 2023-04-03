import { type RpcNodeProvider } from '../utils/interfaces'

export const sepoliaProvider = {
    provider: 'Sepolia',
    url: 'https://sepolia.dev/',
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

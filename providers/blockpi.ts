import { type RpcNodeProvider } from '../utils/interfaces'

export const blockpi = {
    provider: 'BlockPI Network',
    url: 'https://blockpi.io/',
    privacyPolicy: ['https://blockpi.io/privacy-policy'],
} as const satisfies RpcNodeProvider

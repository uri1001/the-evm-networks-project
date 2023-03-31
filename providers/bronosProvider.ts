import { type RpcNodeProvider } from '../utils/interfaces'

export const bronosProvider = {
    provider: 'Bronos',
    url: 'https://bronos.org/',
    privacyPolicy: ['https://bronos.org/privacy-policy/'],
} as const satisfies RpcNodeProvider

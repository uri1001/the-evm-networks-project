import { type RpcNodeProvider } from '../utils/interfaces'

export const optimismProvider = {
    provider: 'Optimism',
    url: 'https://optimism.io/',
    privacyPolicy: ['https://www.optimism.io/data-privacy-policy/'],
} as const satisfies RpcNodeProvider

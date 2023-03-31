import { type RpcNodeProvider } from '../utils/interfaces'

export const alchemy = {
    provider: 'Alchemy',
    url: 'https://www.alchemy.com/',
    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
} as const satisfies RpcNodeProvider

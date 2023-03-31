import { type RpcNodeProvider } from '../utils/interfaces'

export const blast = {
    provider: 'Blast API',
    url: 'https://blastapi.io/',
    privacyPolicy: ['https://blastapi.io/privacy-policy/'],
} as const satisfies RpcNodeProvider

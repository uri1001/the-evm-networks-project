import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const onerpc = {
    name: 'Ata Network - 1RPC',
    provider: 'onerpc',
    url: 'https://www.ata.network/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://www.ata.network/privacy',
        'https://docs.ata.network/1rpc/desgin/#tracking-prevention',
    ],
} as const satisfies RpcNodeProvider

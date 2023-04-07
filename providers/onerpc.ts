import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const onerpc = {
    provider: 'Ata Network - 1RPC',
    url: 'https://www.ata.network/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://www.ata.network/privacy',
        'https://docs.ata.network/1rpc/desgin/#tracking-prevention',
    ],
} as const satisfies RpcNodeProvider

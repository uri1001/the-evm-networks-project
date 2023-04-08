import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const notional = {
    name: 'Notional',
    provider: 'notional',
    url: 'https://notional.ventures/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [
        'https://www.notion.so/nvlabs/Privacy-Policy-Notional-c31b3a6230bd4b04813fbb2a488560d6',
    ],
} as const satisfies RpcNodeProvider

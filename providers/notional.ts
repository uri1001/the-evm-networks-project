import { type RpcNodeProvider } from '../utils/interfaces'

export const notional = {
    provider: 'Notional',
    url: 'https://notional.ventures/',
    privacyPolicy: [
        'https://www.notion.so/nvlabs/Privacy-Policy-Notional-c31b3a6230bd4b04813fbb2a488560d6',
    ],
} as const satisfies RpcNodeProvider

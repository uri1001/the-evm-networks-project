import { type RpcNodeProvider } from '../utils/interfaces'

export const flashbots = {
    provider: 'Flashbots Research',
    url: 'https://www.flashbots.net/',
    privacyPolicy: [
        'https://docs.flashbots.net/flashbots-protect/overview/',
        'https://docs.flashbots.net/policies/privacy/',
        'https://docs.flashbots.net/flashbots-protect/rpc/quick-start/',
        'https://collective.flashbots.net/search?q=transparancy%20report%20%23ship%20in%3Atitle',
    ],
} as const satisfies RpcNodeProvider

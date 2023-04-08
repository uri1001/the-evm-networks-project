import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const flashbots = {
    name: 'Flashbots Research',
    provider: 'flashbots',
    url: 'https://www.flashbots.net/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://docs.flashbots.net/flashbots-protect/overview/',
        'https://docs.flashbots.net/policies/privacy/',
        'https://docs.flashbots.net/flashbots-protect/rpc/quick-start/',
        'https://collective.flashbots.net/search?q=transparancy%20report%20%23ship%20in%3Atitle',
    ],
} as const satisfies RpcNodeProvider

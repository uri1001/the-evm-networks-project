import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const infura = {
    name: 'Infura',
    provider: 'infura',
    url: 'https://www.infura.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [
        'https://consensys.net/privacy-policy/',
        'https://consensys.net/blog/news/consensys-data-retention-update/',
    ],
} as const satisfies RpcNodeProvider

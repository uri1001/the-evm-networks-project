import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const infura = {
    provider: 'Infura',
    url: 'https://www.infura.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [
        'https://consensys.net/privacy-policy/',
        'https://consensys.net/blog/news/consensys-data-retention-update/',
    ],
} as const satisfies RpcNodeProvider

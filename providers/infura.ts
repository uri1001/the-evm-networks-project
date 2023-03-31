import { type RpcNodeProvider } from '../utils/interfaces'

export const infura = {
    provider: 'Infura',
    url: 'https://www.infura.io/',
    privacyPolicy: [
        'https://consensys.net/privacy-policy/',
        'https://consensys.net/blog/news/consensys-data-retention-update/',
    ],
} as const satisfies RpcNodeProvider

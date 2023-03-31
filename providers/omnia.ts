import { type RpcNodeProvider } from '../utils/interfaces'

export const omnia = {
    provider: 'Omnia Tech',
    url: 'https://omniatech.io/',
    privacyPolicy: [
        'https://www.omniaretail.com/privacy-policy',
        'https://blog.omniatech.io/how-omnia-handles-your-personal-data/',
    ],
} as const satisfies RpcNodeProvider

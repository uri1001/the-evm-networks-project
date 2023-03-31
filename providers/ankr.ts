import { type RpcNodeProvider } from '../utils/interfaces'

export const ankr = {
    provider: 'Ankr',
    url: 'https://www.ankr.com/',
    privacyPolicy: [
        'https://www.ankr.com/privacy-policy/',
        'https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/',
    ],
} as const satisfies RpcNodeProvider

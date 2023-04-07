import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const localhostProvider = {
    provider: 'localhost',
    url: 'http://127.0.0.1:8545',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: ['localhost'],
} as const satisfies RpcNodeProvider

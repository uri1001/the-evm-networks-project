import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const localhostProvider = {
    name: 'localhost',
    provider: 'localhostProvider',
    url: 'http://127.0.0.1:8545',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: ['localhost'],
} as const satisfies RpcProvider

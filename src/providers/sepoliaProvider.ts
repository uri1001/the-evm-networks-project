import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const sepoliaProvider = {
    name: 'Sepolia',
    provider: 'sepoliaProvider',
    url: 'https://sepolia.dev/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const sepoliaProvider = {
    provider: 'Sepolia',
    url: 'https://sepolia.dev/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

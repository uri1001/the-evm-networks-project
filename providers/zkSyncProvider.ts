import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const zkSyncProvider = {
    provider: 'ZkSync',
    url: 'https://era.zksync.io/docs/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

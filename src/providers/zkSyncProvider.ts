import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const zkSyncProvider = {
    name: 'ZkSync',
    provider: 'zkSyncProvider',
    url: 'https://era.zksync.io/docs/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider

import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const zkSyncProvider = {
    name: 'ZkSync',
    provider: 'zkSyncProvider',
    url: 'https://era.zksync.io/docs/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider

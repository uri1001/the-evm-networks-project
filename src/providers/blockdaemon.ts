import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const blockdaemon = {
    name: 'Blockdaemon',
    provider: 'blockdaemon',
    url: 'https://blockdaemon.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://blockdaemon.com/privacy-policy/'],
} as const satisfies RpcNodeProvider

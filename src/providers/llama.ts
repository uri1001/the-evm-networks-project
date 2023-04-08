import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const llama = {
    name: 'Llama Nodes',
    provider: 'llama',
    url: 'https://llamanodes.com/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://llamanodes.notion.site/Privacy-Practices-f20fd8fdd02a469d9d4f42a5989bb936',
    ],
} as const satisfies RpcNodeProvider

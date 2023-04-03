import { type RpcNodeProvider } from '../utils/interfaces'

export const llama = {
    provider: 'Llama Nodes',
    url: 'https://llamanodes.com/',
    privacyPolicy: [
        'https://llamanodes.notion.site/Privacy-Practices-f20fd8fdd02a469d9d4f42a5989bb936',
    ],
} as const satisfies RpcNodeProvider

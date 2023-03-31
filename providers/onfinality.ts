import { type RpcNodeProvider } from '../utils/interfaces'

export const onfinality = {
    provider: 'OnFinality',
    url: 'https://onfinality.io/',
    privacyPolicy: ['https://onfinality.io/privacy/'],
} as const satisfies RpcNodeProvider

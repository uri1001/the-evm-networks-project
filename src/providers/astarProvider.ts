import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const astarProvider = {
    name: 'Astar',
    provider: 'astarProvider',
    url: 'https://astar.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://forum.astar.network/privacy/'],
} as const satisfies RpcNodeProvider

import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const astarProvider = {
    name: 'Astar',
    provider: 'astarProvider',
    url: 'https://astar.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://forum.astar.network/privacy/'],
} as const satisfies RpcNodeProvider

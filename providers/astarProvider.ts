import { type RpcNodeProvider } from '../utils/interfaces'

export const astarProvider = {
    provider: 'Astar',
    url: 'https://astar.network/',
    privacyPolicy: ['https://forum.astar.network/privacy/'],
} as const satisfies RpcNodeProvider

import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const dfkProvider = {
    name: 'DeFi Kingdomcs Avalanche Subnet',
    provider: 'dfkProvider',
    url: 'https://defikingdoms.com',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [''],
} as const satisfies RpcProvider

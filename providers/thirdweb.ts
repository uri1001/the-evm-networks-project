import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const thirdweb = {
    provider: 'ThirdWeb',
    url: 'https://thirdweb.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://thirdweb.com/thirdweb_Privacy_Policy_May_2022.pdf'],
} as const satisfies RpcNodeProvider

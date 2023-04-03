import { type RpcNodeProvider } from '../utils/interfaces'

export const thirdweb = {
    provider: 'ThirdWeb',
    url: 'https://thirdweb.com/',
    privacyPolicy: ['https://thirdweb.com/thirdweb_Privacy_Policy_May_2022.pdf'],
} as const satisfies RpcNodeProvider

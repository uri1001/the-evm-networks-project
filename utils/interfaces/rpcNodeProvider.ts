interface RpcNodeProvider {
    provider: string
    url: string
    privacyPolicy: readonly string[]
}

export default RpcNodeProvider

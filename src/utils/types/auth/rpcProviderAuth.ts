// {
//     infura: {
//         privateKey: '<infura-private-key>',
//         projectId: '<infura-project-id>'
//     },
//     alchemy: {
//         privateKey: '<alchemy-private-key>',
//     },
// }

type RpcProviderAuth = Record<
    string,
    {
        privateKey: string
        projectId?: string
    }
>

export default RpcProviderAuth

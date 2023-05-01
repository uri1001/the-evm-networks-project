import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { dfkProvider, pokt } from '../providers'

export const dfk = {
    id: 53935,
    name: 'DFK Avalanche Subnet',
    network: 'dfk',
    infoUrl: 'https://defikingdoms.com',
    docsUrl: 'https://build.defikingdoms.com',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-53935.json',
    nativeCurrency: {
        name: 'Jewel',
        symbol: 'JEWEL',
        uSymbol: 'aJEWEL',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [`https://avax-dfk.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'pokt',
            http: ['https://avax-dfk-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        dfk: {
            rpcNode: 'dfk',
            http: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
            provider: dfkProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
            provider: dfkProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
            provider: dfkProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        dfkScan: {
            name: 'DFK Subnet Scan',
            blockExplorer: 'dfkScan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://subnets.avax.network/defi-kingdoms',
        },
        default: {
            name: 'DFK Subnet Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://subnets.avax.network/defi-kingdoms',
        },
    },
    testnet: false,
} as const satisfies Network

import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { okx, pokt } from '../providers'

export const okc = {
    id: 66,
    name: 'OKT Chain',
    network: 'okc',
    infoUrl: 'https://www.okex.com/oktc',
    docsUrl: 'https://www.okx.com/oktc/docs/dev/quick-start/overview',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-66.json',
    nativeCurrency: {
        name: 'OKT',
        symbol: 'OKT',
        uSymbol: 'aOKT',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://oKc-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        okex: {
            rpcNode: 'okex',
            type: EndpointType.Public,
            http: ['https://exchainrpc.okex.org'],
            provider: okx,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://exchainrpc.okex.org'],
            provider: okx,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://exchainrpc.okex.org'],
            provider: okx,
        },
    },
    blockExplorers: {
        oklink: {
            name: 'Oklink OKT Chain',
            blockExplorer: 'oklink',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.oklink.com/oktc',
            apiUrl: 'https://www.oklink.com',
            docsUrl: 'https://www.oklink.com/docs/en/#overview',
        },
        default: {
            name: 'Oklink OKT Chain',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.oklink.com/oktc',
            apiUrl: 'https://www.oklink.com',
            docsUrl: 'https://www.oklink.com/docs/en/#overview',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 10364792,
            deployTxHash: '0xc8cd3ea6ef045f598c9cd724e58bc31f6e9dcc3688d55a5244654bbeed9d69d8',
        },
    },
    testnet: false,
} as const satisfies Network

import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { okx } from '../providers'

export const okc = {
    id: 66,
    name: 'OKC',
    network: 'okc',
    infoUrl: 'https://www.okex.com/okc/',
    docsUrl: 'https://www.okx.com/oktc/build/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-66.json',
    nativeCurrency: {
        decimals: 18,
        name: 'OKT',
        uSymbol: 'aOKT',
        symbol: 'OKT',
    },
    rpcNodes: {
        okex: {
            http: ['https://exchainrpc.okex.org/'],
            provider: okx,
            authenticated: false,
        },
        public: {
            http: ['https://exchainrpc.okex.org/'],
            provider: okx,
            authenticated: false,
        },
        default: {
            http: ['https://exchainrpc.okex.org/'],
            provider: okx,
            authenticated: false,
        },
    },
    blockExplorers: {
        oklink: {
            name: 'Oklink',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.oklink.com/okc/',
            apiUrl: 'https://www.oklink.com/',
            docsUrl: 'https://www.oklink.com/docs/en/#overview',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Oklink',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.oklink.com/okc/',
            apiUrl: 'https://www.oklink.com/',
            docsUrl: 'https://www.oklink.com/docs/en/#overview',
            standard: BlockExplorerStandard.TBD,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 10364792,
        },
    },
    testnet: false,
} as const satisfies Network

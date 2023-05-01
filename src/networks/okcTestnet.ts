import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { okx } from '../providers'

export const okcTestnet = {
    id: 65,
    name: 'OKT Testnet Chain',
    network: 'okcTestnet',
    infoUrl: 'https://www.okex.com/oktc',
    docsUrl: 'https://www.okx.com/oktc/docs/dev/quick-start/overview',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-65.json',
    nativeCurrency: {
        name: 'Testnet OKT',
        symbol: 'tOKT',
        uSymbol: 'atOKT',
        decimals: 18,
    },
    rpcNodes: {
        okex: {
            rpcNode: 'okex',
            http: ['https://exchaintestrpc.okex.org'],
            provider: okx,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://exchaintestrpc.okex.org'],
            provider: okx,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://exchaintestrpc.okex.org'],
            provider: okx,
            authenticated: false,
        },
    },
    blockExplorers: {
        oklink: {
            name: 'Oklink OKT Testnet Chain',
            blockExplorer: 'oklink',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.oklink.com/oktc-test',
            apiUrl: 'https://www.oklink.com',
            docsUrl: 'https://www.oklink.com/docs/en/#overview',
        },
        default: {
            name: 'Oklink OKT Testnet Chain',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.oklink.com/oktc-test',
            apiUrl: 'https://www.oklink.com',
            docsUrl: 'https://www.oklink.com/docs/en/#overview',
        },
    },
    testnet: true,
    mainnetId: 66,
} as const satisfies Network

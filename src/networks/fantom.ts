import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ankr, blast, fantomProvider, omnia, onerpc, publicnode, quicknode } from '../providers'

export const fantom = {
    id: 250,
    name: 'Fantom Opera',
    network: 'fantom',
    infoUrl: 'https://fantom.foundation/',
    docsUrl: 'https://docs.fantom.foundation/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-250.json',
    nativeCurrency: {
        name: 'Fantom',
        symbol: 'FTM',
        uSymbol: 'aFTM',
        decimals: 18,
    },
    rpcNodes: {
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/fantom/mainnet/public/'],
            provider: omnia,
            authenticated: false,
        },
        onerpc: {
            http: ['https://1rpc.io/ftm/'],
            provider: onerpc,
            authenticated: false,
        },
        publicnode: {
            http: ['https://fantom.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/fantom/'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            http: ['https://fantom-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        fantom: {
            http: [
                'https://rpcapi.fantom.network/',
                'https://rpc.fantom.network/',
                'https://rpc2.fantom.network/',
                'https://rpc3.fantom.network/',
            ],
            provider: fantomProvider,
            authenticated: false,
        },
        public: {
            http: [
                'https://rpcapi.fantom.network/',
                'https://rpc.fantom.network/',
                'https://rpc2.fantom.network/',
                'https://rpc3.fantom.network/',
            ],
            provider: fantomProvider,
            authenticated: false,
        },
        default: {
            http: [
                'https://rpcapi.fantom.network/',
                'https://rpc.fantom.network/',
                'https://rpc2.fantom.network/',
                'https://rpc3.fantom.network/',
            ],
            provider: fantomProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        oklink: {
            name: 'Fantom Oklink Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.oklink.com/ftm/',
            apiUrl: 'https://www.oklink.com/',
            docsUrl: 'https://www.oklink.com/docs/',
            standard: BlockExplorerStandard.TBD,
        },
        ftmExplorer: {
            name: 'Fantom Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.fantom.network/',
            standard: BlockExplorerStandard.TBD,
        },
        ftmScan: {
            name: 'FTMScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://ftmscan.com/',
            apiUrl: 'https://api.ftmscan.com/',
            docsUrl: 'https://docs.ftmscan.com/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'FTMScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://ftmscan.com/',
            apiUrl: 'https://api.ftmscan.com/',
            docsUrl: 'https://docs.ftmscan.com/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 33001987,
        },
    },
    testnet: false,
} as const satisfies Network

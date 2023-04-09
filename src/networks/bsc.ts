import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ankr, binance, omnia, onerpc, pokt, publicnode, quicknode } from '../providers'

export const bsc = {
    id: 56,
    name: 'BNB Smart Chain',
    network: 'bsc',
    infoUrl: 'https://www.bnbchain.org/',
    docsUrl: 'https://docs.bnbchain.org/docs/overview/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-56.json',
    nativeCurrency: {
        name: 'Build & Build',
        symbol: 'BNB',
        uSymbol: 'Jager',
        decimals: 18,
    },
    rpcNodes: {
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        onerpc: {
            http: ['https://1rpc.io/bnb/'],
            provider: onerpc,
            authenticated: false,
        },
        pokt: {
            http: ['https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d/'],
            provider: pokt,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/bsc/mainnet/public/'],
            provider: omnia,
            authenticated: false,
        },
        publicnode: {
            http: ['https://bsc.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/bsc/'],
            provider: ankr,
            authenticated: false,
        },
        binance: {
            http: ['https://bsc-dataseed.binance.org/'],
            provider: binance,
            authenticated: false,
        },
        public: {
            http: ['https://bsc-dataseed.binance.org/'],
            provider: binance,
            authenticated: false,
        },
        default: {
            http: ['https://bsc-dataseed.binance.org/'],
            provider: binance,
            authenticated: false,
        },
    },
    blockExplorers: {
        bscScan: {
            name: 'BscScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://bscscan.com/',
            apiUrl: 'https://api.bscscan.com/',
            docsUrl: 'https://docs.bscscan.com/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'BscScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://bscscan.com/',
            apiUrl: 'https://api.bscscan.com/',
            docsUrl: 'https://docs.bscscan.com/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452,
        },
    },
    testnet: false,
} as const satisfies Network

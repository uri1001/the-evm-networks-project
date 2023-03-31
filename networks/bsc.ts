import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, binance, omnia, onerpc, pokt, publicnode } from '../providers'

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
        decimals: 18,
    },
    rpcNodes: {
        onerpc: {
            http: ['https://1rpc.io/bnb/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        pokt: {
            http: ['https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d/'],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/bsc/mainnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        publicnode: {
            http: ['https://bsc.publicnode.com/'],
            provider: publicnode,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/bsc/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        binance: {
            http: ['https://bsc-dataseed.binance.org/'],
            provider: binance,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://bsc-dataseed.binance.org/'],
            provider: binance,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://bsc-dataseed.binance.org/'],
            provider: binance,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
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

import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, omnia } from '../providers'

export const fantomTestnet = {
    id: 4002,
    name: 'Fantom Testnet',
    network: 'fantom-testnet',
    infoUrl: 'https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet/',
    docsUrl: 'https://docs.fantom.foundation/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4002.json',
    nativeCurrency: {
        name: 'Fantom',
        symbol: 'FTM',
        decimals: 18,
    },
    rpcNodes: {
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/fantom/testnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/fantom_testnet/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blast: {
            http: ['https://fantom-testnet.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        fantom: {
            http: ['https://rpc.testnet.fantom.network/'],
            provider: fantomProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://rpc.testnet.fantom.network/'],
            provider: fantomProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://rpc.testnet.fantom.network/'],
            provider: fantomProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        ftmScan: {
            name: 'Testnet FTMScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.ftmscan.com/',
            apiUrl: 'https://api-testnet.ftmscan.com/',
            docsUrl: 'https://docs.ftmscan.com/v/testnet-ftmscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Testnet FTMScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.ftmscan.com/',
            apiUrl: 'https://api-testnet.ftmscan.com/',
            docsUrl: 'https://docs.ftmscan.com/v/testnet-ftmscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 8328688,
        },
    },
    testnet: true,
} as const satisfies Network

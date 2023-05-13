import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, blast, fantomProvider, omnia } from '../providers'

export const fantomTestnet = {
    id: 4002,
    name: 'Fantom Testnet',
    network: 'fantomTestnet',
    infoUrl: 'https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet',
    docsUrl: 'https://docs.fantom.foundation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4002.json',
    nativeCurrency: {
        name: 'Fantom',
        symbol: 'FTM',
        uSymbol: 'aFTM',
        decimals: 18,
    },
    rpcNodes: {
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/fantom/testnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/fantom/testnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/fantom/testnet/public'],
            provider: omnia,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/fantom_testnet/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/fantom_testnet'],
            provider: ankr,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://fantom-testnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://fantom-testnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://fantom-testnet.public.blastapi.io'],
            type: EndpointType.Public,
            wss: ['wss://fantom-testnet.public.blastapi.io'],
            provider: blast,
        },
        fantom: {
            rpcNode: 'fantom',
            type: EndpointType.Public,
            http: ['https://rpc.testnet.fantom.network'],
            provider: fantomProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.testnet.fantom.network'],
            provider: fantomProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.testnet.fantom.network'],
            provider: fantomProvider,
        },
    },
    blockExplorers: {
        ftmscan: {
            name: 'Testnet FTMScan',
            blockExplorer: 'ftmscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.ftmscan.com',
            apiUrl: 'https://api-testnet.ftmscan.com/api',
            docsUrl: 'https://docs.ftmscan.com/v/testnet-ftmscan',
        },
        default: {
            name: 'Testnet FTMScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.ftmscan.com',
            apiUrl: 'https://api-testnet.ftmscan.com/api',
            docsUrl: 'https://docs.ftmscan.com/v/testnet-ftmscan',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 8328688,
            deployTxHash: '0x56a7d21cd8d675d5ca22fb3952f1da6ba722130e42c878910507c5d4f2e727ac',
        },
    },
    testnet: true,
    mainnetId: 250,
} as const satisfies Network

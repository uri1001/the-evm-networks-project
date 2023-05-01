import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: ['https://endpoints.omniatech.io/v1/fantom/testnet/public'],
            provider: omnia,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/fantom_testnet'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://fantom-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://fantom-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://fantom-testnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        fantom: {
            rpcNode: 'fantom',
            http: ['https://rpc.testnet.fantom.network'],
            provider: fantomProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.testnet.fantom.network'],
            provider: fantomProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.testnet.fantom.network'],
            provider: fantomProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        ftmScan: {
            name: 'Testnet FTMScan',
            blockExplorer: 'ftmScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.ftmscan.com',
            apiUrl: 'https://api-testnet.ftmscan.com',
            docsUrl: 'https://docs.ftmscan.com/v/testnet-ftmscan',
        },
        default: {
            name: 'Testnet FTMScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.ftmscan.com',
            apiUrl: 'https://api-testnet.ftmscan.com',
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

import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    infura,
    omnia,
    onerpc,
    optimismProvider,
    quicknode,
    thirdweb,
} from '../providers'

export const optimisticEthereum = {
    id: 10,
    name: 'Optimism',
    network: 'optimism',
    infoUrl: 'https://optimism.io/',
    docsUrl: 'https://community.optimism.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-10.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://opt-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://opt-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://optimism-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        thirdweb: {
            http: ['https://optimism.rpc-staging.thirdweb.com'],
            provider: thirdweb,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/optimism/'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            http: ['https://optimism-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://optimism.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        onerpc: {
            http: ['https://1rpc.io/op/'],
            provider: onerpc,
            authenticated: false,
        },
        omniatech: {
            http: ['https://endpoints.omniatech.io/v1/op/mainnet/public/'],
            provider: omnia,
            authenticated: false,
        },
        optimism: {
            http: ['https://mainnet.optimism.io/'],
            provider: optimismProvider,
            authenticated: false,
        },
        public: {
            http: ['https://mainnet.optimism.io/'],
            provider: optimismProvider,
            authenticated: false,
        },
        default: {
            http: ['https://mainnet.optimism.io/'],
            provider: optimismProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        optimismScan: {
            name: 'Optimism Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://optimistic.etherscan.io/',
            apiUrl: 'https://api-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimism.etherscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Optimism Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://optimistic.etherscan.io/',
            apiUrl: 'https://api-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimism.etherscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
        },
    },
    testnet: false,
} as const satisfies Network

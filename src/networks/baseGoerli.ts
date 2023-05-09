import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { baseProvider, blast, lava, onerpc } from '../providers'

export const baseGoerli = {
    id: 84531,
    name: 'Base Goerli',
    network: 'baseGoerli',
    infoUrl: 'https://base.org',
    docsUrl: 'https://docs.base.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-84531.json',
    nativeCurrency: {
        name: 'Base Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/baset/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/baset/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/base-goerli'],
            provider: onerpc,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://base-goerli.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://base-goerli.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://base-goerli.public.blastapi.io'],
            wss: ['wss://base-goerli.public.blastapi.io'],
            provider: blast,
        },
        base: {
            rpcNode: 'base',
            type: EndpointType.Public,
            http: ['https://goerli.base.org'],
            provider: baseProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://goerli.base.org'],
            provider: baseProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://goerli.base.org'],
            provider: baseProvider,
        },
    },
    blockExplorers: {
        baseExplorer: {
            name: 'Base Goerli Explorer',
            blockExplorer: 'baseExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://base-goerli.blockscout.com',
            apiUrl: 'https://eth-goerli.blockscout.com/api',
            docsUrl: 'https://docs.blockscout.com/for-users/api/rpc-endpoints',
        },
        basescan: {
            name: 'Basescan Goerli',
            blockExplorer: 'basescan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.basescan.org',
            apiUrl: 'https://api-goerli.basescan.org/api',
            docsUrl: 'https://goerli.basescan.org/apis',
        },
        default: {
            name: 'Basescan Goerli',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.basescan.or/',
            apiUrl: 'https://api-goerli.basescan.org/api',
            docsUrl: 'https://goerli.basescan.org/apis',
        },
    },
    testnet: true,
    mainnetId: 8453,
} as const satisfies Network

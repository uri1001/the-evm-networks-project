import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    infura,
    llama,
    omnia,
    onerpc,
    onfinality,
    pokt,
    polygonProvider,
    publicnode,
    quicknode,
} from '../providers'

export const polygon = {
    id: 137,
    name: 'Polygon',
    network: 'matic',
    infoUrl: 'https://polygon.technology/',
    docsUrl: 'https://wiki.polygon.technology/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-137.json',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://polygon-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygon-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://polygon-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        blast: {
            http: ['https://polygon-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://polygon.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/polygon/'],
            provider: ankr,
            authenticated: false,
        },
        onfinality: {
            http: ['https://polygon.api.onfinality.io/public/'],
            provider: onfinality,
            authenticated: false,
        },
        onerpc: {
            http: ['https://1rpc.io/matic/'],
            provider: onerpc,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/matic/mainnet/public/'],
            provider: omnia,
            authenticated: false,
        },
        pokt: {
            http: ['https://poly-rpc.gateway.pokt.network/'],
            provider: pokt,
            authenticated: false,
        },
        publicnode: {
            http: ['https://polygon-bor.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        llama: {
            http: ['https://polygon.llamarpc.com/'],
            wss: ['wss://polygon.llamarpc.com/'],
            provider: llama,
            authenticated: false,
        },
        polygonProvider: {
            http: ['https://polygon-rpc.com/'],
            provider: polygonProvider,
            authenticated: false,
        },
        public: {
            http: ['https://polygon-rpc.com/'],
            provider: polygonProvider,
            authenticated: false,
        },
        default: {
            http: ['https://polygon-rpc.com/'],
            provider: polygonProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://polygonscan.com/',
            apiUrl: 'https://api.polygonscan.com/',
            docsUrl: 'https://docs.polygonscan.com/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://polygonscan.com/',
            apiUrl: 'https://api.polygonscan.com/',
            docsUrl: 'https://docs.polygonscan.com/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: false,
} as const satisfies Network

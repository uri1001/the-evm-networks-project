import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

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
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://polygon-mainnet.g.alchemy.com/v2/'],
            wss: ['wss://polygon-mainnet.g.alchemy.com/v2/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        infura: {
            http: ['https://polygon-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        blast: {
            http: ['https://polygon-mainnet.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blockpi: {
            http: ['https://polygon.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/polygon/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onfinality: {
            http: ['https://polygon.api.onfinality.io/public/'],
            provider: onfinality,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onerpc: {
            http: ['https://1rpc.io/matic/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/matic/mainnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        pokt: {
            http: ['https://poly-rpc.gateway.pokt.network/'],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        publicnode: {
            http: ['https://polygon-bor.publicnode.com/'],
            provider: publicnode,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        llama: {
            http: ['https://polygon.llamarpc.com/'],
            wss: ['wss://polygon.llamarpc.com/'],
            provider: llama,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        polygonProvider: {
            http: ['https://polygon-rpc.com/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://polygon-rpc.com/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://polygon-rpc.com/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
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

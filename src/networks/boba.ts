import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { bobaProvider, pokt } from '../providers'

export const boba = {
    id: 288,
    name: 'Boba Network',
    network: 'boba',
    infoUrl: 'https://boba.network',
    docsUrl: 'https://docs.boba.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-288.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://boba-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f'],
            provider: pokt,
        },
        boba: {
            rpcNode: 'boba',
            type: EndpointType.Public,
            http: ['https://mainnet.boba.network', 'https://lightning-replica.boba.network'],
            provider: bobaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://mainnet.boba.network', 'https://lightning-replica.boba.network'],
            provider: bobaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://mainnet.boba.network', 'https://lightning-replica.boba.network'],
            provider: bobaProvider,
        },
    },
    blockExplorers: {
        bobascan: {
            name: 'BOBAScan',
            blockExplorer: 'bobascan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://bobascan.com',
            apiUrl: 'https://api.bobascan.com/api',
            docsUrl: 'https://bobascan.com/apis',
        },
        default: {
            name: 'BOBAScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://bobascan.com',
            apiUrl: 'https://api.bobascan.com/api',
            docsUrl: 'https://bobascan.com/apis',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 446859,
            deployTxHash: '0x1e3fe8abc96fe4cdcc9a699869b2ab0361cf484819e2bfbe2e6614598c0057fb',
        },
    },
    testnet: false,
} as const satisfies Network

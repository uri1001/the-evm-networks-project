import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { bobaProvider, pokt } from '../providers'

export const boba = {
    id: 288,
    name: 'Boba Network',
    network: 'boba',
    infoUrl: 'https://boba.network/',
    docsUrl: 'https://docs.boba.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-288.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            http: ['https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f'],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        boba: {
            http: ['https://mainnet.boba.network/', 'https://lightning-replica.boba.network/'],
            provider: bobaProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://mainnet.boba.network/', 'https://lightning-replica.boba.network/'],
            provider: bobaProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://mainnet.boba.network/', 'https://lightning-replica.boba.network/'],
            provider: bobaProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        bobaExplorer: {
            name: 'BOBA Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockexplorer.bobabeam.boba.network/',
            apiUrl: 'https://blockexplorer.bobabeam.boba.network/api/',
            docsUrl: 'https://blockexplorer.bobabeam.boba.network/api-docs/',
            standard: BlockExplorerStandard.None,
        },
        bobascan: {
            name: 'BOBAScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://bobascan.com/',
            apiUrl: 'https://api.bobascan.com/api/',
            docsUrl: 'https://bobascan.com/apis/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'BOBAScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://bobascan.com/',
            apiUrl: 'https://api.bobascan.com/api/',
            docsUrl: 'https://bobascan.com/apis/',
            standard: BlockExplorerStandard.None,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 446859,
        },
    },
    testnet: false,
} as const satisfies Network

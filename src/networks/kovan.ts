import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { infura, kovanProvider, pokt } from '../providers'

export const kovan = {
    id: 42,
    name: 'Kovan Ethereum Testnet',
    network: 'kovan',
    infoUrl: 'https://kovan-testnet.github.io/website',
    docsUrl: 'https://kovan-testnet.github.io/website/proposal',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42.json',
    nativeCurrency: {
        name: 'Kovan Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://kovan.infura.io/v3/${EndpointAuth.Key}`],
            wss: [`wss://kovan.infura.io/ws/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://poa-kovan.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://eth-kovan-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        kovan: {
            rpcNode: 'kovan',
            type: EndpointType.Public,
            http: ['https://kovan.poa.network', 'http://kovan.poa.network:8545'],
            wss: ['ws://kovan.poa.network:8546'],
            provider: kovanProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://kovan.poa.network', 'http://kovan.poa.network:8545'],
            wss: ['ws://kovan.poa.network:8546'],
            provider: kovanProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://kovan.poa.network', 'http://kovan.poa.network:8545'],
            wss: ['ws://kovan.poa.network:8546'],
            provider: kovanProvider,
        },
    },
    blockExplorers: {
        kovanScan: {
            name: 'Kovan Etherescan',
            blockExplorer: 'kovanScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://kovan.etherscan.io',
        },
        default: {
            name: 'Kovan Etherescan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://kovan.etherscan.io',
        },
    },
    testnet: true,
    mainnetId: 1,
} as const satisfies Network

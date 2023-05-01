import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [`https://kovan.infura.io/v3/${EndpointAuth.PrivateKey}`],
            wss: [`wss://kovan.infura.io/ws/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        pokt: {
            rpcNode: 'pokt',
            http: [`https://poa-kovan.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://eth-kovan-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        kovan: {
            rpcNode: 'kovan',
            http: ['https://kovan.poa.network', 'http://kovan.poa.network:8545'],
            wss: ['ws://kovan.poa.network:8546'],
            provider: kovanProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://kovan.poa.network', 'http://kovan.poa.network:8545'],
            wss: ['ws://kovan.poa.network:8546'],
            provider: kovanProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://kovan.poa.network', 'http://kovan.poa.network:8545'],
            wss: ['ws://kovan.poa.network:8546'],
            provider: kovanProvider,
            authenticated: false,
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

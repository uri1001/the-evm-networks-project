import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    flashbots,
    infura,
    omnia,
    onfinality,
    quicknode,
    thirdweb,
} from '../providers'

export const goerli = {
    id: 5,
    name: 'Goerli',
    network: 'goerli',
    infoUrl: 'https://goerli.net/#about',
    docsUrl: 'https://github.com/eth-clients/goerli/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-5.json',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://eth-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://eth-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://goerli.infura.io/v3/${EndpointAuth.PrivateKey}`],
            wss: [`wss://goerli.infura.io/ws/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        thirdweb: {
            http: ['https://goerli.rpc-staging.thirdweb.com/'],
            provider: thirdweb,
            authenticated: false,
        },
        onfinality: {
            http: ['https://eth-goerli.api.onfinality.io/public/'],
            provider: onfinality,
            authenticated: false,
        },
        blast: {
            http: ['https://eth-goerli.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://goerli.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/eth_goerli/'],
            provider: ankr,
            authenticated: false,
        },
        flashbots: {
            http: ['https://relay-goerli.flashbots.net/'],
            provider: flashbots,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/eth/goerli/public/'],
            provider: omnia,
            authenticated: false,
        },
        public: {
            http: ['https://endpoints.omniatech.io/v1/eth/goerli/public/'],
            provider: omnia,
            authenticated: false,
        },
        default: {
            http: ['https://endpoints.omniatech.io/v1/eth/goerli/public/'],
            provider: omnia,
            authenticated: false,
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Goerli Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://goerli.etherscan.io/',
            apiUrl: 'https://api-goerli.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/goerli-etherscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Goerli Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://goerli.etherscan.io/',
            apiUrl: 'https://api-goerli.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/goerli-etherscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xA292E2E58d4ddEb29C33c63173d0E8B7a2A4c62e',
            blockCreated: 8610406,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670,
        },
    },
    testnet: true,
} as const satisfies Network

import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    flashbots,
    infura,
    lava,
    omnia,
    onfinality,
    pokt,
    thirdweb,
} from '../providers'

export const goerli = {
    id: 5,
    name: 'Goerli',
    network: 'goerli',
    infoUrl: 'https://goerli.net/#about',
    docsUrl: 'https://github.com/eth-clients/goerli',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-5.json',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            type: EndpointType.Authenticated,
            http: [`https://eth-goerli.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://eth-goerli.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://goerli.infura.io/v3/${EndpointAuth.Key}`],
            wss: [`wss://goerli.infura.io/ws/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/gth1/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/gth1/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [
                `https://eth-goerli.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://goerli-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://eth-goerli-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        thirdweb: {
            rpcNode: 'thirdweb',
            type: EndpointType.Public,
            http: ['https://goerli.rpc-staging.thirdweb.com'],
            provider: thirdweb,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: ['https://eth-goerli.api.onfinality.io/public'],
            provider: onfinality,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://eth-goerli.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://eth-goerli.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://eth-goerli.public.blastapi.io'],
            wss: ['wss://eth-goerli.public.blastapi.io'],
            provider: blast,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://goerli.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://goerli.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://goerli.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        flashbots: {
            rpcNode: 'flashbots',
            type: EndpointType.Public,
            http: ['https://relay-goerli.flashbots.net'],
            provider: flashbots,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/eth/goerli/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/eth/goerli/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/eth/goerli/public'],
            provider: omnia,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/eth_goerli/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/eth_goerli'],
            provider: ankr,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/eth_goerli'],
            provider: omnia,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/eth_goerli'],
            provider: omnia,
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Goerli Etherscan',
            blockExplorer: 'etherscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.etherscan.io',
            apiUrl: 'https://api-goerli.etherscan.io',
            docsUrl: 'https://docs.etherscan.io/v/goerli-etherscan',
        },
        default: {
            name: 'Goerli Etherscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.etherscan.io',
            apiUrl: 'https://api-goerli.etherscan.io',
            docsUrl: 'https://docs.etherscan.io/v/goerli-etherscan',
        },
    },
    contracts: {
        ensRegistry: {
            name: 'ENS Registry',
            contract: 'ensRegistry',
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            deployBlock: 2086611,
            deployTxHash: '0x408a700dd95c50c3b76f373047a9901185824dce4e99e3831f41a4cbbf0b4f1b',
        },
        ensUniversalResolver: {
            name: 'ENS Universal Resolver',
            contract: 'ensUniversalResolver',
            address: '0xA292E2E58d4ddEb29C33c63173d0E8B7a2A4c62e',
            deployBlock: 8610406,
            deployTxHash: '0xedd332c4ff23dec8cfa4fdd8014915a5e078d12b0b8fb4155d46cb5d989fb365',
        },
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 6507670,
            deployTxHash: '0x3153c4298595bf85f1bf2113fb05b7807fbd4e1ff6fbdc1a42ad918106c497ea',
        },
    },
    testnet: true,
    mainnetId: 1,
} as const satisfies Network

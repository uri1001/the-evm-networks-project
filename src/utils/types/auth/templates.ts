import type BlockExplorerAuth from './blockExplorerAuth'
import type RpcProviderAuth from './rpcProviderAuth'

export const rpcProviderAuthTemplate: RpcProviderAuth = {
    alchemy: {
        key: '<alchemy-rpc-api-key>',
    },
    infura: {
        key: '<infura-rpc-api-key>',
    },
    pokt: {
        key: '<pokt-rpc-api-key>',
    },
    lava: {
        key: '<lava-rpc-api-key>',
    },
    ankr: {
        key: '<ankr-rpc-api-key>',
    },
    blast: {
        key: '<blast-rpc-api-key>',
    },
    onerpc: {
        key: '<onerpc-rpc-api-key>',
    },
    omnia: {
        mainnet: '<omnia-mainnet-rpc-api-key>',
        goerli: '<omnia-goerli-rpc-api-key>',
        sepolia: '<omnia-sepolia-rpc-api-key>',
        bsc: '<omnia-bsc-rpc-api-key>',
        bscTestnet: '<omnia-bsc-testnet-rpc-api-key>',
        avalanche: '<omnia-avalanche-rpc-api-key>',
        avalancheFujiTestnet: '<omnia-avalanche-fuji-rpc-api-key>',
        polygon: '<omnia-polygon-rpc-api-key>',
        polygonMumbai: '<omnia-polygon-mumbai-rpc-api-key>',
        arbitrum: '<omnia-arbitrum-rpc-api-key>',
        arbitrumGoerli: '<omnia-arbitrum-goerli-rpc-api-key>',
        optimisticEthereum: '<omnia-optimism-rpc-api-key>',
        optimisticGoerli: '<omnia-optimism-goerli-rpc-api-key>',
        aurora: '<omnia-aurora-rpc-api-key>',
        auroraTestnet: '<omnia-aurora-testnet-rpc-api-key>',
        fantom: '<omnia-fantom-rpc-api-key>',
        fantomTestnet: '<omnia-fantom-testnet-rpc-api-key>',
    },
    blockpi: {
        mainnet: '<blockpi-mainnet-rpc-api-key>',
        goerli: '<blockpi-goerli-rpc-api-key>',
        sepolia: '<blockpi-sepolia-rpc-api-key>',
        polygon: '<blockpi-polygon-rpc-api-key>',
        polygonMumbai: '<blockpi-polygon-mumbai-rpc-api-key>',
        klaytn: '<blockpi-klaytn-rpc-api-key>',
        klaytnTestnet: '<blockpi-klaytn-testnet-rpc-api-key>',
        arbitrum: '<blockpi-arbitrum-rpc-api-key>',
        optimisticEthereum: '<blockpi-optimism-rpc-api-key>',
        scrollTestnet: '<blockpi-scroll-testnet-rpc-api-key>',
        bsc: '<blockpi-bsc-rpc-api-key>',
        gnosis: '<blockpi-gnosis-rpc-api-key>',
        avalanche: '<blockpi-avalanche-rpc-api-key>',
        fantom: '<blockpi-fantom-rpc-api-key>',
        cronos: '<blockpi-cronos-rpc-api-key>',
        oasys: '<blockpi-oasys-rpc-api-key>',
    },
}

export const blockExplorerAuthTemplate: BlockExplorerAuth = {
    arbitrumGoerli: {
        arbiscan: '<arbitrum-etherscan-api-key>',
        default: '<arbitrum-etherscan-api-key>',
    },
    arbitrumOne: {
        arbiscan: '<arbitrum-etherscan-api-key>',
        default: '<arbitrum-etherscan-api-key>',
    },
    // aurora: {
    //     auroraExplorer: '<aurora-blockscout-api-key>',
    //     default: '<aurora-blockscout-api-key>',
    // },
    // auroraTestnet: {
    //     auroraExplorer: '<aurora-blockscout-api-key>',
    //     default: '<aurora-blockscout-api-key>',
    // },
    avalanche: {
        snowtrace: '<avalanche-etherscan-api-key>',
        default: '<avalanche-etherscan-api-key>',
    },
    avalancheFujiTestnet: {
        snowtrace: '<avalanche-etherscan-api-key>',
        default: '<avalanche-etherscan-api-key>',
    },
    // BaseScan Should Be Reviewed - Unable To Get API Key
    // baseGoerli: {
    //     baseExplorer: '<base-blockscout-api-key>',
    //     basescan: '<base-etherscan-api-key>',
    //     default: '<base-etherscan-api-key>',
    // },
    boba: {
        bobascan: '<boba-etherscan-api-key>',
        default: '<boba-etherscan-api-key>',
    },
    bobaTestnet: {
        bobascan: '<boba-etherscan-api-key>',
        default: '<boba-etherscan-api-key>',
    },
    // Explorer Not Working Currently
    // bronosTestnet: {
    //     bobascan: '<bronos-etherscan-api-key>',
    //     default: '<bronos-etherscan-api-key>',
    // },
    bsc: {
        bscscan: '<bsc-etherscan-api-key>',
        default: '<bsc-etherscan-api-key>',
    },
    bscTestnet: {
        bscscan: '<bsc-etherscan-api-key>',
        default: '<bsc-etherscan-api-key>',
    },
    celo: {
        celoscan: '<celo-etherscan-api-key>',
        celoExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    celoAlfajores: {
        celoscan: '<celo-etherscan-api-key>',
        celoExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    cronos: {
        cronosExplorer: '<no-auth>',
        cronosScan: '<cronos-etherscan-api-key>',
        default: '<cronos-etherscan-api-key>',
    },
    cronosTestnet: {
        cronosExplorer: '<no-auth>',
        cronosScan: '<cronos-etherscan-api-key>',
        default: '<cronos-etherscan-api-key>',
    },
    fantom: {
        ftmscan: '<fantom-etherscan-api-key>',
        default: '<fantom-etherscan-api-key>',
    },
    fantomTestnet: {
        ftmscan: '<fantom-etherscan-api-key>',
        default: '<fantom-etherscan-api-key>',
    },
    gnosis: {
        gnosisExplorer: '<gnosis-blockscout-api-key>',
        gnosisScan: '<gnosis-etherscan-api-key>',
        default: '<gnosis-etherscan-api-key>',
    },
    gnosisChiado: {
        gnosisExplorer: '<gnosis-chiado-blockscout-api-key>',
        default: '<gnosis-chiado-blockscout-api-key>',
    },
    goerli: {
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    kava: {
        kavaExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    kavaTestnet: {
        kavaExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    mainnet: {
        blockscout: '<mainnet-blockscout-api-key>',
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    metis: {
        metisExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    metisTestnet: {
        metisExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    milkomedaA1: {
        milkomedaExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    milkomedaA1Testnet: {
        milkomedaExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    milkomedaC1: {
        milkomedaExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    milkomedaC1Testnet: {
        milkomedaExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    moonbaseAlpha: {
        moonbaseExplorer: '<no-auth>',
        moonscan: '<moonbeam-etherscan-api-key>',
        default: '<moonbeam-etherscan-api-key>',
    },
    moonbeam: {
        moonbeamExplorer: '<no-auth>',
        moonscan: '<moonbeam-etherscan-api-key>',
        default: '<moonbeam-etherscan-api-key>',
    },
    moonriver: {
        moonriverExplorer: '<no-auth>',
        moonscan: '<moonriver-etherscan-api-key>',
        default: '<moonriver-etherscan-api-key>',
    },
    optimisticEthereum: {
        optimismExplorer: '<optimism-blockscout-api-key>',
        optimismscan: '<optimism-etherscan-api-key>',
        default: '<optimism-etherscan-api-key>',
    },
    optimisticGoerli: {
        optimismExplorer: '<optimism-goerli-blockscout-api-key>',
        optimismscan: '<optimism-etherscan-api-key>',
        default: '<optimism-etherscan-api-key>',
    },
    polygon: {
        polygonscan: '<polygon-etherscan-api-key>',
        default: '<polygon-etherscan-api-key>',
    },
    polygonMumbai: {
        polygonscan: '<polygon-etherscan-api-key>',
        default: '<polygon-etherscan-api-key>',
    },
    polygonZkEvm: {
        polygonscan: '<polygon-etherscan-api-key>',
        default: '<polygon-etherscan-api-key>',
    },
    polygonZkEvmTestnet: {
        polygonExplorer: '<no-auth>',
        polygonscan: '<polygon-etherscan-api-key>',
        default: '<polygon-etherscan-api-key>',
    },
    scrollTestnet: {
        scrollExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    sepolia: {
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    songbird: {
        songbirdExplorer: '<no-auth>',
        default: '<no-auth>',
    },
    songbirdTestnet: {
        costonExplorer: '<no-auth>',
        default: '<no-auth>',
    },
}

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
    aurora: {
        auroraExplorer: '<aurora-blockscout-api-key>',
        default: '<aurora-blockscout-api-key>',
    },
    auroraTestnet: {
        auroraExplorer: '<aurora-blockscout-api-key>',
        default: '<aurora-blockscout-api-key>',
    },
    avalanche: {
        snowtrace: '<avalanche-etherscan-api-key>',
        default: '<avalanche-etherscan-api-key>',
    },
    avalancheFujiTestnet: {
        snowtrace: '<avalanche-etherscan-api-key>',
        default: '<avalanche-etherscan-api-key>',
    },
    baseGoerli: {
        baseExplorer: '<base-blockscout-api-key>',
        basescan: '<base-etherscan-api-key>',
        default: '<base-etherscan-api-key>',
    },
    boba: {
        bobascan: '<boba-etherscan-api-key>',
        default: '<boba-etherscan-api-key>',
    },
    bobaTestnet: {
        bobascan: '<boba-etherscan-api-key>',
        default: '<boba-etherscan-api-key>',
    },
    bronosTestnet: {
        bobascan: '<bronos-etherscan-api-key>',
        default: '<bronos-etherscan-api-key>',
    },
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
        celoExplorer: '<celo-blockscout-api-key>',
        default: '<celo-blockscout-api-key>',
    },
    celoAlfajores: {
        celoscan: '<celo-etherscan-api-key>',
        celoExplorer: '<celo-blockscout-api-key>',
        default: '<celo-blockscout-api-key>',
    },
    cronos: {
        cronosExplorer: '<cronos-blockscout-api-key>',
        cronosScan: '<cronos-etherscan-api-key>',
        default: '<cronos-etherscan-api-key>',
    },
    cronosTestnet: {
        cronosExplorer: '<cronos-blockscout-api-key>',
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
        gnosisScan: '<gnosis-etherscan-api-key>',
        default: '<gnosis-etherscan-api-key>',
    },
    gnosisChiado: {
        gnosisExplorer: '<gnosis-blockscout-api-key>',
        default: '<gnosis-blockscout-api-key>',
    },
    goerli: {
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    kava: {
        kavaExplorer: '<kava-blockscout-api-key>',
        default: '<kava-blockscout-api-key>',
    },
    kavaTestnet: {
        kavaExplorer: '<kava-blockscout-api-key>',
        default: '<kava-blockscout-api-key>',
    },
    mainnet: {
        blockscout: '<mainnet-blockscout-api-key>',
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    metis: {
        metisExplorer: '<metis-blockscout-api-key>',
        default: '<metis-blockscout-api-key>',
    },
    metisTestnet: {
        metisExplorer: '<metis-blockscout-api-key>',
        default: '<metis-blockscout-api-key>',
    },
    milkomedaA1: {
        milkomedaExplorer: '<milkomeda-a1-blockscout-api-key>',
        default: '<milkomeda-a1-blockscout-api-key>',
    },
    milkomedaA1Testnet: {
        milkomedaExplorer: '<milkomeda-a1-blockscout-api-key>',
        default: '<milkomeda-a1-blockscout-api-key>',
    },
    milkomedaC1: {
        milkomedaExplorer: '<milkomeda-c1-blockscout-api-key>',
        default: '<milkomeda-c1-blockscout-api-key>',
    },
    milkomedaC1Testnet: {
        milkomedaExplorer: '<milkomeda-c1-blockscout-api-key>',
        default: '<milkomeda-c1-blockscout-api-key>',
    },
    moonbaseAlpha: {
        moonbaseExplorer: '<moonbeam-blockscout-api-key>',
        moonscan: '<moonbeam-etherscan-api-key>',
        default: '<moonbeam-etherscan-api-key>',
    },
    moonbeam: {
        moonbeamExplorer: '<moonbeam-blockscout-api-key>',
        moonscan: '<moonbeam-etherscan-api-key>',
        default: '<moonbeam-etherscan-api-key>',
    },
    moonriver: {
        moonriverExplorer: '<moonbeam-blockscout-api-key>',
        moonscan: '<moonbeam-etherscan-api-key>',
        default: '<moonbeam-etherscan-api-key>',
    },
    optimisticEthereum: {
        optimismExplorer: '<optimism-blockscout-api-key>',
        optimismscan: '<optimism-etherscan-api-key>',
        default: '<optimism-etherscan-api-key>',
    },
    optimisticGoerli: {
        optimismExplorer: '<optimism-blockscout-api-key>',
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
        polygonExplorer: '<polygon-blockscout-api-key>',
        polygonscan: '<polygon-etherscan-api-key>',
        default: '<polygon-etherscan-api-key>',
    },
    scrollTestnet: {
        scrollExplorer: '<scroll-blockscout-api-key>',
        default: '<scroll-blockscout-api-key>',
    },
    sepolia: {
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    songbird: {
        songbirdExplorer: '<songbird-blockscout-api-key>',
        default: '<songbird-blockscout-api-key>',
    },
    songbirdTestnet: {
        costonExplorer: '<coston-blockscout-api-key>',
        default: '<coston-blockscout-api-key>',
    },
}

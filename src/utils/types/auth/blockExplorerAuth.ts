// {
//     mainnet: {
//         etherscan: '<mainnet-etherscan-api-key>',
//         blockscout: '<mainnet-blockscout-api-key>',
//     },
//     polygonZkEvm: {
//         polygonScan: 'polygonzkevm-etherscan-api-key>',
//     },
// }

type blockExplorerAuth = Record<string, Record<string, string>>

export default blockExplorerAuth

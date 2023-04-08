import {
    formatAuthEndpoint,
    getNetwork,
    getNetworkId,
    getNetworkName,
    getNetworkRpcUrls,
    getProviderNetworks,
} from '.'

console.log(`\n\n-------------------------------`)
console.log(`--- formatAuthEndpoint Test ---`)
console.log(`-------------------------------\n\n`)

const e = 'https://arb-mainnet.g.alchemy.com/v2/<private-key>'
const priv = 'test1'
const prj = 'TEST-369'

console.log(formatAuthEndpoint(e, priv, prj))

console.log(formatAuthEndpoint(e, priv, prj))

console.log(`\n------------------------`)

// console.log(`\n\n---------------------------`)
// console.log(`--- getAllNetworkNames Test ---`)
// console.log(`---------------------------\n\n`)

// console.log(getAllNetworkNames())

// -----------------------------------------

// console.log(`\n------------------------`)

// console.log(`\n\n---------------------------`)
// console.log(`--- getAllNetworks Test ---`)
// console.log(`---------------------------\n\n`)

// console.log(getAllNetworks())

// -----------------------------------------

// console.log(`\n------------------------`)

// console.log(`\n\n----------------------------`)
// console.log(`--- getAllProviders Test ---`)
// console.log(`----------------------------\n\n`)

// console.log(getAllProviderNames())

// console.log(`\n------------------------`)

// -----------------------------------------

// console.log(`\n------------------------`)

// console.log(`\n\n----------------------------`)
// console.log(`--- getAllProviders Test ---`)
// console.log(`----------------------------\n\n`)

// console.log(getAllProviders())

// console.log(`\n------------------------`)

console.log(`\n\n----------------------------`)
console.log(`--- getNetwork Test ---`)
console.log(`----------------------------\n\n`)

console.log(getNetwork(1))
console.log(getNetwork('sepolia'))
console.log(getNetwork('polygon-zkevm-testnet'))
console.log(getNetwork('420'))

console.log(`------------------------\n`)

console.log(`\n\n----------------------------`)
console.log(`--- getNetworkId Test ---`)
console.log(`----------------------------\n\n`)

console.log(getNetworkId('sepolia'))
console.log(getNetworkId('polygon-zkevm-testnet'))
console.log(getNetworkId('420'))

console.log(`------------------------\n`)

console.log(`\n\n----------------------------`)
console.log(`--- getNetworkName Test ---`)
console.log(`----------------------------\n\n`)

console.log(getNetworkName(1))
console.log(getNetworkName('sepolia'))
console.log(getNetworkName('420'))

console.log(`------------------------\n`)

console.log(`\n\n----------------------------`)
console.log(`--- getNetworkRpcUrls Test ---`)
console.log(`----------------------------\n\n`)

console.log(getNetworkRpcUrls(1))
console.log(getNetworkRpcUrls('sepolia'))
console.log(getNetworkRpcUrls('polygon-zkevm-testnet'))
console.log(getNetworkRpcUrls('420'))

console.log(`------------------------\n`)

console.log(`\n\n----------------------------`)
console.log(`--- getProviderNetworks Test ---`)
console.log(`----------------------------\n\n`)

console.log(getProviderNetworks('ankr'))
console.log(getProviderNetworks('polygonProvider'))

console.log(`------------------------\n`)

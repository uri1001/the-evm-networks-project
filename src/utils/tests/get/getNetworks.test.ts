import { expect } from 'chai'

import { type NetworkFilter } from '../../types'

import {
    BlockExplorerStandard,
    BlockExplorerType,
    EndpointType,
    ProviderPrivacyLevel,
} from '../../../enums'

import getNetworks from '../../get/getNetworks'

describe('Get Networks Function Test', () => {
    //
    // Requests to Fetch Generic Overview over Networks DB
    // Number of Networks by Metric
    //
    const numNetworks = 95
    const numTestnets = 50

    const numNetworksWithHttp = 93
    const numNetworksWithWss = 50
    const numNetworksWithRpcPublic = 90
    const numNetworksWithRpcAuth = 53
    const numNetworksWithRpcLocal = 3
    const numNetworksWithRpcNull = 2

    const numNetworksWithRpcProviderPrivacy = 45
    const numNetworksWithRpcProviderPartialPrivacy = 40
    const numNetworksWithRpcProviderNoPrivacy = 12
    const numNetworksWithRpcProviderNoPrivacyInfo = 7
    const numNetworksWithRpcProviderNullPrivacy = 0

    const numNetworksWithBlockExplorer = 92
    const numNetworksWithBlockExplorerApi = 61

    const numNetworksWithBlockExplorerEip3091Standard = 79
    const numNetworksWithBlockExplorerNoStandard = 15
    const numNetworksWithBlockExplorerNullStandard = 4

    const numNetworksWithBlockExplorerEtherscanType = 32
    const numNetworksWithBlockExplorerBlockscoutType = 44

    const numNetworksWithContracts = 30
    const numNetworksWithEnsRegistryContracts = 2
    const numNetworksWithEnsUniversalResolverContracts = 2
    const numNetworksWithMulticallContracts = 30
    //
    describe('General Request Tests', () => {
        describe('Generic', () => {
            it(`Should return all networks - ${numNetworks} networks`, () => {
                const res = getNetworks()

                expect(res.length).to.equal(numNetworks)
            })

            it(`Should return all testnet networks - ${numTestnets} networks`, () => {
                const filter: NetworkFilter = { testnet: true }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numTestnets)
            })
        })
        describe('RPC Node Endpoint Type', () => {
            it(`Should return all networks with a http endpoint - ${numNetworksWithHttp} networks`, () => {
                const filter: NetworkFilter = { rpcNodes: { http: true } }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithHttp)
            })

            it(`Should return all networks with a wss endpoint - ${numNetworksWithWss} networks`, () => {
                const filter: NetworkFilter = { rpcNodes: { wss: true } }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithWss)
            })

            it(`Should return all networks with a public rpc endpoint - ${numNetworksWithRpcPublic} networks`, () => {
                const filter: NetworkFilter = {
                    rpcNodes: { type: [EndpointType.Public] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcPublic)
            })

            it(`Should return all networks with an authenticated rpc endpoint - ${numNetworksWithRpcAuth} networks`, () => {
                const filter: NetworkFilter = { rpcNodes: { type: [EndpointType.Authenticated] } }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcAuth)
            })

            it(`Should return all networks with a local rpc endpoint - ${numNetworksWithRpcLocal} networks`, () => {
                const filter: NetworkFilter = { rpcNodes: { type: [EndpointType.Local] } }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcLocal)
            })

            it(`Should return all networks with a null rpc endpoint - ${numNetworksWithRpcNull} networks`, () => {
                const filter: NetworkFilter = { rpcNodes: { type: ['null'] } }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcNull)
            })
        })
        describe('RPC Provider Privacy', () => {
            it(`Should return all networks with a privacy rpc endpoint - ${numNetworksWithRpcProviderPrivacy} networks`, () => {
                const filter: NetworkFilter = {
                    rpcNodes: { provider: { privacyLevel: [ProviderPrivacyLevel.Privacy] } },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcProviderPrivacy)
            })

            it(`Should return all networks with a partial privacy rpc endpoint - ${numNetworksWithRpcProviderPartialPrivacy} networks`, () => {
                const filter: NetworkFilter = {
                    rpcNodes: { provider: { privacyLevel: [ProviderPrivacyLevel.PartialPrivacy] } },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcProviderPartialPrivacy)
            })

            it(`Should return all networks with a no privacy rpc endpoint - ${numNetworksWithRpcProviderNoPrivacy} networks`, () => {
                const filter: NetworkFilter = {
                    rpcNodes: { provider: { privacyLevel: ['no privacy'] } },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcProviderNoPrivacy)
            })

            it(`Should return all networks with a no privacy info rpc endpoint - ${numNetworksWithRpcProviderNoPrivacyInfo} networks`, () => {
                const filter: NetworkFilter = {
                    rpcNodes: { provider: { privacyLevel: ['no info'] } },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcProviderNoPrivacyInfo)
            })

            it(`Should return all networks with a null privacy info rpc endpoint - ${numNetworksWithRpcProviderNullPrivacy} networks`, () => {
                const filter: NetworkFilter = {
                    rpcNodes: { provider: { privacyLevel: [ProviderPrivacyLevel.Null] } },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithRpcProviderNullPrivacy)
            })
        })
        describe('Generic Block Explorer', () => {
            it(`Should return all networks with a block explorer - ${numNetworksWithBlockExplorer} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: {},
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorer)
            })

            it(`Should return all networks with a block explorer API endpoint - ${numNetworksWithBlockExplorerApi} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: { apiUrl: true },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorerApi)
            })
        })
        describe('Block Explorer Standard', () => {
            it(`Should return all networks with a block explorer with EIP3091 standard - ${numNetworksWithBlockExplorerEip3091Standard} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: { standard: ['eip3091'] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorerEip3091Standard)
            })

            it(`Should return all networks with a block explorer with no standard - ${numNetworksWithBlockExplorerNoStandard} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: { standard: [BlockExplorerStandard.None] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorerNoStandard)
            })

            it(`Should return all networks with a block explorer with null standard - ${numNetworksWithBlockExplorerNullStandard} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: { standard: [BlockExplorerStandard.Null] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorerNullStandard)
            })
        })
        describe('Block Explorer Type', () => {
            it(`Should return all networks with a block explorer of etherscan type - ${numNetworksWithBlockExplorerEtherscanType} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: { type: [BlockExplorerType.Etherscan] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorerEtherscanType)
            })

            it(`Should return all networks with a block explorer of blockscout type - ${numNetworksWithBlockExplorerBlockscoutType} networks`, () => {
                const filter: NetworkFilter = {
                    blockExplorers: { type: ['blockscout'] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithBlockExplorerBlockscoutType)
            })
        })
        describe('Contracts', () => {
            it('Should return all networks with a contract', () => {
                const filter: NetworkFilter = {
                    contracts: {},
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithContracts)
            })

            it(`Should return all networks with a ENS registry contract - ${numNetworksWithEnsRegistryContracts} networks`, () => {
                const filter: NetworkFilter = {
                    contracts: { contract: ['ensRegistry'] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithEnsRegistryContracts)
            })

            it(`Should return all networks with a ENS universal resolver contract - ${numNetworksWithEnsUniversalResolverContracts} networks`, () => {
                const filter: NetworkFilter = {
                    contracts: { contract: ['ensUniversalResolver'] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithEnsUniversalResolverContracts)
            })

            it(`Should return all networks with a multicall contract - ${numNetworksWithMulticallContracts} networks`, () => {
                const filter: NetworkFilter = {
                    contracts: { contract: ['multicall3'] },
                }

                const res = getNetworks(filter)

                expect(res.length).to.equal(numNetworksWithMulticallContracts)
            })
        })
    })
    //
    // Requests Specific Entries of the Networks DB
    // Requests Commonly Used by Developers When Querying Networks DB
    //
    describe('Specific & Common Request Tests', () => {
        it('Should return mainnet, goerli and sepolia networks', () => {
            const filter: NetworkFilter = { network: ['mainnet', 'goerli', 'sepolia'] }

            const res = getNetworks(filter)

            for (let i = 0; i < res.length; i++)
                expect(
                    res[i].network.includes('mainnet') ||
                        res[i].network.includes('goerli') ||
                        res[i].network.includes('sepolia'),
                ).to.equal(true)
        })

        it('Should return all provider networks', () => {
            const filter: NetworkFilter = {
                rpcNodes: {
                    provider: {
                        provider: ['infura'],
                    },
                },
            }

            const res = getNetworks(filter)

            for (let i = 0; i < res.length; i++) {
                let v = false
                for (const k in res[i].rpcNodes)
                    if (res[i].rpcNodes[k].provider.provider === 'infura') v = true
                expect(v).to.equal(true)
            }
        })

        it('Should return all provider testnet networks', () => {
            const filter: NetworkFilter = {
                rpcNodes: {
                    provider: {
                        provider: ['infura'],
                    },
                },
                testnet: true,
            }

            const res = getNetworks(filter)

            for (let i = 0; i < res.length; i++) {
                let v = false
                for (const k in res[i].rpcNodes)
                    if (res[i].rpcNodes[k].provider.provider === 'infura') v = true
                expect(v && res[i].testnet).to.equal(true)
            }
        })

        it('Should return all Ethereum mainnet testnet networks', () => {
            const filter: NetworkFilter = { mainnetId: ['1'] }

            const res = getNetworks(filter)

            expect(res.length).to.equal(numTestnets - (numTestnets - 3))
        })

        it('Should return all networks that have at least one authenticated endpoints', () => {
            const filter: NetworkFilter = {
                rpcNodes: {
                    type: ['authenticated'],
                },
            }

            const res = getNetworks(filter)

            // Iterate Networks
            for (let i = 0; i < res.length; i++) {
                let v = false
                // Iterate Network RPC Nodes
                for (const k in res[i].rpcNodes)
                    if (res[i].rpcNodes[k].type === EndpointType.Authenticated) v = true
                expect(v).to.equal(true)
            }
        })
    })
    //
    // Requests Advanced Specific Entries of the Networks DB
    // Requests Advanced Commonly Used by Developers When Querying Networks DB
    // Advanced Requests Imply the Use of Filter Type, Optional and Multilevel Conditions
    //
    describe('Advanced Specific & Common Request Tests', () => {
        // TESTS WITH OPTIONAL, FILTER TYPE & conditions on multiple levels
        // eg -> Should return all testnet networks with privacy providers or authenticated networks
        // it('Should return all testnet networks except Ethereum Mainnet testnets', () => {
        //     const filter: NetworkFilter = {
        //         filterType: 'exclude',
        //         optional: ['testnet', 'mainnetId'],
        //         testnet: false,
        //         mainnetId: ['1'],
        //     }
        //     const result = getNetworks(filter)
        //     console.log('Should return all testnet networks except Ethereum Mainnet testnets')
        //     result.forEach(r => {
        //         console.log(r.name)
        //     })
        //     console.log(`\n\n`)
        //     expect(result.length).to.equal(numTestnets - 3)
        // })
    })
    //
    // Requests Advanced Edge Case Entries of the Network DB
    // Advanced Requests Imply the Use of Filter Type, Optional and Multilevel Conditions
    // Edge Case Requests Imply Requests that Conditions Overlap, Exclude All Dataset...
    //
    describe('Advanced Edge Case Request Tests', () => {
        // TESTS WITH UNUSUAL CONFIGURATIONS AND WRONG INPUTS
        // eg -> Should return all testnet networks with privacy providers or authenticated networks
    })
    //
    // Requests that Should Throw Errors or Invalid States
    //
    describe('Errors Tests', () => {
        // SHOULD INVESTIGATE ON WHAT ERRORS COULD BE THROWN
    })
})

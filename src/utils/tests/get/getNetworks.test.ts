import { expect } from 'chai'
import { EndpointType } from '../../../enums'
import getNetworks from '../../get/getNetworks'
import { type NetworkFilter } from '../../types'

const numNetworks = 95
const numTestnets = 50

describe('Get Networks Function Test', () => {
    describe('Base Tests', () => {
        it('Should return all networks (93 networks)', () => {
            const result = getNetworks()
            expect(result.length).to.equal(numNetworks)
        })

        it('Should return all testnet networks (48 networks)', () => {
            const filter: NetworkFilter = { testnet: true }

            const result = getNetworks(filter)
            expect(result.length).to.equal(numTestnets)
        })

        it('Should return mainnet, goerli and sepolia networks', () => {
            const filter: NetworkFilter = { network: ['mainnet', 'goerli', 'sepolia'] }

            const result = getNetworks(filter)
            expect(result.length).to.equal(3)
            // CHECK RESULT CONTAINS NETWORKS WITH THE NETWORK PARAM THAT MATCHES THE FILTER
        })

        it('Should return all provider networks', () => {
            const filter: NetworkFilter = {
                rpcNodes: {
                    provider: {
                        provider: ['infura'],
                    },
                },
            }

            const result = getNetworks(filter)

            for (let i = 0; i < result.length; i++) {
                let v = false
                for (const k in result[i].rpcNodes)
                    if (result[i].rpcNodes[k].provider.provider === 'infura') v = true
                expect(v).to.equal(true)
            }
        })

        it('Should return all Ethereum mainnet testnet networks', () => {
            const filter: NetworkFilter = { mainnetId: ['1'] }

            const result = getNetworks(filter)

            expect(result.length).to.equal(numTestnets - (numTestnets - 3))
        })

        it('Should return all networks that have at least one authenticated endpoints', () => {
            const filter: NetworkFilter = {
                rpcNodes: {
                    type: ['authenticated'],
                },
            }

            const result = getNetworks(filter)

            for (let i = 0; i < result.length; i++) {
                let v = false
                for (const k in result[i].rpcNodes)
                    if (result[i].rpcNodes[k].type === EndpointType.Authenticated) v = true
                expect(v).to.equal(true)
            }
        })

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
    // describe('Base Tests', () => {
    //     it('Should return all testnet networks with privacy providers or authenticated networks', () => {
    //         const filter: NetworkFilter = {
    //             rpcNodes: {
    //                 type: ['authenticated'],
    //                 provider: {
    //                     privacyLevel: ['privacy'],
    //                 },
    //             },
    //             testnet: true,
    //         }

    //         const result = getNetworks(filter)

    //         console.log(
    //             'Should return all testnet networks with privacy providers or authenticated networks',
    //         )
    //         result.forEach(r => {
    //             console.log(r.name)
    //         })
    //         console.log(`\n\n`)

    //         for (let i = 0; i < result.length; i++) {
    //             let v = false
    //             for (const k in result[i].rpcNodes) {
    //                 if (result[i].rpcNodes[k].provider.provider === 'infura') v = true
    //             }
    //             expect(v).to.equal(true)
    //         }
    //     })
    // })
})

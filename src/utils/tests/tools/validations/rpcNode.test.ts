import { expect } from 'chai'

import { EndpointAuth, EndpointType, ProviderPrivacyLevel } from '../../../../enums'
import { type RpcNode, type RpcProvider } from '../../../../types'
import { validateRpcNode, validateRpcProvider } from '../../../tools/validations'
import { type RpcNodeFilter, type RpcProviderFilter } from '../../../types'

describe('RPC Node Validation Test', () => {
    //
    // RPC Node Validation
    //
    // pre-validation
    describe('pre-validation', () => {
        it('Should return true if filter is undefined', () => {
            const rpcNode: RpcNode = {
                rpcNode: 'alchemy',
                type: EndpointType.Authenticated,
                http: [`https://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
                wss: [`wss://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
                provider: {
                    name: 'Alchemy',
                    provider: 'alchemy',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                },
            }

            let result = validateRpcNode(rpcNode, undefined)
            expect(result).to.equal(true)

            result = validateRpcNode(undefined, undefined)
            expect(result).to.equal(true)
        })

        it('Should return false if filter is defined and param undefined', () => {
            const filter: RpcNodeFilter = {
                filterType: 'include',
                optional: ['type'],
                type: ['authenticated'],
                http: true,
                wss: true,
                provider: {
                    filterType: 'include',
                    optional: ['name', 'privacyLevel'],
                    name: ['alchemy'],
                    provider: ['infura'],
                    privacyLevel: ['partial privacy', ProviderPrivacyLevel.NoPrivacy],
                },
            }

            const result = validateRpcNode(undefined, filter)
            expect(result).to.equal(false)
        })
    })

    // validation
    describe('validation', () => {
        describe('No filter type and no optional', () => {
            it('Should return true if a parameter has match', () => {
                const rpcNode: RpcNode = {
                    rpcNode: 'alchemy',
                    type: EndpointType.Authenticated,
                    http: [`https://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
                    wss: [`wss://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
                    provider: {
                        name: 'Alchemy',
                        provider: 'alchemy',
                        url: 'https://www.alchemy.com/',
                        privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                        privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                    },
                }

                const filter: RpcNodeFilter = {
                    type: ['authenticated'],
                    http: true,
                    wss: true,
                    provider: {
                        filterType: 'include',
                        optional: ['name', 'privacyLevel'],
                        name: ['alchemy'],
                        provider: ['infura'],
                        privacyLevel: ['partial privacy', ProviderPrivacyLevel.NoPrivacy],
                    },
                }

                let result = validateRpcNode(rpcNode, filter)
                expect(result).to.equal(true)

                let providerFilter: RpcProviderFilter = {
                    filterType: 'include',
                    optional: ['name', 'privacyLevel'],
                    name: ['alchemy'],
                    provider: ['infura'],
                    privacyLevel: ['partial privacy', ProviderPrivacyLevel.NoPrivacy],
                }

                result = validateRpcProvider(rpcNode.provider, providerFilter)
                expect(result).to.equal(true)

                providerFilter = {
                    privacyLevel: ['no privacy'],
                }

                result = validateRpcProvider(rpcNode.provider, providerFilter)
                expect(result).to.equal(true)

                providerFilter = {
                    privacyLevel: ['privacy', ProviderPrivacyLevel.NoPrivacy],
                }

                result = validateRpcProvider(rpcNode.provider, providerFilter)
                expect(result).to.equal(true)
            })

            it('Should return false if name / provider / privacy level have no match', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'alchemy',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                let filter: RpcProviderFilter = {
                    name: ['infura'],
                }

                let result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    provider: ['pokt', 'infura'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    privacyLevel: ['privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    privacyLevel: ['partial privacy', ProviderPrivacyLevel.Null],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)
            })
        })

        describe('Filter type and no optional', () => {
            it('Should return false if name / provider / privacy level match - exclude filter', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'alchemy',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                let filter: RpcProviderFilter = {
                    filterType: 'exclude',
                    name: ['alchemy'],
                }

                let result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    filterType: 'exclude',
                    provider: ['alchemy', 'infura'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    filterType: 'exclude',
                    privacyLevel: ['no privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    filterType: 'exclude',
                    privacyLevel: ['privacy', ProviderPrivacyLevel.NoPrivacy],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)
            })

            it('Should return true if name / provider / privacy level have no match - exclude filter', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'alchemy',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                let filter: RpcProviderFilter = {
                    filterType: 'exclude',
                    name: ['infura'],
                }

                let result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)

                filter = {
                    filterType: 'exclude',
                    provider: ['pokt', 'infura'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)

                filter = {
                    filterType: 'exclude',
                    privacyLevel: ['privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)

                filter = {
                    filterType: 'exclude',
                    privacyLevel: ['partial privacy', ProviderPrivacyLevel.Null],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)
            })
        })

        describe('No filter type and optional', () => {
            it('Should return true if name and privacy match or provider match', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'infura',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                let filter: RpcProviderFilter = {
                    optional: ['provider'],
                    name: ['alchemy'],
                    provider: ['infura'],
                    privacyLevel: ['no privacy'],
                }

                let result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)

                filter = {
                    optional: ['provider'],
                    name: ['infura'],
                    provider: ['infura'],
                    privacyLevel: ['no privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)

                filter = {
                    optional: ['provider'],
                    name: ['alchemy'],
                    provider: ['alchemy'],
                    privacyLevel: ['no privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)
            })

            it('Should return false if name or privacy do not match and provider does not match', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'alchemy',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                const filter: RpcProviderFilter = {
                    optional: ['provider'],
                    name: ['infura'],
                    provider: ['pokt'],
                    privacyLevel: ['no privacy'],
                }

                const result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)
            })
        })

        describe('Filter type and optional', () => {
            it('Should return false if name and privacy match or provider match - exclude', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'infura',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                let filter: RpcProviderFilter = {
                    filterType: 'exclude',
                    optional: ['provider'],
                    name: ['alchemy'],
                    provider: ['infura'],
                    privacyLevel: ['no privacy'],
                }

                let result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    filterType: 'exclude',
                    optional: ['provider'],
                    name: ['infura'],
                    provider: ['infura'],
                    privacyLevel: ['no privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)

                filter = {
                    filterType: 'exclude',
                    optional: ['provider'],
                    name: ['alchemy'],
                    provider: ['alchemy'],
                    privacyLevel: ['no privacy'],
                }

                result = validateRpcProvider(provider, filter)
                expect(result).to.equal(false)
            })

            it('Should return true if name or privacy do not match and provider does not match - exclude', () => {
                const provider: RpcProvider = {
                    name: 'Alchemy',
                    provider: 'alchemy',
                    url: 'https://www.alchemy.com/',
                    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
                    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
                }

                const filter: RpcProviderFilter = {
                    filterType: 'exclude',
                    optional: ['provider'],
                    name: ['infura'],
                    provider: ['pokt'],
                    privacyLevel: ['no privacy'],
                }

                const result = validateRpcProvider(provider, filter)
                expect(result).to.equal(true)
            })
        })
    })
})

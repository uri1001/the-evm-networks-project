import { expect } from 'chai'

import { BlockExplorerStandard, BlockExplorerType, ProviderPrivacyLevel } from '../../../../../enums'

import {
    validateBlockExplorerStandard,
    validateBlockExplorerType,
    validatePrivacyLevel,
} from '../../../../tools/validations/core'

describe('Enum Validations Test', () => {
    //
    // Privacy Level Tests
    //
    describe('Validate Privacy Level Enum Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validatePrivacyLevel(ProviderPrivacyLevel.Privacy, undefined)
                expect(result).to.equal(true)

                result = validatePrivacyLevel(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is defined and param undefined', () => {
                const result = validatePrivacyLevel(undefined, [ProviderPrivacyLevel.Privacy])
                expect(result).to.equal(false)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if level arg is found in the filter', () => {
                let result = validatePrivacyLevel(ProviderPrivacyLevel.Privacy, [
                    ProviderPrivacyLevel.Privacy,
                ])
                expect(result).to.equal(true)

                result = validatePrivacyLevel(ProviderPrivacyLevel.Null, [
                    ProviderPrivacyLevel.Privacy,
                    ProviderPrivacyLevel.Null,
                ])
                expect(result).to.equal(true)

                result = validatePrivacyLevel(ProviderPrivacyLevel.Privacy, ['privacy'])
                expect(result).to.equal(true)

                result = validatePrivacyLevel(ProviderPrivacyLevel.Null, ['privacy', 'null'])
                expect(result).to.equal(true)
            })

            it('Should return false if level arg is not found in the filter', () => {
                let result = validatePrivacyLevel(ProviderPrivacyLevel.Privacy, [
                    ProviderPrivacyLevel.NoPrivacy,
                ])
                expect(result).to.equal(false)

                result = validatePrivacyLevel(ProviderPrivacyLevel.TBD, [
                    ProviderPrivacyLevel.NoInfo,
                    ProviderPrivacyLevel.Null,
                ])
                expect(result).to.equal(false)

                result = validatePrivacyLevel(ProviderPrivacyLevel.Privacy, ['no privacy info'])
                expect(result).to.equal(false)

                result = validatePrivacyLevel(ProviderPrivacyLevel.TBD, ['no privacy info', 'null'])
                expect(result).to.equal(false)
            })
        })
    })
    //
    // Block Explorer Type Tests
    //
    describe('Validate Block Explorer Type Enum Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateBlockExplorerType(BlockExplorerType.Etherscan, undefined)
                expect(result).to.equal(true)

                result = validateBlockExplorerType(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is defined and param undefined', () => {
                const result = validateBlockExplorerType(undefined, [BlockExplorerType.Etherscan])
                expect(result).to.equal(false)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if type arg is found in the filter', () => {
                let result = validateBlockExplorerType(BlockExplorerType.Etherscan, [
                    BlockExplorerType.Etherscan,
                ])
                expect(result).to.equal(true)

                result = validateBlockExplorerType(BlockExplorerType.Null, [
                    BlockExplorerType.Blockscout,
                    BlockExplorerType.Null,
                ])
                expect(result).to.equal(true)

                result = validateBlockExplorerType(BlockExplorerType.Etherscan, ['etherscan'])
                expect(result).to.equal(true)

                result = validateBlockExplorerType(BlockExplorerType.Null, ['blockscout', 'null'])
                expect(result).to.equal(true)
            })

            it('Should return false if type arg is not found in the filter', () => {
                let result = validateBlockExplorerType(BlockExplorerType.Independent, [
                    BlockExplorerType.Subscan,
                ])
                expect(result).to.equal(false)

                result = validateBlockExplorerType(BlockExplorerType.Independent, [
                    BlockExplorerType.Blockscout,
                    BlockExplorerType.Null,
                ])
                expect(result).to.equal(false)

                result = validateBlockExplorerType(BlockExplorerType.Independent, ['subscan'])
                expect(result).to.equal(false)

                result = validateBlockExplorerType(BlockExplorerType.Independent, [
                    'blockscout',
                    'null',
                ])
                expect(result).to.equal(false)
            })
        })
    })
    //
    // Block Explorer Standard Tests
    //
    describe('Validate Block Explorer Standard Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, undefined)
                expect(result).to.equal(true)

                result = validateBlockExplorerStandard(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is defined and param undefined', () => {
                const result = validateBlockExplorerStandard(undefined, [
                    BlockExplorerStandard.EIP3091,
                ])
                expect(result).to.equal(false)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if standard arg is found in the filter', () => {
                let result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, [
                    BlockExplorerStandard.EIP3091,
                ])
                expect(result).to.equal(true)

                result = validateBlockExplorerStandard(BlockExplorerStandard.Null, [
                    BlockExplorerStandard.None,
                    BlockExplorerStandard.Null,
                ])
                expect(result).to.equal(true)

                result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, ['eip3091'])
                expect(result).to.equal(true)

                result = validateBlockExplorerStandard(BlockExplorerStandard.Null, ['none', 'null'])
                expect(result).to.equal(true)
            })

            it('Should return false if standard arg is not found in the filter', () => {
                let result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, [
                    BlockExplorerStandard.Null,
                ])
                expect(result).to.equal(false)

                result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, [
                    BlockExplorerStandard.None,
                    BlockExplorerStandard.Null,
                ])
                expect(result).to.equal(false)

                result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, ['null'])
                expect(result).to.equal(false)

                result = validateBlockExplorerStandard(BlockExplorerStandard.EIP3091, [
                    'none',
                    'null',
                ])
                expect(result).to.equal(false)
            })
        })
    })
})

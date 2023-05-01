import { type NetworkFilter } from '../types'

//
// Simple Filters
//

export const s1Filter: NetworkFilter = {
    id: [1],
    network: ['mainnet'],
}

export const s2Filter: NetworkFilter = {
    id: ['1'],
    network: ['mainnet'],
    testnet: false,
}

export const s3Filter: NetworkFilter = {
    id: [1, 5, 10, 111002233322111],
    network: ['mainnet'],
}

export const s4Filter: NetworkFilter = {
    id: [1, 10, '99999999999999', '369'],
    network: ['mainnet'],
}

export const s5Filter: NetworkFilter = {
    testnet: true,
}

import type Address from './address'

interface Contract {
    address: Address
    blockCreated?: number
}

export default Contract

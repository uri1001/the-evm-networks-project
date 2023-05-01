export const nativeCurrencyFilterParams: Array<'name' | 'symbol' | 'uSymbol' | 'decimals'> = [
    'name',
    'symbol',
    'uSymbol',
    'decimals',
]

//
// Native Currency Filter
//

interface nativeCurrencyFilter {
    filterType?: 'include' | 'exclude' // if filter includes or excludes entries that match conditions (default is include)
    optional?: typeof nativeCurrencyFilterParams // paramters included are checked by OR logic (by default checked by AND)
    name?: string[] // - validateString()
    symbol?: string[] // - validateString()
    uSymbol?: string[] // - validateString()
    decimals?: number[] // - validateNumber()
}

export default nativeCurrencyFilter

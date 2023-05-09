// can accept an array of networks to extract endpoints from

// RETURNS ARRAY OF BLOCK EXPLORER API ENDPOINTS FROM GIVEN NETWORKS OR FILTERING NETWORKS
// CONSIDER DOING FORMATTING IN SEPARATE FUNCTION
// FILTERING BY BLOCK EXPLORER SHOULD BE POSSIBLE
// ACCEPTS ARRAY OF NETWORKS
const getApiEndpoints = (
    _action?:
        | 'none'
        | 'getcontractcreation'
        | 'getsourcecode'
        | 'getabi'
        | 'gasoracle'
        | 'currencyprice'
        | 'currencysupply',
): string[] => {
    return []
}

export default getApiEndpoints

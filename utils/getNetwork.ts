// ID can be network ID as number or string or network name as string
const getNetwork = (id: number | string): void => {
    if (isNaN(+id)) {
        // NETWORK SHOULD BE CHECKED BY NETWORK NAME
    } else {
        // NETWORK SHOULD BE CHECKED BY NETWORK ID
    }
}

export default getNetwork

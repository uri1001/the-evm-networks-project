// ID can be network ID as number or string
const getNetworkName = (id: number | string): string => {
    if (!isNaN(+id)) {
        // ID IS A NUMBER
        return ''
    }
    return ''
}

export default getNetworkName

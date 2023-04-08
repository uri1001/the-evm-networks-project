import { EndpointAuth } from '../enums'

const formatAuthEndpoint = (endpoint: string, privateKey: string, projectId?: string): string => {
    endpoint = endpoint.replace(EndpointAuth.PrivateKey, privateKey)
    if (projectId != null) endpoint = endpoint.replace(EndpointAuth.ProjectId, projectId)
    return endpoint
}

export default formatAuthEndpoint

import { BaseApiClient } from './base'

const ADD_HEXA_PATH = (repoId) => `/hexa/`
const GET_ALL_HEXA_PATH = `/hexa/`
const SEARCH_HEXA_PATH = (hexaName) => `/hexa/${hexaName}`
const REMOVE_HEXA_PATH = (hexaName) => `/hexa/${hexaName}`

export default class HexaApiClient extends BaseApiClient {
  getAllHexa(hexaName, neighbor, border) {
  	const additionalInfo = {
  		neighbor: neighbor,
  		border: border
  	}
    return this.httpClient.post(ADD_HEXA_PATH(hexaName), { body: additionalInfo })
  }

  removeHexa(hexaName) {
    return this.httpClient.delete(REMOVE_HEXA_PATH(hexaName))
  }

  searchHexa(hexaName) {
    return this.httpClient.get(SEARCH_HEXA_PATH(hexaName))
  }

  getAllHexa() {
    return this.httpClient.get(GET_ALL_HEXA_PATH)
  }
}

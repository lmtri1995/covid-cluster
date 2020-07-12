import { BaseApiClient } from './base';

const ADD_HEXA_PATH = `/hexa/`;
const GET_ALL_HEXA_PATH = `/hexa/`;
const SEARCH_HEXA_PATH = (hexaName) => `/hexa/${hexaName}`;
const REMOVE_HEXA_PATH = (hexaName) => `/hexa/${hexaName}`;

export default class HexaApiClient extends BaseApiClient {
  addHexa(addInfo) {
    return this.httpClient.post(ADD_HEXA_PATH, { body: addInfo });
  }

  removeHexa(hexaName) {
    return this.httpClient.delete(REMOVE_HEXA_PATH(hexaName));
  }

  searchHexa(hexaName) {
    return this.httpClient.get(SEARCH_HEXA_PATH(hexaName));
  }

  getAllHexa() {
    return this.httpClient.get(GET_ALL_HEXA_PATH);
  }
}

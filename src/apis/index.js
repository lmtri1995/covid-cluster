import { ApiHttpClient } from './base'
import HexaApiClient from './HexaApiClient'

const { REACT_APP_API_URL } = process.env

export class ApiClient {
  constructor() {
    this.httpClient = new ApiHttpClient({
      baseURL: REACT_APP_API_URL,
    })
    this.api = new HexaApiClient(this.httpClient)
  }

}

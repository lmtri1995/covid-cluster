import { HttpClient } from '../clients/http/client'

export class ApiHttpClient extends HttpClient {
  constructor(config) {
    super(config)
    this.getHttpClient().interceptors.request.use()
  }

}

export class BaseApiClient {
  constructor(httpClient) {
    this.httpClient = httpClient
  }
}

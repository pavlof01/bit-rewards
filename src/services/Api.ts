import axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';

const API_BASE_URL = 'http://crm.inprg.com/api-client';

class Api {
  private static instance: Api;
  private static authToken: string;
  private axiosInstance: AxiosInstance;
  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static setAuthToken(token: string) {
    this.authToken = token;
    Api.getInstance().axiosInstance.defaults.headers.common['X-Auth-Token'] = this.authToken;
  }

  static get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().get(url, config);
  }

  static post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().post(url, data, config);
  }

  /**
   * Загружает пагинированный список action'ов для offer'ов.
   *
   * @param {number} page - загружаемая страница.
   * @param {number} perPage - количество элементов на странице.
   * @return {AxiosPromise<Object>}
   */
  static getOfferAction<T = any>(page: number, perPage: number): AxiosPromise<T> {
    return Api.get('/offer/action', {
      params: {
        page,
        perPage,
      },
    });
  }

  /**
   * Загружает список транзакций для определенного мерчанта.
   *
   * @param {string} partnerKey - ключ мерчанта, например: 'test-partner-key'
   * @param {number} page - загружаемая страница.
   */
  static getTransactionList<T = any>(partnerKey: string, page: number): AxiosPromise<T> {
    return Api.get(`/${partnerKey}/transaction`, {
      params: {
        page,
      },
    });
  }

}

export default Api;

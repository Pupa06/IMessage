/* eslint-disable no-param-reassign */
import axios from 'axios'
import { ERP_URL } from '../constants/apis'

export default class Axios {
  static instance;

  axiosApi;

  constructor(baseURL = ERP_URL) {
    this.axiosApi = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': true,
      },
    })
  }

  static getInstance() {
    this.instance = this.instance ?? new Axios()
    return this.instance
  }

  setToken(token) {
    this.axiosApi.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      },
    )
  }

  get(
    url,
    config,
  ) {
    return this.axiosApi.get(url, config)
  }

  post(
    url,
    data,
    config,
  ) {
    return this.axiosApi.post(url, data, config)
  }

  put(
    url,
    data,
    config,
  ) {
    return this.axiosApi.put(url, data, config)
  }

  delete(
    url,
    config,
  ) {
    return this.axiosApi.delete(url, config)
  }
}

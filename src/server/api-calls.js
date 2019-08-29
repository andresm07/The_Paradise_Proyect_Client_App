import apiRequest from './api-request';
import {
  PATH
  } from '../utils/url.constants';

  export const llamadoAPI = (parametros, successCallback, errorCallback) => {
    apiRequest({
      url: PATH,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        parametros: parametros
      },
      onSuccess: response => { successCallback(response) },
      onError: error => { errorCallback(error) }
    })
  }

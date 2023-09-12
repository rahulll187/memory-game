import {AxiosResponse} from 'axios';
import axios from 'axios';

/* Set base url for api */
// axios.defaults.baseURL = API_URL;

// const CancelToken = axios.CancelToken;
// let source = CancelToken.source();
/* Set common header parameters */

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

/**
 * Set header authorization
 * @param token     Authorization token
 */
const setHeaderAuthorization = (token?: string) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

/**
 * Cancel all request
 */
// const cancelAllRequest = () => {
//   source.cancel();
//   setTimeout(() => {
//     source = CancelToken.source();
//   }, 1500);
// };

/**
 * Handle Axios response
 * @param res   HTTP Response
 * @returns     Return data
 */
const getResponse = (res?: any) => {
  if (res && (res.status === 200 || res.status === 201 || res.status === 204)) {
    if (res.status === 201 || res.status === 204) {
      res.data = true;
    }
    return res.data;
  }
  throw new Error('Some error occur');
};

/**
 * Get request
 * @param path      API url path
 * @param params    Request parameters
 */
const get = (path: string, params?: any): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(path, {params}).then(getResponse).then(resolve).catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Post request
 * @param path      API url path
 * @param params    Request parameters
 */
const post = (path: string, params?: any): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(path, params || {})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Put request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
const put = (
  path: string,
  params?: any,
  headers?: any,
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .put(path, params || {}, {headers})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

const remove = (
  path: string,
  params?: any,
  headers?: any,
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .delete(path, {data: params}, {headers})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  get,
  post,
  put,
  remove,
  setHeaderAuthorization,
};

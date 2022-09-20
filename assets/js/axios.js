import { BASE_API_URL, ACCESS_TOKEN_NAME } from "./constant.js";

const axiosBaseQuery = axios.create({
  baseURL: BASE_API_URL,
});

axiosBaseQuery.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosBaseQuery.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const data = response.data;

    if (data.data.tokens) {
      const token = data.data.tokens.access_token;
      localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(token))
      axiosBaseQuery.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

    }
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosBaseQuery;

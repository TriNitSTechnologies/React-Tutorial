import axios from "axios"; // Add a request interceptor

export const API = axios.create();

// Add a request interceptor
API.interceptors.request.use(
  function (config) {
    console.log('Request interceptor: ');

     // Do something before request is sent
     const token = sessionStorage.getItem("SESSION_KEY");
     config.headers = {
       "Authorization-key": `Bearer ${token}`,
     };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Response interceptor: ')
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

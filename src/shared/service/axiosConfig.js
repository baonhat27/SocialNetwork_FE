import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'content-type': 'application/json',
    }
});
axiosClient.interceptors.request.use(async (config) => {
    const customHeaders = {};
  
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      customHeaders.Authorization = accessToken;
    }
  
    return {
      ...config,
      headers: {
        ...customHeaders,  // auto attach token
        ...config.headers, // but you can override for some requests
      }
    };
  });
  export default axiosClient;
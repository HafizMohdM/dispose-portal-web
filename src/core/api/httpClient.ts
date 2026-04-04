import axios, { type AxiosInstance } from 'axios';
import { requestInterceptor, requestErrorHandler } from './requestInterceptor';
import { responseInterceptor, responseErrorHandler } from './responseInterceptor';

const httpClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Link the separate interceptor files
httpClient.interceptors.request.use(requestInterceptor, requestErrorHandler);
httpClient.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default httpClient;
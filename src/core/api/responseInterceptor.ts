import type { AxiosResponse } from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
    return response;
};

export const responseErrorHandler = (error: any) => {
    if (error.response?.status === 401) {
        // Logic for global logout or redirecting to login goes here
        console.error("Session expired. Redirecting...");
    }
    return Promise.reject(error);
};
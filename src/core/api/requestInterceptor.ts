import type { InternalAxiosRequestConfig } from 'axios';
import { tokenManager } from './tokenManager';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = tokenManager.getToken();

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

export const requestErrorHandler = (error: any) => {
    return Promise.reject(error);
};